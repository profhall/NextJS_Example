import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react'



const NavBar = ({header}) => {
    // const [header,setHeader] = useState("invisible")

    return (
        <div className={`lg:absolute h-full lg:h-auto text-white-text lg:top-0 w-full lg:bg-opacity-0 bg-blackish`}>

            <div className="w-full m-auto lg:flex-row flex-col flex justify-between items-center p-4">
            <Link className="lg:visible collapse " href={'/'}>
            <Image
                            priority
                            src="/assets/logo.png"
                            height={50}
                            width={50}
                            alt=""
                        />
            </Link>
            
            <ul className="flex lg:flex-row flex-col w-full h-[500px] justify-evenly lg:h-auto lg:w-auto lg:justify-end items-center text-p ">
                <li className="lg:pr-10  lg:py-0">
                    <Link href={'/account'}>Account</Link>
                </li>
            
                <li className="lg:pr-10  lg:py-0 ">
                    <Link href={'/help'}>Help</Link>
                </li>
                <li className=''>
                    <Link href="/account">
                        <Image
                            priority
                            src="/images/profile.jpg"
                            height={50}
                            width={50}
                            alt=""
                            className='rounded-full'
                        />
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default NavBar;