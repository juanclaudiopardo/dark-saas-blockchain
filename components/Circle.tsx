import React from 'react';
import { twMerge } from 'tailwind-merge';

const Circle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        'bg-zinc-900 size-[240px] inline-flex rounded-full items-center outline outline-[6px] justify-center -outline-offset-[6px] outline-fuchsia-500/10 ',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Circle;
