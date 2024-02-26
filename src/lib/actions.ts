'use server';

import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDB } from './utils';
// import { signIn, signOut } from './auth';
import bcrypt from 'bcryptjs';
import { signOut, signIn } from './auth';

export const addPost = async (prevState: any, formData: any) => {
  function removeSpacesAndReplaceWithHyphen(str: string) {
    // Replace spaces with hyphens using regular expression
    return str.replace(/\s+/g, '-');
  }

  const { title, desc, slug, category, userId, img } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug: removeSpacesAndReplaceWithHyphen(slug),
      category,
      userId,
      img,
    });

    await newPost.save();
    console.log('saved to db');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const deletePost = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/blog');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const addUser = async (prevState: any, formData: any) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log('saved to db');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const deleteUser = async (formData: any) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log('deleted from db');
    revalidatePath('/admin');
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const handleGithubLogin = async () => {
  'use server';
  await signIn('github');
};

export const handleLogout = async () => {
  'use server';
  await signOut();
};

export const register = async (previousState: any, formData: any) => {
  const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: 'Passwords do not match' };
  }

  try {
    connectToDB();

    const user = await User.findOne({ username });

    if (user) {
      return { error: 'Username already exists' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log('saved to db');

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: 'Something went wrong!' };
  }
};

export const login = async (prevState: any, formData: any) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (err: any) {
    console.log(err);

    if (err.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }
    throw err;
  }
};

export const searchPostsByTitle = async (searchTerm: string) => {
  try {
    connectToDB(); // Connect to MongoDB
    const regex = new RegExp(searchTerm, 'i'); // Case-insensitive search
    const posts = await Post.find({ title: regex });
    return posts;
  } catch (error: any) {
    throw new Error('Error searching posts:', error);
  }
};
