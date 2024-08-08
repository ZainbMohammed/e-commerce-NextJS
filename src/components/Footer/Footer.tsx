import Link from 'next/link'
import FOOTER_LINLS from './footer_linls.js'
import FOOTER_CONTACT_INFO from './footer_contact_info.js'
import SOCIALS from './socials.js'
const Footer = () => {

   const FooterColumn = ({ title, children }) => {

    return (
      <div className='flex flex-col gap-5'>
        <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
        {children}
      </div>
    )
  }

  return <>
    <footer className='flexCenter pb-24 pt-20 border'>
      <div className='max_padd_container flex w-full flex-col gap-14'>

        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          {/* <Link href='/' className='mb-10 bold-20'>MarktJoy</Link> */}
          <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
            {FOOTER_LINLS.map((col) => (

              <FooterColumn title={col.title} key={col.title}>

                <ul className='flex flex-col gap-4 regular-14 text-gry-20'>
                 
                  {col.links.map((link, index) => (
                    <Link href={'/'} key={index}>{link}</Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>

                    <p>{link.label}:</p><p className='medium-14'>{link.value}</p>

                  </Link>

                ))}
              </FooterColumn>
            </div>
            <div className='flex'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='flex gap-4'>
                  {SOCIALS.links.map((link) => (
                    
                      <Link href={'/'} key={link}><img src={link} alt='socialIcon' height={22} width={22} /></Link>
                    
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className='bg-gray-20'></div>
          {/* <p className='text-center regular-14 text-gray-30'>2024 MarktJoy | All rights reseved</p> */}
      </div>
      
    </footer>
  </>
}
export default Footer