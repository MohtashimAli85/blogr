import Blogs from '@/components/Blogs';
export const revalidate = 60;
export default async function Home() {
  return (
    <>
      <div className='text-center px-5 pt-24 pb-36 bg-blue-100 text-blue-950 space-y-3'>
        <span className='text-sm bg-blue-300 p-2 rounded-full'>Our Blog</span>
        <h1 className='text-3xl'>Resources and insights</h1>
        <p className='text-xl'>
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <Blogs />
    </>
  );
}
