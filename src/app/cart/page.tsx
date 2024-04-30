"use client"
// import { useCartStore } from "@/utils/store";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"
import React, { useEffect } from 'react'
// import { useClient } from 'next/client';
import Image from "next/image"


const CartPage = () => {
  // const { products, totalItems, totalPrice, removeFromCartg } = useCartStore();
  // const{data:session} = useSession()
  const router = useRouter()

  useEffect(()=>{
    // useCartStore.persist.rehydrate();
}, []);

  // function handleCheckout(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
  //   throw new Error('Function not implemented.');
  // }


  // const addPaypalScript = () => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.paypal.com/sdk/js?client-id=AQ4zmdIdoiYRybw6jlv8udOkIxyfmB8J9evrfgtnpChDIHSFn-8XvC2LqbvUch5LenPnYtWOWce8VCnc";
  //   script.type = "text/javascript";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   // Return the script element to be used in the cleanup function
  //   return script;
  // };

  // React.useEffect(() => {
  //   const script = addPaypalScript(); // Get the script element
  //   // Cleanup function to remove the script when component unmounts
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const handleCheckout = async ()=>{
    if(!session){
      router.push("/");
    }else{
      try{
        const res = await fetch("https://localhost:3000/api/orders", {
          method:"POST",
          headers:{"Content-Type":"application/json",
          body:JSON.stringify({
            price:totalPrice,
            products,
            status:"Not Paid!",
            userEmail:session.user.email,
          }),
          }
        })
      }catch(err){
        console.log(err)
      }
    }
  };

  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-orange-600 lg:flex-row'>
      {/* PRODUCT CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM CONTAINER */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/food2.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM CONTAINER */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/food2.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM CONTAINER */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/food2.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-orange-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500 font-bold">Free</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$81.70</span>
        </div>
        <button className="bg-orange-600 text-white p-3 rounded-md w-1/2 self-end" onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;