import { getUser } from '@/lib/data';
import styles from './postUser.module.css';
import Image from 'next/image';

const PostUser = async ({ userId }: { userId: any }) => {
  const user = await getUser(userId);
  if (user !== undefined)
    return (
      <div className={styles.container}>
        <Image src={user.img ? user.img : '/noavatar.png'} alt="" height={50} width={70} className={styles.avatar} />
        <div className={styles.texts}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>{user.username}</span>
        </div>
      </div>
    );
};

export default PostUser;
