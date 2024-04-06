import { Post } from '@/lib/models';
import { connectToDB } from '@/lib/utils';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  try {
    connectToDB();

    const { pathname } = request.nextUrl;
    const slug = pathname.split('/').pop(); // Extracting the slug from the URL pathname
    const page = parseInt(slug || '1', 10);
    const pageSize = 6;
    const startIndex = (page - 1) * pageSize;

    const posts = await Post.find().skip(startIndex).limit(pageSize);
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts!');
  }
};
