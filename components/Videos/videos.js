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
        console.log(vid_res);
        // VideoList(vid_res)
        // getSize()
      },[vid_res])

      const videoNav = (currentVid,direction) =>{
        direction === "next"? setRes(currentVid+1):setRes(currentVid-1)
      } 

      const VideoList = ({videos}) => {
        let vids
        if(videos){
       

        // return(
            vids= videos.map((video)=>{
                return(
                <div className='snap-center shrink-0 grid w-full h-full gap-5 lg:grid-rows-v-section grid-cols-m-v-section lg:grid-cols-v-section lg:mx-20'>

                    <div className='lg:row-start-1 row-span-2 h-full lg:col-span-2 col-span-1 row-start-2 mx-10 '>
                        
                        <h1 className='text-h2 pb-h-space text-blackish'>{video.title } </h1>
                        <div className='text-p text-blueish overflow-y-auto  h-[300px] lg:h-[325p]'>
                            <p>
                            {video.description? parse(video.description) : "No Descripton"}
                            </p>
                        </div>
                    </div>
                    
                    <div style={{ background: `url(${video.thumbnail_large}) no-repeat center`}} className='lg:col-start-3 col-span-1 text-center aspect-video border'>
                        <div  className='justify-center flex-col flex bg-gradient-to-b from-gradient-t/50 to-gradient-b/50 h-full'>
                            <a className=" self-center " target="_blank" href={`${video.url}`}>
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
                </div>)
            })
        
        //  )
        }
        return (vids)
      }


    return (
        <div className='flex snap-x snap-mandatory h-full overflow-x-scroll overflow-y-hidden px-20'>
            <VideoList videos={vid_res!=null?vid_res:[]}/> 
        </div>
    );
};

export default Videos;