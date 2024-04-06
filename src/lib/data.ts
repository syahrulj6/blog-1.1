import { Post, User } from './models';
import { connectToDB } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error: any) {
    throw new Error('Error Fetching Posts', error);
  }
};

export const getPost = async (slug: string) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error: any) {
    throw new Error('Error Fetching Post', error);
  }
};

export const getPostsByCategory = async (category: string) => {
  try {
    connectToDB();
    const posts = await Post.find({ category });
    return posts;
  } catch (error: any) {
    throw new Error('Error Fetching Posts', error);
  }
};

export const getPostsLimit = async (page: number) => {
  try {
    connectToDB();
    const posts = await Post.find()
      .skip((page - 1) * 6) // Calculate how many documents to skip
      .limit(6); // Limit the number of documents returned per page
    return posts;
  } catch (error: any) {
    throw new Error('Error Fetching Posts', error);
  }
};

export const getUser = async (id: any) => {
  noStore();
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch user!');
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error: any) {
    throw new Error('Error Fetching Posts', error);
  }
};
