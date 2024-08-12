// import Link from 'next/link'
// import FOOTER_LINLS from './footer_linls.js'
// import FOOTER_CONTACT_INFO from './footer_contact_info.js'
// import SOCIALS from './socials.js'
// const Footer = () => {

//    const FooterColumn = ({ title, children }) => {

//     return (
//       <div className='flex flex-col gap-5'>
//         <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
//         {children}
//       </div>
//     )
//   }

//   return <>
//     <footer className='flexCenter pb-24 pt-20 border'>
//       <div className='max_padd_container flex w-full flex-col gap-14'>

//         <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
//           {/* <Link href='/' className='mb-10 bold-20'>MarktJoy</Link> */}
//           <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
//             {FOOTER_LINLS.map((col) => (

//               <FooterColumn title={col.title} key={col.title}>

//                 <ul className='flex flex-col gap-4 regular-14 text-gry-20'>

//                   {col.links.map((link, index) => (
//                     <Link href={'/'} key={index}>{link}</Link>
//                   ))}
//                 </ul>
//               </FooterColumn>
//             ))}

//             <div className='flex flex-col gap-5'>
//               <FooterColumn title={FOOTER_CONTACT_INFO.title}>
//                 {FOOTER_CONTACT_INFO.links.map((link) => (
//                   <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>

//                     <p>{link.label}:</p><p className='medium-14'>{link.value}</p>

//                   </Link>

//                 ))}
//               </FooterColumn>
//             </div>
//             <div className='flex'>
//               <FooterColumn title={SOCIALS.title}>
//                 <ul className='flex gap-4'>
//                   {SOCIALS.links.map((link) => (

//                       <Link href={'/'} key={link}><img src={link} alt='socialIcon' height={22} width={22} /></Link>

//                   ))}
//                 </ul>
//               </FooterColumn>
//             </div>
//           </div>
//         </div>
//         <div className='bg-gray-20'></div>
//           {/* <p className='text-center regular-14 text-gray-30'>2024 MarktJoy | All rights reseved</p> */}
//       </div>

//     </footer>
//   </>
// }
// export default Footer

import React from "react";
import Image from "next/image";
import Link from "next/link";
 import FOOTER_LINLS from './footer_linls.js'
 import FOOTER_CONTACT_INFO from './footer_contact_info.js'
 import SOCIALS from './socials.js'
 import Logo from '../../../public/logo.svg'
import appStoreIcon from "../../../public/CategoryImages/shopping-bag.svg"; // example path
import playStoreIcon from "../../../public/CategoryImages/shopping-bag.svg"; // example path
import SubscriptionSection from "./SubscriptionSection";
import SocialMedia from './SocialMedia'
const Footer = () => {
  const FooterColumn = ({ title, children }) => {
    return (
      <div className='flex flex-col gap-4 md:gap-6'>
        <h4 className='font-bold text-lg md:text-xl'>{title}</h4>
        {children}
      </div>
    )
  }

  return (
    <footer className='bg-white border-t'>
      <div className='container mx-auto px-6 lg:px-4 py-10 md:py-14'>
        <div className='flex flex-col md:flex-row items-start justify-between gap-8 md:gap-14'>

          {/* Logo Section */}
        
          <div className="flex justify-center items-center">
        <Image alt="logo" className="w-20" src={Logo} width={54} height={43} />
        {/* <span className='size-5 p-2.5 font-bold'>
          متجـــــر<br></br>فاست{" "}
        </span> */}
      </div>

          {/* Footer Links Section */}
          <div className='flex flex-wrap w-full gap-10 md:gap-16 lg:gap-20'>

            {/* Footer Links */}
            {FOOTER_LINLS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className='flex flex-col gap-3'>
                  {col.links.map((link, index) => (
                    <li key={index}>
                      <Link href='/' className='text-sm md:text-base text-gray-600 hover:text-gray-800'>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Info */}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className='flex flex-col gap-3'>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label} className='flex flex-col lg:flex-row gap-2'>
                    <p className='text-sm md:text-base text-gray-600'>{link.label}:</p>
                    <p className='text-sm md:text-base font-medium text-gray-800'>{link.value}</p>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            {/* Social Media Links */}
            <FooterColumn title={'تابعنا على'}>
              <ul className='flex gap-4'>
                {SOCIALS.links.map((link) => (
                  <li key={link}>
                    <Link href='/'>
                      <Image src={link} alt='socialIcon' height={24} width={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-10 border-t pt-6 text-center'>
          <p className='text-sm text-gray-500'>2024 © الحقوق محفوظة لمنصة فاست</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
