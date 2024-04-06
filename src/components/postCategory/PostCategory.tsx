import Link from 'next/link';
import Category from '../category/Category';
import Image from 'next/image';
import styles from './postCategory.module.css';

interface PostCategoryProps {
  category: string;
  posts: any[];
}

const PostCategory: React.FC<PostCategoryProps> = ({ category, posts }) => {
  const renderPost = () => {
    return posts
      .filter((post) => post.category === category) // Filter posts by category
      .map((post, index) => (
        <div className={styles.container} key={index}>
          <div className={styles.left}>
            <Link href={`/${post.slug}`}>
              <Image src={post.img} alt="postImg" fill className={styles.img} />
            </Link>
          </div>
          <div className={styles.right}>
            <Category title={post.category} style={'text-xs md:text-lg lg:text-lg mix-blend-difference	'} />
            <Link href={`/${post.slug}`} className={styles.title}>
              {post.title}
            </Link>
            <Link href={`/${post.slug}`} className={`${styles.desc} hover:text-white mix-blend-difference transition-colors`}>
              {post.desc}
            </Link>
          </div>
        </div>
      ));
  };

  return <div className={styles.wrapper}>{renderPost()}</div>;
};

export default PostCategory;
