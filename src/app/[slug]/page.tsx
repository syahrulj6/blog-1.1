import Image from 'next/image';
import { getPost } from '@/lib/data';
import Category from '@/components/category/Category';
import TrendingPost from '@/components/trendingPost/TrendingPost';

export const generateMetadata = async ({ params }: { params: any }) => {
  const { slug } = params;

  const post: any = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }: { params: any }) => {
  const { slug } = params;

  const post: any = await getPost(slug);

  if (post !== undefined)
    return (
      <div className="flex flex-col gap-6 md:gap-12 px-2  md:px-12 mt-12">
        <div className="w-full flex flex-col text-center gap-5 justify-center items-center">
          <Category title={post.category} style={'text-md mx-auto'} />
          <h1 className="md:text-6xl text-xl font-semibold">{post.title}</h1>
          <div className="md:w-[98%] w-10/12 bg-white h-1 " />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">{post.createdAt && <span className="font-semibold">{post.createdAt.toString().slice(4, 16)}</span>}</div>
          </div>
        </div>
        <div className="w-full relative h-[400px] md:h-screen rounded ">{post.img && <Image src={post.img} alt="" fill className="object-cover px-8 rounded" />}</div>
        <div className="md:text-3xl text-lg px-4 text-center md:px-8">{post.desc}</div>
        <TrendingPost />
      </div>
    );
};

export default SinglePostPage;
