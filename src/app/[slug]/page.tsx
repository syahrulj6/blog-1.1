import Image from 'next/image';
import styles from './singlePost.module.css';
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
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <Category title={post.category} style={'text-md mx-auto'} />
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.stripe} />
          <div className={styles.detail}>
            <div className={styles.detailText}>{post.createdAt && <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>}</div>
          </div>
        </div>
        <div className={styles.imgContainer}>{post.img && <Image src={post.img} alt="" fill className={styles.img} />}</div>
        <div className={styles.content}>{post.desc}</div>
        <TrendingPost />
      </div>
    );
};

export default SinglePostPage;
