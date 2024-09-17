import React from 'react';
import CutCornerButton from './CutCornerButton';
import Image from 'next/image';
import heroImage from '@/public/images/icosahedron.png';
import cubeImage from '@/public/images/cube.png';
import cuboidImage from '@/public/images/cuboid.png';
import torusImage from '@/public/images/torus.png';
import { Hexagon } from './Hexagon';
import Circle from './Circle';

const Hero = () => {
  return (
    <section className='py-24 md:py-52 overflow-x-clip'>
      <div className='container'>
        <p className='uppercase font-extrabold text-center text-zinc-500 tracking-wider'>
          Intoducing Blockforge
        </p>
        <h1 className='font-black text-5xl text-center mt-4 md:text-6xl max-w-xl mx-auto'>
          The future of blockchain is here.
        </h1>
        <p className='text-center text-xl mt-6 text-zinc-400 md:text-2xl max-w-xl mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae
          ratione voluptatibus{' '}
        </p>
        <div className='flex justify-center mt-10'>
          <CutCornerButton title='Get started' />
        </div>
        <div className='flex justify-center mt-24'>
          <div className='inline-flex  relative z-0'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
              <Hexagon className='size-[1100px]' />
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
              <Hexagon className='size-[1800px]' />
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
              <Circle className=' absolute left-[200px] -top-[900px]'>
                <Image
                  src={cubeImage}
                  alt='cube image'
                  className='size-[140px]'
                />
              </Circle>
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
              <Circle className='absolute left-[200px] top-[270px]'>
                <Image
                  src={cuboidImage}
                  alt='cuboid image'
                  className='size-[140px]'
                />
              </Circle>
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
              <Circle className=' absolute -left-[600px] -top-[80px]'>
                <Image
                  src={torusImage}
                  alt='torus image'
                  className='size-[140px]'
                />
              </Circle>
            </div>
            <Image
              src={heroImage}
              alt=''
              className='absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg] '
            />
            <Image src={heroImage} alt='icon' />
          </div>
        </div>
        <div className='flex  flex-col items-center mt-40 md:mt-80 gap-4'>
          <div className='h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2'>
            <div className='h-3 w-1 bg-fuchsia-500 rounded-full'></div>
          </div>
          <p className='uppercase text-zinc-500 font-extrabold tracking-wide'>
            Scroll to learn more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
