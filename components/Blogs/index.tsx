// 'use server';
import { getBlogs } from '@/firebase/blogs';
import Card from './Card';
const Blogs = async () => {
  const blogs = await getBlogs();
  return (
    <div className='flex flex-wrap p-4 gap-2 sm:gap-3 md:gap-4 max-w-6xl justify-center mx-auto -mt-20'>
      {blogs.map((item, i) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Blogs;
