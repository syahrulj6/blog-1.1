import Link from 'next/link';
import styles from './trendingPost.module.css';
import Image from 'next/image';
import Category from '../category/Category';
import { getPosts } from '@/lib/data';

const TrendingPost = async () => {
  const posts = await getPosts();

  const renderPost = () => {
    return posts.map((post: any, index: number) => {
      if (index > 21 && index < 26) {
        return (
          <div className={styles.content} key={index}>
            <div className={styles.top}>
              <Link href={`/${post.slug}`}>
                <Image src={post.img} alt="image" fill className={styles.img} />
              </Link>
            </div>
            <div className={styles.bottom}>
              <Category title={post.category} style={'text-xs md:text-sm md:text-sm mx-auto relative lg:-top-10 -top-10 bg-white '} />
              <Link href={`/${post.slug}`} className={styles.title}>
                {post.title}
              </Link>
              <Link href={`/${post.slug}`} className={styles.desc}>
                {post.desc}
              </Link>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tagline}>
        <Image src={'/fire.png'} alt="icon" width={30} height={30} className="mx-auto" />
        <h2 className={styles.tagline}>Now Trending</h2>
      </div>
      <div className={styles.container}>{renderPost()}</div>
    </div>
  );
};

export default TrendingPost;
