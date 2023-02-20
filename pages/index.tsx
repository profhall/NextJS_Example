import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar/navBar.js'


const Home: NextPage = () => {
  const [header,setHeader] = useState("invisible")

  useEffect(() => {
    console.log(header)
  },[header])

  const toggleHeader = () =>{
    header === "invisible" ? setHeader("visible") : setHeader("invisible")
  }

  return (
    <div className=" bg-blackish grid grid-rows-m-layout lg:grid-rows-layout grid-cols-5 gap-1 min-h-screen w-full ">
      <div className={` col-start-1 col-span-3 lg:col-span-5 row-start-1 row-span-5 lg:row-span-1 ${header} lg:visible z-10`}>

        <NavBar header={header}/>
      </div>
      {/* <NavBar header={header}/> */}

      <div className=' bg-blueish col-start-1 col-span-5 row-start-1  row-span-2  '>
        hero
        <button onClick={toggleHeader} className="lg:invisible float-right">
          Click Me
        </button>
      </div>
      
      <div className=' bg-blueish col-start-1 col-span-5 row-start-3 '>video section</div>
      
      <div className=' bg-blueish col-start-1 col-span-5 row-start-4 '>Text Blob</div>
      
      <div className=' bg-redish col-start-1 col-span-5 grid grid-rows-2 row-start-5 '>Footer</div>
    </div>
  )
}

export default Home
