import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL } from '../../data';
import { convertViews } from '../../data';
import { formatCount } from '../../data';
import { Link } from 'react-router-dom';

const Recomended = ({categoryId}) => {

    const[apiData,setApiData] = useState([]);

    const fetchRecommendedVideos = async () => {
        try {
            const response = await fetch(
            `${BASE_URL}/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=25&key=${API_KEY}`
            );
            const data = await response.json();
            setApiData(data.items)
        } catch (error) {
            console.error("Failed to fetch recommended videos", error);
            return [];
        }
    };
    useEffect(()=>{
        fetchRecommendedVideos()
    },[])
    function timeAgo(dateString) {
            const now = new Date();
            const past = new Date(dateString);
            const diffInSeconds = Math.floor((now - past) / 1000);

            const intervals = [
                { label: 'year', seconds: 31536000 },
                { label: 'month', seconds: 2592000 },
                { label: 'week', seconds: 604800 },
                { label: 'day', seconds: 86400 },
                { label: 'hour', seconds: 3600 },
                { label: 'minute', seconds: 60 },
            ];

            for (const interval of intervals) {
                const count = Math.floor(diffInSeconds / interval.seconds);
                if (count > 0) {
                return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
                }
            }

                return 'just now';
    }

  return (
        <div className='basis-[30%] cursor-pointer '>
            {apiData.map((item,idx)=>{
                return(
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={idx} className="flex gap-3 p-2 hover:scale-[1.02] hover:shadow-md transition-transform bg-white rounded-lg">
                        <img
                            src={item.snippet.thumbnails.medium.url}
                            alt=""
                            className="w-[40%] aspect-video object-cover rounded-md"
                        />
                        <div className="flex flex-col w-[60%]">
                            <h2 className="text-sm font-semibold text-black line-clamp-2">
                            {item.snippet.title}
                            </h2>
                            <h3 className="font-semibold line-clamp-1">
                            {item.snippet.channelTitle}
                            </h3>
                            <p className="text-xs text-gray-500">
                            {convertViews(item.statistics.viewCount)} &bull; {timeAgo(item.snippet.publishedAt)}
                            </p>
                        </div>
                    </Link>
 
                )
            })}           
        </div>
    )
}

export default Recomended