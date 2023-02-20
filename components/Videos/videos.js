import React from 'react';

const Videos = () => {
    return (
        <div className='grid h-full grid-cols-m-v-section lg:grid-cols-v-section'>
            <div className='bg-redish  col-span-2 px-10'>
                Video Text 
            </div>
            
            <div className='bg-blueish text-center'>
                Video Box
            </div>
        </div>
    );
};

export default Videos;