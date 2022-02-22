import React from 'react'
import SideGallery from './SideGallery'

const Banner = () => {
  return (
    <div className="flex">
      <div className="m-24">
        <div className="h-fit bg-gradient-to-br from-white to-[#D7B605] bg-clip-text font-aclonica text-7xl font-extrabold text-transparent">
          We Help People
          <br />
          Connect With Their
          <br />
          Right Mentors.
        </div>
        <button className="my-8 rounded-full bg-[#24CE85] px-10 py-3 text-xl text-white hover:opacity-80">
          Course List
        </button>
      </div>
      <SideGallery />
    </div>
  )
}

export default Banner
