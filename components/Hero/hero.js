import React from 'react';

const Hero = ({heading,message,cta, toggleHeader}) => {
    return (
        <div className='flex text-white-text h-full flex-col items-center justify-center w-full mb-12 bg-hero bg-no-repeat bg-cover bg-center lg:bg-bottom'>
        <button onClick={toggleHeader} className="lg:invisible fixed top-5 right-5 float-right">
          Click Me
        </button>
            <div className='flex flex-col z-[2] text-center  '>
                <h2 className='text-h1  '>{heading}</h2>
                <p className='py-4 text-p self-center w-[55%]'>{message}</p>
            </div>
            <button className='px-8 py-2 text-p text-center rounded-full bg-redish'>{cta}</button>

        </div>
    );
};

export default Hero;