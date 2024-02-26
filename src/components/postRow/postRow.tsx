import Link from 'next/link';
import styles from './postRow.module.css';
import Image from 'next/image';
import Category from '../category/Category';

const PostRow = async ({ posts, tagline, from, to, tagIcon }: { posts: any; tagline: string; from: number; to: number; tagIcon: string }) => {
  const renderPost = () => {
    return posts.map((post: any, index: number) => {
      if (index > from && index < to) {
        return (
          <div className={styles.content} key={index}>
            <div className={styles.left}>
              <Link href={`/${post.slug}`}>
                <Image src={post.img} alt="image" fill className={styles.img} />
              </Link>
            </div>
            <div className={styles.right}>
              <Category title={post.category} style={'text-sm '} />
              <Link href={`/${post.slug}`} className={styles.title}>
                {post.title}
              </Link>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tagContainer}>
        <Image src={tagIcon} alt="" width={20} height={20} />
        <h2 className={styles.tagline}>{tagline}</h2>
      </div>

      <div className={styles.container}>{renderPost()}</div>
    </div>
  );
};

export default PostRow;
