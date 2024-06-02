import Link from 'next/link';
import React from 'react';

const Layout: React.FC<Children> = ({ children }) => {
  return (
    <main>
      <div className='bg-blue-100'>
        <nav className='flex gap-3 sm:justify-end underline underline-offset-2  p-4 max-w-7xl mx-auto'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
        </nav>
      </div>
      {children}
    </main>
  );
};

export default Layout;
