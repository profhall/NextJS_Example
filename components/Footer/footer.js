import React from 'react';
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
    return (
        <footer className="flex flex-col  h-full justify-start w-full ">
          <div className="flex justify-start w-full py-s-space">
            <ul className=" w-2/12 h-full text-blueish leading-link pb-s-space">
            <h1 className="text-p text-redish font-bold py-h-space">Fakesite</h1>
              <li>
                About Us
              </li>
              <li>
                Press
              </li>
              <li>
                Polocies
              </li>
              <li>
                Help
              </li>
            </ul>
            
            <ul className="w-2/12 h-full text-blueish leading-link pb-s-space">
            <h1 className="text-p text-redish font-bold py-h-space">Account</h1>
              <li>
                Edit Profile
              </li>
              <li>
                Friends
              </li>
              <li>
                Social Media
              </li>
              <li>
                Delete Profile
              </li>

            </ul>
          </div>

          <div className="flex items-center w-full justify-center border-t pt-4">
            <a className="flex  items-center justify-center " href="/">
              <Image height={45} width={45} src="/assets/logo.png" alt="Logo"  />
            </a>

            <ul className="flex flex-grow justify-end items-center  ">
                <li className="pr-10">
                    <Link href={'/terms'}>Terms</Link>
                </li>
            
                <li className="pr-10">
                    <Link href={'/privacy'}>Privacy</Link>
                </li>
                <li>
                    <Link href="/sitemap">
                        Sitemap
                    </Link>
                </li>
            </ul>
          </div>
      </footer>
    );
};

export default Footer;