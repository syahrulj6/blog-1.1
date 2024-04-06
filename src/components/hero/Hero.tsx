'use client';
import { Card, CardFooter, Button } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '../loading/loading';

export const Hero = () => {
  const [randomPosts, setRandomPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/blog');
        const data = response.data;
        const randomItems: any = [];

        // Generate 4 random indices
        const randomIndices = new Set();
        while (randomIndices.size < 4) {
          randomIndices.add(Math.floor(Math.random() * data.length));
        }

        // Get the data at random indices
        randomIndices.forEach((index: any) => {
          randomItems.push(data[index]);
        });

        setRandomPosts(randomItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="hidden md:grid md:grid-cols-2 px-12 lg:px-24 gap-6 justify-center items-center">
      {randomPosts.map((post: any) => (
        <Suspense fallback={<Loading />}>
          <Card isFooterBlurred radius="none" className="w-full  relative  h-[400px] " key={post._id}>
            <Image alt={post.title} className="object-cover" src={post.img} fill />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute   bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <div className="flex flex-col ">
                <Link href={`/kategori/${post.category}`} className="text-md text-white hover:text-white/70 transition-colors font-semibold">
                  {post.category}
                </Link>
                <p className="text-tiny text-white/80">{post.title}</p>
              </div>
              <Button as={Link} href={post.slug} className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="none" size="sm">
                Read
              </Button>
            </CardFooter>
          </Card>
        </Suspense>
      ))}
    </div>
  );
};
