import React, { useEffect, useState } from 'react'
import Video from '../../assets/video1.mp4'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import userprofile from '../../assets/commentprofile.jpg'
import { API_KEY, BASE_URL } from "../../data";
import { convertViews } from '../../data';
import { fetchComments } from '../../useYoutubeApi'; 




const Playvideo = ({videoId}) => {
    
    const [api, setApi] = useState(null);
    const [channelData,setChannelData] =useState(null);
    const [comments, setComments] = useState([]);
    
    const fetchdata = async () => {
        try {
        const response = await fetch(`${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`);
        const data = await response.json();
        setApi(data.items[0]);
        } catch (error) {
        console.error("Failed to fetch video details", error);
        }
    };
    const fetchotherData = async()=>{
        try {
        const response = await fetch(`${BASE_URL}/channels?part=snippet,statistics&id=${api.snippet.channelId}&key=${API_KEY}`);
        const data = await response.json();
        setChannelData(data.items[0]);
        } catch (error) {
        console.error("Failed to fetch video details", error);
        }
    }
    const fetchComments = async () => {
        try {
            const response = await fetch(
            `${BASE_URL}/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}&maxResults=50`
            );
            const data = await response.json();
            setComments(data.items);
        } catch (error) {
            console.error("Failed to fetch comments", error);
        }
    };
    useEffect(() => {
        if (videoId) 
            fetchdata();
            fetchComments();
    }, [videoId]); 

    useEffect(() => {
        if (api?.snippet?.channelId)
         fetchotherData();
    }, [api]);
      
    const formatCount = (num) => {
        if (!num) return "0";
        num = parseInt(num);
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num.toString();
    };


    
  return (
    <div className='mt-4 basis-[69%]'>
        <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-[37vw] rounded-2xl shadow-md"
        />
        <h3 className='mt-3 text-4xl font-bold ml-1 mb-3'>{api ? api.snippet.title:"Title Here"}</h3>
        <div className='flex items-center justify-between flex-wrap mt-2  text-gray-500'>
            <p className='ml-1'>{api ? convertViews(api.statistics.viewCount) : '...'} &bull; {api ? new Date(api.snippet.publishedAt).toDateString() : ''}</p>
            <div className='flex items-center gap-5 cursor-pointer'>
            <div className="flex items-center gap-1">
                <BiSolidLike />
                <span>{formatCount(api?.statistics?.likeCount)}</span>
            </div>
            <div className="flex items-center gap-1">
                <BiSolidDislike />
                <span>23</span>
            </div>
            <div className="flex items-center gap-1">
                <FaShare />
                <span>Share</span>
            </div>
            <div className="flex items-center gap-1">
                <MdLibraryMusic />
                <span>Save</span>
            </div>
        </div>

        </div>  
        <hr className='h-2 mt-5 mb-5 bg-white text-gray-500'/>
        <div className='flex items-center mt-5 ml-1'>
            <img src={channelData?.snippet?.thumbnails?.default?.url || "null"} alt="" 
            className="w-10 h-10 rounded-full object-cover "/>
            <div className='flex-1 leading-[18px] ml-3'>
                <p className='font-bold text-3xl'>{api ? api.snippet.channelTitle : "Channel Name"}</p>
                <span className='text-gray-700'>{channelData?.statistics?.subscriberCount
                    ? `${formatCount(channelData.statistics.subscriberCount)} Subscribers`
                    : "Subscribers"}</span>
            </div>
            <button 
            className='bg-red-600 px-7 py-3 text-white font-medium mr-7 rounded cursor-pointer outline-0  hover:bg-red-700  active:scale-95 transition-all duration-300'>Subscribe</button>
        </div>
        <div className='pl-[60px] mt-8'>
            <p className='text-gray-600 font-sans'>{api?.snippet?.description.slice(0,250)}</p>
            <hr className='h-2 mt-5 mb-5 bg-white text-gray-500'/>
            <h4 className='font-bold mb-5 text-gray-600'>{api?convertViews(api.statistics.commentCount):"13"} Comments</h4>
            {comments.map((comment, idx) => {
                const snippet = comment.snippet.topLevelComment.snippet;
                return (
                    <div key={idx} className="flex items-start space-x-4 mb-8">
                    <img
                        src={snippet.authorProfileImageUrl}
                        alt=""
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="text-black text-lg font-semibold leading-tight">
                        {snippet.authorDisplayName}
                        <span className="text-gray-500 text-sm ml-2">
                            {new Date(snippet.publishedAt).toDateString()}
                        </span>
                        </h3>
                        <p className="text-gray-600">{snippet.textDisplay}</p>
                        <div className="flex items-center space-x-2 cursor-pointer text-gray-600">
                        <BiSolidLike />
                        <span>{snippet.likeCount > 0 && <span>{snippet.likeCount}</span>}</span>
                        <BiSolidDislike />
                        </div>
                    </div>
                    </div>
                );
            })} 
        </div>
    </div>
  )
}

export default Playvideo