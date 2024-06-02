import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconArrowUpRight } from '../icons';
import { Blog } from '@/interface/blog';

const Card: React.FC<Blog> = ({ id, title, description, category }) => {
  return (
    <div className='bg-white shadow-lg p-6 space-y-8 basis-full sm:basis-1/2 md:basis-1/4 md:min-w-[200px]'>
      <Image src={`/blogs/${id}.png`} width={336} height={240} alt={title} />
      <div className='space-y-3'>
        <p className='text-sm text-blue-950'>{category}</p>
        <Link href={`/${id}`} className=''>
          <h2 className='font-semibold w-fit text-base sm:text-xl md:text-2xl flex justify-between gap-1 items-center'>
            <span className=''>{title}</span>
            <IconArrowUpRight />
          </h2>
        </Link>
        <p className='text-gray-500 text-sm sm:text-base line-clamp-3'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
