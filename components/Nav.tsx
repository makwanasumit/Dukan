import Link from 'next/link'
import React from 'react'



const Nav = ( {cart}:any) => {
  return (
    <div className='container mx-auto'>
        <header className="text-gray-600 body-font">
            <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Dukan</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/" legacyBehavior><a className="mr-5 hover:text-gray-900">Home</a></Link>
                <Link href="/About" legacyBehavior><a className="mr-5 hover:text-gray-900">About</a></Link>
                <Link href="/Products" legacyBehavior><a className="mr-5 hover:text-gray-900">Products</a></Link>
                <Link href="/Contact" legacyBehavior><a className="mr-5 hover:text-gray-900">Contact us</a></Link>
                <Link href="/Cart" legacyBehavior><a className="mr-5 hover:text-gray-900">cart({cart.length})</a></Link>                </nav>
                <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
                    Sign up
                </button>
            </div>
            </header>
    </div>
  )
}

export default Nav