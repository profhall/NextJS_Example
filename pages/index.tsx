import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero/hero.js'
import Footer from '../components/Footer/footer.js'
import TextBlob from '../components/TextBlob/text_blob'
import NavBar from '../components/NavBar/navBar.js'
import Videos from '../components/Videos/videos.js'


const Home: NextPage = () => {
  const [header,setHeader] = useState("invisible")
  const blob_head = useState("Ready to have your cake and eat it too?")
  const blob_mess = useState("Start by designing the esperience you have in mind. We'll guide you through each step. If you esperience meets the quality standards, you'll more hear about what's next.")
  const cta_button = useState("Do something awesome")
  const hero_head = useState("The worlds greatest fake site")
  const hero_mess = useState("Create the worlds greatest fake site and enjoy the breeze of fresh air while you complete it")
  
  useEffect(() => {
    console.log(header)
  },[header])

  const toggleHeader = () =>{
    header === "invisible" ? setHeader("visible") : setHeader("invisible")
  }

  return (
    <div className="grid grid-rows-m-layout lg:grid-rows-layout grid-cols-5 gap-1 min-h-screen w-full ">
      <div className={` col-start-1 col-span-3 lg:col-span-5 row-start-1 row-span-5 lg:row-span-1 ${header} lg:visible z-10`}>

        <NavBar header={header}/>
      </div>

      <div className=' bg-blueish col-start-1 col-span-5 row-start-1  row-span-2  '>
     
        <Hero heading={hero_head} message={hero_mess} cta={cta_button} toggleHeader={toggleHeader} />
        
      </div>
      
      <div className='bg-white-text col-start-1 col-span-5 row-start-3 border'>
        <Videos/>
      </div>
      
      <div className='bg-white-text col-start-1 col-span-5 row-start-4 '>
      
      <TextBlob blob_message={blob_mess} blob_head={blob_head}  />
      </div>
    
      <div className='bg-white-text col-start-1 col-span-5 row-start-5 px-20  pt-s-space'>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
