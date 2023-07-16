import { Fragment, useEffect, useState } from 'react';

export default function Timeline({ links }: { links: string[] }) {
  const [scrollDistance, setScrollDistance] = useState(
    window.document.documentElement.scrollTop
  );

  let throttleInProgress = false;

  function handleThrottleScroll() {
    if (throttleInProgress) return;
    throttleInProgress = true;

    setTimeout(() => {
      setScrollDistance(window.document.documentElement.scrollTop);
      throttleInProgress = false;
    }, 500);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleThrottleScroll);

    return () => {
      window.removeEventListener('scroll', handleThrottleScroll);
    };
  }, []);

  return (
    <aside className={`relative top-[50vh] left-24 w-10 hidden xl:block`}>
      {['hero', ...links].map((page, i) => (
        <Fragment key={page}>
          <Dot
            top={`${i * window.innerHeight}px`}
            active={
              scrollDistance >= i * window.innerHeight * 0.6 &&
              scrollDistance <=
                i * window.innerHeight + window.innerHeight * 0.3
            }
          />
          {links.length !== i ? (
            <Line top={`${i * window.innerHeight + 40}px`} />
          ) : null}
        </Fragment>
      ))}
    </aside>
  );
}

function Dot({ top, active = false }: { top: string; active?: boolean }) {
  return (
    <div
      className={`absolute w-10 h-10 z-20 transition-colors rounded-full ring-2 ring-heading-primary ${
        active ? 'bg-accent-gradient-2' : ''
      }`}
      style={{ top }}
    />
  );
}

function Line({ top }: { top: string }) {
  return (
    <div
      className='absolute w-[1px] z-10 h-[calc(100vh-40px)] bg-text left-5 -translate-x-1/2'
      style={{ top }}
    />
  );
}
