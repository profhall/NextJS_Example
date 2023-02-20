import React, { useEffect,useState, useRef } from 'react'
import axios from "axios";
import Image from 'next/image';
import parse from 'html-react-parser'

const Main = () => {
    const [visible, setVisibility] = useState("visible");
    const [res, setRes] = useState(null)
    const [videos, setVideos] = useState(null)
    const [height, setHeight] = useState(0)
    const ref = useRef(null)
    const size = useWindowSize();


    useEffect(() => {
        axios({
            'method': 'POST',
            'url': '/api/graphql',
            'data': {
                'query': `
                    query Query{
                      getVids {
                        title
                        description
                        url
                        thumbnail_large
                      }
                    }
                `
            }
        }).then((_res) => {
            setRes((_res.data.data.getVids))
            // console.log(ref.current.clientHeight)
            setHeight(ref.current.clientHeight);
        }).catch((e) => console.log(e))

        // const newHeight = ref.current.clientHeight;
        // setHeight(newHeight);
      },[])


    useEffect(() => {
        console.log(height);
        // getSize()
      },[height])

    
      useEffect(() => {
        console.log(size);
        if (ref.current) setHeight(ref.current.clientHeight);

        },[size]);



  function handleClick(e) {
    document.getElementById(e.target.id).style.visibility = "hidden";

  }

    
    return (

            <div className=" w-full h-[30vh] overflow-auto   ">
                {res ? res.map((vid, key)=>{
                    console.log(key, vid)
                    return (
                        <div className="flex w-full md:flex-row flex-col-reverse justify-between flex-wrap  py-7  border-b-2">
                            <div className="md:w-7/12 lg:w-7/12 w-full overflow-auto h-full">
                                <h1 className="text-h2 text-blackish ">
                                    {vid.title}
                                </h1>
                                <h1 className="text-p py-5 pr-16 text-blueish ">
                                    {parse(vid.description)}
                                </h1>
                            </div>

                            {/* <div className="  m-[7px] sm:m-0 flex-grow md:w-5/12 lg:w-5/12  border border-red-700  "> */}
                                    
                                    <div id={key} onClick={handleClick} style={{ background:`linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url( ${vid.thumbnail_large}) no-repeat`, backgroundSize:"contain"}} className={` rounded  flex flex-row aspect-video justify-center w-full  m-[7px] sm:m-0 flex-grow md:w-5/12 lg:w-5/12 `} >
                                            <Image
                                                priority
                                                src="/assets/playbtn.png"
                                                className=" self-center"
                                                height={150}
                                                width={150}
                                                alt=""
                                                
                                            />
                                    </div>
                                    
                                    {/* <iframe ref={ref} id={`vid-${key}`} className="rounded w-full aspect-video" src={vid.url.replace("https://vimeo.com/", "https://player.vimeo.com/video/")}/> */}
                            {/* </div> */}
                        </div>

                    )
                    
                }) :
                <div>Loading...</div>
                }
                


            </div>
    )

    
};

export default Main;



// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Call handler right away so state gets updated with initial window size
      handleResize();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }
