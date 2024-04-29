import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { pizzas } from '@/data';

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-orange-600'>
      {pizzas.map((item) => (
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-orange-600 sm:w-1/2' href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className='relative'>
              <Image src={item.img} alt="" fill />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <button> Add to Cart</button>
          </div>

        </Link>
      ))}

    </div>
  );
};

export default CategoryPage;