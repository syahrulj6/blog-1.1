import Link from 'next/link';
import styles from './category.module.css';

const Category = ({ title, style }: { title: string; style: any }) => {
  return (
    <Link href={title} className={`${styles.category} ${style}`}>
      {title}
    </Link>
  );
};

export default Category;
