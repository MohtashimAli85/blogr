import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: ''
};
const About = () => {
  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-4xl font-bold mb-4'>About Us</h1>
      <p className='mb-6'>
        Welcome to our blog, your go-to source for the latest industry news,
        insightful interviews, cutting-edge technologies, and valuable
        resources. Our mission is to keep you informed and inspired, helping you
        stay ahead in your field.
      </p>
      <p className='mb-6'>
        We believe that knowledge is power, and we&apos;re dedicated to
        providing you with the most up-to-date information and expert insights.
        Whether you&apos;re a seasoned professional or just starting out, our
        content is designed to support your growth and success.
      </p>
      <p className='mb-6'>
        Thank you for being a part of our community. We look forward to sharing
        our passion for knowledge and innovation with you.
      </p>
      <p>
        Stay tuned for more updates, and feel free to reach out with any
        questions or suggestions. We&apos;re here to help you stay informed and
        inspired.
      </p>
    </div>
  );
};

export default About;
