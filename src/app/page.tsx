import { getPosts } from '@/lib/data';
import styles from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import PostRow from '@/components/postRow/postRow';
import Category from '@/components/category/Category';
import PostColumn from '@/components/postColumn/PostColumn';

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      {/* MAIN CONTENT */}
      <main className={styles.wrapper}>
        <div className={styles.post1}>
          {posts.map((post: any, index: number) => {
            if (index < 2) {
              return (
                <div key={post.id}>
                  <div className={styles.container1}>
                    <div className={styles.top1}>
                      {post.img && (
                        <Link className={styles.imgContainer1} href={`/${post.slug}`}>
                          <Image src={post.img} alt="" fill className={styles.img1} />
                        </Link>
                      )}
                      <Category title={post.category} style={'text-[8px] m-auto rotate-[270deg] '} />
                    </div>

                    <div className={styles.bottom1}>
                      <Link href={`/${post.slug}`} className={styles.title1}>
                        {post.title}
                      </Link>
                      <Link href={`/${post.slug}`} className={styles.desc1}>
                        {post.desc}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className={styles.post2}>
          <div>
            {posts.map((post: any, index: number) => {
              if (index > 7 && index < 9) {
                return (
                  <div key={post._id}>
                    <div className={styles.container2}>
                      <div className={styles.top2}>
                        {post.img && (
                          <Link href={`/${post.slug}`} className={styles.imgContainer2}>
                            <Image src={post.img} alt="" fill className={styles.img2} />
                          </Link>
                        )}
                        <Category title={post.category} style={'text-lg m-auto lg:rotate-[270deg] relative bottom-5 bg-white '} />
                      </div>
                      <div className={styles.bottom2}>
                        <Link href={`/${post.slug}`} className={styles.title2}>
                          {post.title}
                        </Link>
                        <Link href={`/${post.slug}`} className={styles.desc2}>
                          {post.desc}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </main>

      {/* SECOND CONTENT */}

      <div>
        <PostRow from={5} to={9} posts={posts} tagline="Popular" tagIcon="/chat-arrow-grow.png" />
      </div>

      {/* THIRD CONTENT */}
      <div>
        <PostColumn posts={posts} from={12} to={16} />
      </div>

      {/* FOURTH CONTENT */}
      <div>
        <PostRow from={3} to={7} posts={posts} tagline="FRESH LAUNCH" tagIcon="/rocket-lunch.png" />
      </div>
    </>
  );
}
