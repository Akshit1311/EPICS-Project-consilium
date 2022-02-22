import React, { useState } from 'react'

// assets
import icons from '@assets/icons'
import { useRouter } from 'next/router'

enum PageOption {
  HOME = '/',
  ABOUT = '/about',
  MENTORS = '/mentors',
}

type PageOptions = {
  [key in PageOption]: {
    title: string
  }
}

const Navbar: React.FC = () => {
  const activeClass =
    'bg-gradient-to-br from-white to-[#D7B605] bg-clip-text text-transparent cursor-pointer'

  const pageOptions: PageOptions = {
    '/': {
      title: 'Home',
    },
    '/about': {
      title: 'About Us',
    },
    '/mentors': {
      title: 'Mentors',
    },
  }

  const router = useRouter()

  const [activePage, setActivePage] = useState<PageOption>(
    (router.pathname as PageOption) || PageOption.HOME
  )

  return (
    <div className="flex justify-between p-6">
      <div>{icons.logo}</div>
      <div className="flex items-center gap-8 font-raleway text-2xl text-white">
        {Object.keys(pageOptions).map((key) => (
          <div
            key={key}
            className={key === activePage ? activeClass : 'cursor-pointer'}
            onClick={() => {
              setActivePage(key as PageOption)
              router.push(key)
            }}
          >
            {pageOptions[key as PageOption].title}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-slate-500"></div>
        <div className="flex-1 text-left text-white">Full Name</div>
        <div className="cursor-pointer">{icons['down-caret']}</div>
      </div>
    </div>
  )
}

export default Navbar
