import { getBlog, getBlogs } from '@/firebase/blogs';
import Image from 'next/image';

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map(({ id }) => ({
    id
  }));
}
const Blog = async ({ params: { id } }: { params: { id: string } }) => {
  const blog = await getBlog(id);
  return (
    <div className='max-w-4xl mx-auto px-3 space-y-4  py-2 sm:py-5'>
      <div className='space-y-2'>
        <div className='h-[240px] relative shadow'>
          <Image
            src={`/blogs/${id}.png`}
            // width={336}
            // height={240}
            layout='fill'
            // className=''
            objectFit='cover'
            alt={id}
          />
        </div>

        <h1 className='text-3xl sm:text-4xl md:text-5xl capitalize'>
          {blog?.title}
        </h1>
        <h2 className='text-gray-500 text-sm ml-2'>{blog?.category}</h2>
      </div>
      <p className='ml-2'>{blog?.description}</p>
    </div>
  );
};

export default Blog;
