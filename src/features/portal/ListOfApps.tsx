'use client'
import Link from 'next/link'

import AppButton from './AppButton'

const apps = [
  {
    title: 'Events',
    url: '/events',
    iconUrl: '/icons/wired-outline-2237-champagne-flutes.json',
  },
  {
    title: 'CookBook',
    url: 'https://getcookbook.io',
    iconUrl: '/icons/wired-outline-611-toque-cooking-hat.json',
  },
]

const ListOfApps: React.FC = () => {
  if (typeof document !== 'object') return <></>

  return (
    <div className="py-5 flex items-center justify-center pt-7 gap-10">
      {apps.map(app => (
        <Link href={app.url} key={app.title}>
          <AppButton {...app} />
        </Link>
      ))}
    </div>
  )
}

export default ListOfApps
