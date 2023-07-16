import { useState } from 'react';

export default function MobileMenu({ links }: { links: string[] }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button
        className='flex md:hidden relative w-8 h-6 z-10'
        onClick={() => setIsOpened(prev => !prev)}
      >
        <div
          className={`h-1 w-full bg-gradient-to-tr from-accent-gradient-1 to-accent-gradient-2 rounded-sm absolute top-0 transition ${
            isOpened ? 'rotate-45 translate-y-[10px]' : ''
          }`}
        />
        <div
          className={`h-1 w-full bg-gradient-to-tr from-accent-gradient-1 to-accent-gradient-2 rounded-sm absolute top-1/2 -translate-y-1/2 transition ${
            isOpened ? 'opacity-0' : ''
          }`}
        />
        <div
          className={`h-1 w-full bg-gradient-to-tr from-accent-gradient-1 to-accent-gradient-2 rounded-sm absolute bottom-0 transition ${
            isOpened ? '-rotate-45 -translate-y-[10px]' : ''
          }`}
        />
      </button>
      <div
        className={`opacity-0 backdrop-blur transition w-screen h-screen absolute top-0 left-0 bg-background-main/20 ${
          isOpened ? 'opacity-100' : ''
        }`}
        style={{
          visibility: isOpened ? 'visible' : 'hidden',
        }}
        onClick={() => setIsOpened(false)}
      />
      <div
        className={`absolute transition top-0 right-0 w-1/2 translate-x-full h-screen bg-background-dark flex items-center justify-center ${
          isOpened ? 'translate-x-0' : ''
        }`}
      >
        <div className='flex flex-col gap-10'>
          {links.map((link, i) => (
            <a
              key={link}
              className='flex group gap-[6px] items-end'
              href={`#${link}`}
              onClick={() => setIsOpened(false)}
            >
              <span className='text-gradient font-lato'>{i + 1}.</span>
              <span className='text-xl text-heading-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-gradient-1 group-hover:to-accent-gradient-2'>
                {`${link.charAt(0).toUpperCase()}${link.slice(1)}`}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
