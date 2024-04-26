import React from 'react';
import Menu from './Menu';
import Link from "next/link";
import Image from "next/image";
import CartIcon from './CartIcon';

const Navbar = () => {

  const user=false
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <Image src="/logo.png" alt="" width={50} height={30} />
      <div className='text-xl'>
        <Link href="/">TbhojaN</Link>
      </div>
      {/* Mobile Menu  */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4">
        {!user ? (
          <Link href="/login">Login</Link>
        ) : ( 
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  )
}
export default Navbar;