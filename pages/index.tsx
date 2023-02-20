import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [header,setHeader] = useState("invisible")

  useEffect(() => {
    console.log(header)
  },[header])

  const toggleHeader = () =>{
    header === "invisible" ? setHeader("visible") : setHeader("invisible")
  }

  return (
    <div className=" bg-blackish grid grid-rows-m-layout md:grid-rows-layout grid-cols-5 gap-1 min-h-screen ">
      <div className={`bg-redish col-start-1 col-span-3 md:col-span-5 row-start-1 row-span-5 md:row-span-1 ${header} md:visible z-10`}>header</div>

      <div className=' bg-blueish col-start-1 col-span-5 row-start-1 md:row-start-2 md:row-span-1 row-span-2'>
        hero
        <button onClick={toggleHeader} className=' m:hidden float-right'>
          toggle header
        </button>
      </div>
      
      <div className=' bg-blueish col-start-1 col-span-5 row-start-3 '>video section</div>
      
      <div className=' bg-blueish col-start-1 col-span-5 row-start-4 '>Text Blob</div>
      
      <div className=' bg-redish col-start-1 col-span-5 grid grid-rows-2 row-start-5 '>Footer</div>
    </div>
  )
}

export default Home
