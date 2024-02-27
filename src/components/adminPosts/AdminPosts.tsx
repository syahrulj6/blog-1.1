import { getPosts } from '@/lib/data';
import styles from './adminposts.module.css';
import Image from 'next/image';
import { deletePost } from '@/lib/actions';

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts</h1>
      <div className="h-[750px] overflow-y-scroll px-3">
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <div className={styles.detail}>
              <Image src={post.img || '/noAvatar.png'} alt="" width={50} height={50} />
              <span className={styles.postTitle}>{post.title}</span>
            </div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={post.id} />
              <button className="bg-red-300 text-red-500 px-3 py-2 rounded-md">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminPosts;
