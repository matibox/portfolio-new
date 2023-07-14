import { Fragment } from "react";

export default function Timeline({ links }: { links: string[] }) {

  return (
    <aside className={`relative top-[50vh] left-28 w-10`}>
      {['hero', ...links].map((page, i) => (
        <Fragment key={page}>
          <Dot top={`${i * window.innerHeight}px`} />
          {links.length !== i ? (
            <Line top={`${i * window.innerHeight + 40}px`} />
          ) : null}
        </Fragment>
      ))}
    </aside>
  )
}   

function Dot({ top, active = false }: { top: string; active?: boolean; }) {
  return (
    <div className={`absolute w-10 h-10 z-10 rounded-full ring-2 ring-heading-primary ${active ? 'bg-heading-primary' : ''}`} style={{ top }} />
  )
}

function Line({ top }: { top: string }) {
  return (
    <div className='absolute w-1 h-[calc(100vh-40px)] bg-heading-primary left-5 -translate-x-1/2' style={{ top }} />
  )
}