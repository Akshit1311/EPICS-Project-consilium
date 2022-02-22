import React from 'react'
import Image from 'next/image'

const SideGallery = () => {
  return (
    <div className="ml-auto grid h-[87vh] w-1/3 grid-cols-2 gap-2">
      {Array.from(Array(6).keys()).map((key, i) => (
        <div className="relative" key={key}>
          <Image
            src={`/Home/person${i + 1}.png`}
            layout="fill"
            className="object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default SideGallery
