import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (


      <footer className="bg-gray-200 text-gray-700 py-4 md:py-0 h-auto md:h-16 flex items-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center w-full">
        {/* Branding */}
        <div className="text-sm mb-4 md:mb-0">
          <h2 className="text-lg font-bold">BrandName</h2>
        </div>
        
        {/* Links */}
        <div className="text-sm mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#" className="hover:text-gray-500">Home</a></li>
            <li><a href="#" className="hover:text-gray-500">About</a></li>
            <li><a href="#" className="hover:text-gray-500">Services</a></li>
            <li><a href="#" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="text-sm">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-500"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" className="hover:text-gray-500"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" className="hover:text-gray-500"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#" className="hover:text-gray-500"><i className="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>

      //   <footer className="bg-gray-200 text-gray-700 h-16 flex items-center">
      //   <div className="container mx-auto px-4 flex justify-between items-center w-full">
      //     {/* Branding */}
      //     <div className="text-sm w-[50vw]">
      //       <h2 className="text-lg font-bold">Dukan</h2>
      //     </div>
          
          
      //     {/* Social Media Icons */}
      //     <div className="text-sm w-[50vw]">
      //       <ul className="flex justify-evenly">
      //         <li><a href="#" className="hover:text-gray-500 space-x-4"><i className="fab fa-facebook-f"> Facebook</i></a></li>
      //         <li><a href="#" className="hover:text-gray-500 space-x-4"><i className="fab fa-github"> Github</i></a></li>
      //         <li><a href="#" className="hover:text-gray-500 space-x-4"><i className="fab fa-instagram"> Instagram</i></a></li>
      //         <li><a href="#" className="hover:text-gray-500 space-x-4"><i className="fab fa-linkedin-in"> Linkedin</i></a></li>
      //       </ul>
      //     </div>
      //   </div>
      // </footer>
    )
}

export default Footer