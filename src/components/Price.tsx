"use client"
import React, { useState, useEffect } from 'react'

type Props = {
    price: number;
    id: number;
    options?: { title: string; additionalPrice: number }[]
}


const Price = ({ price, id, options }: Props) => {
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);

    useEffect(()=>{
        setTotal(quantity * (options ? price+options[selected].additionalPrice : price))
    },[quantity, selected, options, price])




    return (
        <div className='flex flex-col gap-4'>
            <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
            {/* OPTIONS CONATAINER */}
            <div className="flex gap-4">
                {options?.map((option, index) => (
                    <button
                        key={option.title}
                        className='min-w-[6 rem] p-2 ring-1 ring-orange-500 rounded-md'
                        style={{
                            background: selected === index ? "rgb(249 115 22)" : "white",
                            color: selected === index ? "white" : "orange"
                        }}
                        onClick={() => setSelected(index)}
                    >{option.title}</button>
                ))}
            </div>
            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className="flex justify-between items-center">
                {/* QUANTITY */}
                <div className='flex justify-between w-full p-3 ring-1 ring-orange-600'>
                    <span>Quantity</span>
                    <div className="flex gap-4 itens-center">
                        <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>{'>'}</button>
                    </div>
                </div>
                {/* cart button */}
                <button className="uppercase w-56 bg-orange-500 text-white p-3 ring-1 ring-orange-600">Add to Cart</button>
            </div>
        </div>
    )
}

export default Price