import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pizzas } from '@/data';

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-orange-600'>
      {pizzas.map((item) => (
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-orange-600 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-orange-50' href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} alt="" fill className='object-contain'/>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button className='hidden group-hover:block uppercase bg-orange-600 text-white p-2 rounded-md'> Add to Cart</button>
          </div>

        </Link>
      ))}

    </div>
  );
};

export default CategoryPage;