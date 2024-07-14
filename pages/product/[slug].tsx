import React from 'react'
import { useRouter } from 'next/router'

const slug = ({ product, addToCart }: any) => {
    const router = useRouter()
    const { slug } = router.query

    let imageURL;
            if (product.attributes.image.data.attributes.url) {
              imageURL = "http://localhost:1337" + product.attributes.image.data.attributes.url;
            }

    return (

        // <div>Slug is { slug }</div>


        <section className="text-gray-600 h-screen body-font overflow-hidden flex items-center justify-center ">
            <div className="container px-5 mx-auto flex items-center">
                <div className="lg:w-4/5 h-full mx-auto flex flex-wrap justify-center items-center">
                    <img alt="ecommerce" className=" md:h-auto md:w-auto sm:h-auto sm:w-auto w-3/4 h-3/4  object-cover object-center rounded" src= {imageURL}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Dukan</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.attributes.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p className="leading-relaxed w-full text-justify">{product.attributes.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>SM</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="title-font font-medium text-2xl text-gray-900">₹{product.attributes.price}</span>
                            <button onClick={() => {addToCart(slug, 1, product.attributes.price)}} className="flex ml-auto text-white bg-indigo-500 border-0 sm:text-[15px]  px-4 items-center focus:outline-none hover:bg-indigo-600 rounded">ADD TO CART</button>
                            <button onClick={()=>router.push('/Checkout')} className="flex ml-3 text-white bg-indigo-500 border-0 sm:text-[15px] items-center  px-4 focus:outline-none hover:bg-indigo-600 rounded">CHECKOUT</button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export async function getServerSideProps(context: any) {


    let headers = { Authorization: "82648d63ae650b1dde31ea1a480e59968154991bfe67987196d9f82916e36f2445c3ce49051d0a974fc4375c5645720d67de4ded9c15d1022590eeaad8a69ec67b289a3196c2bf6755a9ff78ce3da0c74c82c4362ff71ce2f22f016bf8ef181c8af814517983b04ca91e260f2cce801818c7aeecc72e2b2b79aa2d38d1d40801" }

    // Fetch data from external API
    let a = await fetch('http://localhost:1337/api/products?filters[slug]=' + context.query.slug + '&populate=*', { headers: headers })
    let product = await a.json()
    // Pass data to the page via props
    return { props: { product: product.data[0] } }
}

export default slug












































































// import React from 'react';
// import { useRouter } from 'next/router';

// const slug = ({ product }: any) => {
//   const router = useRouter();
//   const { slug } = router.query;

//   if (!product) {
//     return (
//       <div>
//         <h1>Product Not Found</h1>
//         <p>The product you are looking for does not exist.</p>
//       </div>
//     );
//   }

//   console.log(product);

//   return (
//     <div>
//       <h1>{product.attributes.title}</h1>
//       <p>{product.attributes.description}</p>
//       <p>{product.attributes.price}</p>
//     </div>
//   );
// };

// export async function getServerSideProps(context: any) {
//   const headers = {
//     Authorization:
//       '82648d63ae650b1dde31ea1a480e59968154991bfe67987196d9f82916e36f2445c3ce49051d0a974fc4375c5645720d67de4ded9c15d1022590eeaad8a69ec67b289a3196c2bf6755a9ff78ce3da0c74c82c4362ff71ce2f22f016bf8ef181c8af814517983b04ca91e260f2cce801818c7aeecc72e2b2b79aa2d38d1d40801',
//   };

//   const response = await fetch(
//     `http://localhost:1337/api/products?filters[slug]=${context.query.slug}`,
//     { headers }
//   );

//   const data = await response.json();
//   const product = data.data.length ? data.data[0] : null;

//   return { props: { product } };
// }

// export default slug;
