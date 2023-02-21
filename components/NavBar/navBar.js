import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react'



const NavBar = ({header}) => {
    // const [header,setHeader] = useState("invisible")

    return (
        <div className={`lg:absolute h-full lg:h-auto text-white-text lg:top-0 w-full`}>

            <div className="w-full m-auto flex justify-between items-center p-4">
            <Link className="" href={'/'}>
            <Image
                            priority
                            src="/assets/logo.png"
                            height={50}
                            width={50}
                            alt=""
                        />
            </Link>
            
            <ul className="flex flex-grow justify-end items-center text-p ">
                <li className="pr-10">
                    <Link href={'/account'}>Account</Link>
                </li>
            
                <li className="pr-10 ">
                    <Link href={'/help'}>Help</Link>
                </li>
                <li>
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