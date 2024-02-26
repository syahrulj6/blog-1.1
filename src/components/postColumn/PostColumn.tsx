import styles from './postColumn.module.css';
import Link from 'next/link';
import Category from '../category/Category';
import Image from 'next/image';

const PostColumn = async ({ posts, from, to }: { posts: any; from: number; to: number }) => {
  const renderPost = () => {
    return posts.map((post: any, index: number) => {
      if (index > from && index < to) {
        return (
          <div className={styles.container} key={index}>
            <div className={styles.left}>
              <Link href={`/${post.slug}`}>
                <Image src={post.img} alt="postImg" fill className={styles.img} />
              </Link>
            </div>
            <div className={styles.right}>
              <Category title={post.category} style={'text-xs md:text-lg lg:text-lg'} />
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.desc}>{post.desc}</p>
            </div>
          </div>
        );
      }
    });
  };

  return <div className={styles.wrapper}>{renderPost()}</div>;
};

export default PostColumn;
