import React from 'react'
import Link from 'next/link';

const Products = (props: any) => {
  return (
  

    <div className='h-full w-full'>
      <div className='products-heading flex justify-between items-center px-7 sm:flex-row md:flex-row flex-wrap grow'>
        <h1 className='lg:text-4xl font-medium title-font mb-2 text-gray-900'>Product List - Dukan <div className='my-2 w-20 h-1 bg-blue-500'></div></h1>
        <p className='lg:text-xl text-justify lg:w-1/2 w-full leading-relaxed text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet quos sit excepturi quae voluptatibus odit, eaque placeat dicta deleniti perferendis libero dolor facere esse quam inventore consequuntur tempore incidunt? Rem ratione exercitationem enim?</p>
      </div>
        <div className='product-container flex flex-row flex-wrap justify-evenly'>

          {props.product.data.map((item: any) => {
            let imageURL;
            if (item.attributes.image.data.attributes.url) {
              imageURL = "http://localhost:1337" + item.attributes.image.data.attributes.url;
            }
            let price;
            if (item.attributes.image.data.attributes.url) {
              price = "₹" + item.attributes.price;
            }

            let itemtitle;
            let subtitle;
            itemtitle = item.attributes.title;
            if (itemtitle.length > 40) {
              subtitle = itemtitle.substring(0, 34) + '...';
            } else {
              subtitle = itemtitle;
            }

            let slug;
            slug = '/product/'+item.attributes.slug;

            return (

              <div key={item.attributes.slug} className='item-container justify-around '>
                <img src={item.attributes.image.data && imageURL} alt="" className="p-1.5" />
                <div className=' w-1/2 flex flex-row justify-between px-1'>
                  <div className='font-bold title-font'>{price}</div>
                  <div></div>
                </div>
                <div className='px-1' id='item-title'>{subtitle}</div>
                <div className='cart-border-t h-16 w-full flex flex-row '>
                  <Link href={slug} className='flex justify-center items-center cart-border-r'>
                  <button className='hovergray h-full w-full'>
                    BUY NOW
                  </button>
                  </Link>
                  <button className='like-img w-1/2  px-1 flex justify-center items-center'><img src="/like.png" alt="" /></button>
                </div>
              </div>
            )
          })}


        </div>
    </div>
  )
}



export const getServerSideProps = (async () => {


  let headers = { Authorization: "82648d63ae650b1dde31ea1a480e59968154991bfe67987196d9f82916e36f2445c3ce49051d0a974fc4375c5645720d67de4ded9c15d1022590eeaad8a69ec67b289a3196c2bf6755a9ff78ce3da0c74c82c4362ff71ce2f22f016bf8ef181c8af814517983b04ca91e260f2cce801818c7aeecc72e2b2b79aa2d38d1d40801" }

  // Fetch data from external API
  const a = await fetch('http://localhost:1337/api/products?populate=*', { headers: headers })
  const product = await a.json()
  // Pass data to the page via props
  return { props: { product: product } }
})
export default Products