'use client';

import Link from 'next/link';
import { Card, CardFooter, Button } from '@nextui-org/react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../loading/loading';

const PostRow = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleNext = (e: any) => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = (e: any) => {
    if (currentPage > 1) {
      // Check if the current page is greater than 1
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/api/blog/page/${currentPage}`);
      const newProducts = response.data;
      if (newProducts.length === 0) {
        setHasMore(false); // No more data available
      } else {
        setPosts(newProducts);
        setHasMore(true);
      }
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <>
      <div className="md:px-16 grid grid-cols-2  md:mt-20 justify-center  md:grid-cols-3 w-full gap-2 md:gap-6 items-center px-2">
        {posts.map((post: any, index: number) => (
          <Suspense fallback={<Loading />}>
            <Card isFooterBlurred radius="none" className="border-none relative w-full h-52 md:h-96" key={index}>
              <Image alt={post.title} className="object-cover" src={post.img} fill />
              <CardFooter className="justify-between h-10 md:h-16   before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute  bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <div className="flex flex-col mx-2">
                  <Link href={`/kategori/${post.category}`} className="text-md text-white hover:text-white/70 transition-colors font-semibold">
                    {post.category}
                  </Link>
                  <p className="text-tiny text-white/80 ">{post.title}</p>
                </div>
                <Button radius="none" as={Link} href={`/${post.slug}`} className="text-tiny text-white bg-black/20" variant="flat" color="default" size="sm">
                  Read
                </Button>
              </CardFooter>
            </Card>
          </Suspense>
        ))}
      </div>
      <div className="flex w-full justify-center gap-4 my-8">
        {currentPage > 1 && (
          <div className="">
            <Button radius="none" className="bg-primary text-white " onClick={handlePrev}>
              <FaArrowLeft />
            </Button>
          </div>
        )}
        {hasMore ? (
          <div className="">
            <Button radius="none" className="bg-primary text-white " onClick={handleNext}>
              <FaArrowRight />
            </Button>
          </div>
        ) : (
          <div className="hidden">
            <Button radius="none" className="bg-primary text-white " onClick={handleNext}>
              <FaArrowRight />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default PostRow;
