import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offer1.png')] md:h-[90vh]">
      {/* Text Container  */}
      < div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6" >
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Combo Set of Delicious Burger and Cold Drinks with French Fries</h1>
        <p className="text-white xl:text-xl">Indulge in the perfect pairing of Berger Coldrink and Golden French Fries for an unparalleled taste experience. </p>
        <CountDown />
        <button className="bg-orange-600 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* Image Container  */}
      < div className="flex-1 w-full relative md:h-full" >
        <Image src="/offer.png" alt="" fill className="object-contain" />
      </div >
    </div>
  );
};

export default Offer;