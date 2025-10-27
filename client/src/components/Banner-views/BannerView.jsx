import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import imgBannerATV from '../../../public/img_DataAnalytics/banner-DataAnalytics.webp'
import { useState } from 'react'


function BannerView({title}) {
    const [socialMedia, setSocialMedia] = useState([
        {
          href: "https://www.facebook.com/people/Fundaci%C3%B3n-Antivirus-para-la-Deserci%C3%B3n/100089714876149/?mibextid=LQQJ4d",
          name: "facebook-circle",
          type: "logo",
          color: "#ffffff"
        },
        {
          href: "https://www.instagram.com/somosantivirus/",
          name: "instagram-alt",
          type: "logo",
          color: "#ffffff"
        },
        {
          href: "https://www.youtube.com/channel/UCCDsmMeIqSWGk_fh1m9FX0w",
          name: "youtube",
          type: "logo",
          color: "#ffffff"
        },
        {
          href: "https://www.tiktok.com/@somosantivirus",
          name: "tiktok",
          type: "logo",
          color: "#ffffff"
        },
        {
          href: "https://www.linkedin.com/company/antivirus-desercion/",
          name: "linkedin-square",
          type: "logo",
          color: "#ffffff"
        }
      ])
  return (
    <div className='flex flex-col items-center justify-center'>
    <div className="relative w-full h-60 sm:h-80 md:h-96">
      <img src={imgBannerATV} alt="Banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-blue-links bg-opacity-20"></div>
      <h1 className="absolute inset-0 flex items-center justify-center uppercase font-impact text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-banner">
        {title}
      </h1>
      <div className="absolute bottom-4 left-4 flex space-x-2 sm:space-x-4">

        {socialMedia.map((social,index) => (
          <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="box-icon"
        >
          <box-icon name={social.name} type={social.type} color={social.color}></box-icon>
        </a>
        ))}

      </div>
    </div>  
  </div>
  )
}

export default BannerView