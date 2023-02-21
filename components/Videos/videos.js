import { useEffect,useState, useRef } from 'react'
import axios from "axios";
import Image from 'next/image';
import parse from 'html-react-parser'

const Videos = () => {
    const [visible, setVisibility] = useState("visible");
    const [vid_res, setRes] = useState(null)
    const [currentVid, setcurrentVid] = useState(0)

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

        }).catch((e) => console.log(e))

      },[])

      useEffect(() => {
        console.log(currentVid);
        // getSize()
      },[vid_res, currentVid])

      const videoNav = (currentVid,direction) =>{
        direction === "next"? setRes(currentVid+1):setRes(currentVid-1)
      } 


    return (
        <div className='grid h-full gap-5 grid-cols-m-v-section lg:grid-cols-v-section lg:mx-20'>
            <div className='lg:row-start-1 h-full lg:col-span-2 col-span-1 row-start-2 mx-10 '>
                
                <h1 className='text-h2 pb-h-space text-blackish'>{vid_res ? vid_res[currentVid].title : "Loading.."} </h1>
                <div className='text-p text-blueish overflow-y-auto  h-[150px] lg:h-[325px]'>
                    <p>
                    {vid_res ? parse(vid_res[currentVid].description) : ""}
                    </p>
                </div>
            </div>
            
            <div style={{ background: `url(${vid_res ? vid_res[currentVid].thumbnail_large:""}) no-repeat center`}} className=' col-span-1 text-center aspect-video'>
                <div  className='justify-center flex-col flex bg-gradient-to-b from-gradient-t/50 to-gradient-b/50 w-full h-full'>
                    <a className=" self-center " target="_blank" href={`${vid_res ? vid_res[currentVid].url:""}`}>
                        <Image
                            priority
                            src="/assets/playbtn.png"
                            height={150}
                            width={150}
                            alt=""
                            
                        />
                    </a>
                </div>
            </div>

            
        </div>
    );
};

export default Videos;