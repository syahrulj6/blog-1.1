import { Hero } from '@/components/hero/Hero';
import PostRow from '@/components/postRow/postRow';

export default async function Home() {
  return (
    <div>
      <Hero />
      <PostRow />
    </div>
  );
}
