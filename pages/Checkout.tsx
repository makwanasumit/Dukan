import Script from 'next/script'
import React from 'react'
import { useEffect, useState } from 'react'

const checkout = ({cart}:any) => {
  
  const [Subtotal, setSubtotal] = useState(0)
  useEffect(() => {
    console.log(cart);
    let mytotal = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      mytotal += cart[index][1];
    }
    setSubtotal(mytotal);

  
  }, [])
  

  
  return (
    <div>

      

      <div className="min-h-screen bg-gray-100 flex items-center py-12 px-4 sm:px-6 lg:px-8 justify-around">
      

      
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h1 className='mb-6 text-center text-3xl font-extrabold text-gray-900'>YOUR CART</h1>
          <ul className='list-decimal'>
            {cart.map((item:any) => {
              return <li className='px-4 text-sm font-medium text-gray-500'>
                {item[0]} with price of {item[1]}
              </li>;
            })}
          </ul>
          subtotal : {Subtotal}
        </div>
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">CHECKOUT</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                
                
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                
                
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                
                
                required
                className="mt-1 p-2 h-[20vh] w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Make Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default checkout