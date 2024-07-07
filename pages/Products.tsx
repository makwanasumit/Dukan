import React from 'react'
import Link from 'next/link';

const Products = (props:any) =>{
  return (
    // <div className='container mx-auto px-4'>
    //   <section className="text-gray-600 body-font">
    //     <div className="container px-5 py-24 mx-auto h-full">
    //       <div className="flex flex-wrap w-full mb-20">
    //         <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
    //           <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - Dukan </h1>
    //           <div className="h-1 w-20 bg-indigo-500 rounded"></div>
    //         </div>
    //         <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus esse quod debitis hic dolore, optio doloribus porro natus adipisci quam magni autem unde, illum repellat! Ipsam facilis iste voluptatibus id illo sunt ut sequi! Veniam maiores iusto deleniti aperiam necessitatibus. Ea dolorem suscipit exercitationem nisi.</p>
    //       </div>
    //       <div className="flex flex-row -m-4 w-full flex-wrap">


    //       </div>
    //     </div>
    //     <div className="w-full flex flex-wrap h-screen ">
    //         {props.product.data.map((item:any)=>{
    //           {console.log(item)}
    //           let imageURL;
    //             if(item.attributes.image.data.attributes.url){
    //               imageURL="http://localhost:1337"+item.attributes.image.data.attributes.url
    //             }
    //           return(
                  
    //               <div className="xl:w-1/4 md:w-1/2 p-4">
    //               <div className=" bg-gray-100 p-6 rounded-lg ">
    //                 <img width={200} height={200} className="rounded w-full object-cover object-center mb-6" src={item.attributes.image.data.attributes.url && imageURL} alt="content"/>
    //                 <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.slug}</h3>
    //                 <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
    //                 <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
    //               </div>
    //             </div>

    //         )
    //         })}
    //       </div>
    //   </section>
    // </div>
    

    <div className='h-full w-full'>
      <div className='products-heading flex justify-between items-center px-7 sm:flex-row md:flex-row flex-wrap grow'>
        <h1 className='lg:text-4xl font-medium title-font mb-2 text-gray-900'>Product List - Dukan <div className='my-2 w-20 h-1 bg-blue-500'></div></h1>
        <p className='lg:text-xl text-justify lg:w-1/2 w-full leading-relaxed text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet quos sit excepturi quae voluptatibus odit, eaque placeat dicta deleniti perferendis libero dolor facere esse quam inventore consequuntur tempore incidunt? Rem ratione exercitationem enim?</p>
      </div>
      <Link href="/About">
      <div className='product-container flex flex-row flex-wrap justify-evenly'>

        {props.product.data.map((item:any)=>{
        let imageURL;
        if(item.attributes.image.data.attributes.url){
          imageURL="http://localhost:1337"+item.attributes.image.data.attributes.url;
        }
        let price;
        if(item.attributes.image.data.attributes.url){
           price="₹"+item.attributes.price;
        }

        let itemtitle;
        let subtitle;
        itemtitle=item.attributes.title;
        if(itemtitle.length>40){
          subtitle= itemtitle.substring(0,34)+'...';
        }else{
          subtitle= itemtitle;
        }

                return(

              <div className='item-container justify-around '>
                <img src={item.attributes.image.data && imageURL} alt="" className="p-1.5"/>
                <div className=' w-1/2 flex flex-row justify-between px-1'>
                  <div className='font-bold title-font'>{price}</div>
                  <div></div>
                </div>
                <div className='px-1' id='item-title'>{subtitle}</div>
                <div className='cart-border-t h-16 w-full flex flex-row '>
                  <button className=' cart-border-r px-1'>ADD TO CART</button>
                  <button className='like-img w-1/2  px-1 flex justify-center items-center'><img src="/like.png" alt="" /></button>
                </div>
              </div>
          )
          })}


      </div>
      </Link>
    </div>
  )
}



export const getServerSideProps = (async () => {


  let headers = {Authorization: "82648d63ae650b1dde31ea1a480e59968154991bfe67987196d9f82916e36f2445c3ce49051d0a974fc4375c5645720d67de4ded9c15d1022590eeaad8a69ec67b289a3196c2bf6755a9ff78ce3da0c74c82c4362ff71ce2f22f016bf8ef181c8af814517983b04ca91e260f2cce801818c7aeecc72e2b2b79aa2d38d1d40801"}

  // Fetch data from external API
  const a = await fetch('http://localhost:1337/api/products?populate=*', { headers: headers })
  const product = await a.json()
  // Pass data to the page via props
  return { props: { product: product } }
})
export default Products