import { useEffect, useState } from 'react';
import MobileMenu from '../components/MobileMenu';
import useScrollThrottle from '../hooks/useScrollThrottle';
import cn from 'classnames';

export default function Navbar({ links }: { links: string[] }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    setHasScrolled(window.document.documentElement.scrollTop > 0);
  }, []);

  useScrollThrottle(() => {
    setHasScrolled(window.document.documentElement.scrollTop > 0);
  });

  return (
    <nav
      className={cn(
        'z-50 w-full flex justify-between px-8 md:px-16 items-center fixed top-0 left-0 transition',
        {
          'bg-background-dark py-3 lg:py-4': hasScrolled,
          'py-8': !hasScrolled,
        }
      )}
    >
      <a href='#hero'>
        <img
          src='/Logo.svg'
          alt='Logo'
          loading='lazy'
          height={42}
          width={80}
          className='w-16 sm:w-20'
        />
      </a>
      <div className='hidden gap-6 md:flex lg:gap-16'>
        {links.map((link, i) => (
          <a
            key={link}
            className='flex group gap-[6px] items-end'
            href={`#${link}`}
          >
            <span className='text-gradient font-lato'>{i + 1}.</span>
            <span className='text-xl text-heading-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-gradient-1 group-hover:to-accent-gradient-2'>
              {`${link.charAt(0).toUpperCase()}${link.slice(1)}`}
            </span>
          </a>
        ))}
      </div>
      <MobileMenu links={links} />
    </nav>
  );
}
