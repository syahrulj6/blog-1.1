import PostCategory from '@/components/postCategory/PostCategory';

export const metadata = {
  title: 'Education',
  description: 'Education Description',
};

const Education = () => {
  return (
    <>
      <PostCategory category="education" />
    </>
  );
};

export default Education;
