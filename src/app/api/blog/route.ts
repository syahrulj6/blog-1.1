import { Post } from '@/lib/models';
import { connectToDB } from '@/lib/utils';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    connectToDB();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};
