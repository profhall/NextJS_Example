import React from 'react';

const TextBlob = ({blob_head, blob_message}) => {
    return (
        <div className=" m-auto w-[65%] h-full object-center flex flex-col justify-center text-center py-s-space">
          <h1 className="text-h2 text-blackish py-h-space ">
              {blob_head}
          </h1>
          <h1 className="text-p text-blueish ">
              {blob_message}  
          </h1>
        </div>
    );
};

export default TextBlob;