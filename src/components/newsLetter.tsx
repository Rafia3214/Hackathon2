import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewsLetter = () => {
  return (

<div
  className="hero wrapper min-h-[80vh]"
  style={{
    backgroundImage: "url('/background.png')",
  }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
    <h2 className="scroll-m-20 border-b pb-2 text-3xl text-center font-semibold tracking-tight first:mt-0">Get Leatest Update By Subscribe Our Newsletter  
    </h2>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>

  )
}
export default NewsLetter

