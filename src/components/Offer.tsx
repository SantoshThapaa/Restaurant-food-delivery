import Image from 'next/image'
import React from 'react'

const Offer = () => {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
      {/* Text Container  */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Combo Set of Delicious Burger and Cold Drinks with French Fries</h1>
        <p className="text-white xl:text-xl">Indulge in the perfect pairing of Berger Coldrink and French Fries for an unparalleled taste experience. Picture a refreshing Berger Coldrink, with its crisp fizz and tantalizing flavor, complementing the savory crunch of perfectly golden French fries.</p>
        <button className="bg-orange-600 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
        {/* Image Container  */}
      <div className="flex-1 w-full relative">
        <Image src="/offer.png" alt="" fill className="object-contain"/>
      </div>
    </div>
  )
}

export default Offer