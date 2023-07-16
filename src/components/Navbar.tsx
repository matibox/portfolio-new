import { useState } from 'react';
import MobileMenu from '../components/MobileMenu';
import useScrollThrottle from '../hooks/useScrollThrottle';
import { clsx } from 'clsx';

export default function Navbar({ links }: { links: string[] }) {
  const [hasScrolled, setHasScrolled] = useState(
    window.document.documentElement.scrollTop > 0
  );

  useScrollThrottle(() => {
    setHasScrolled(window.document.documentElement.scrollTop > 0);
  });

  return (
    <nav
      className={clsx(
        'z-50 w-full flex justify-between py-8 px-8 md:px-16 items-center fixed top-0 left-0 transition',
        {
          'bg-background-dark py-4': hasScrolled,
        }
      )}
    >
      <a href='#hero'>
        <img src='/Logo.svg' alt='Logo' />
      </a>
      <div className='hidden gap-6 md:flex lg:gap-161'>
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
