import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { convertViews} from '../../data';
import { fetchPopularVideos } from '../../useYoutubeApi';
import moment from 'moment';


const Feed = ({category }) => {

    const [data,setData] =useState([])
    useEffect(()=>{
        fetchPopularVideos(category).then(setData)
    },[category])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
        {data.map((item,idx)=>{
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={idx} className="block rounded overflow-hidden hover:scale-105   transition-transform bg-white">
                    <img src={item.snippet.thumbnails.medium.url} alt="" 
                    className='w-full object-cover'/>
                    <div className='ml-0.5'>
                        <h2 className='font-semibold text-sm'>{item.snippet.title}</h2>
                        <h3 className='text-xs text-gray-600'>{item.snippet.channelTitle}</h3>
                        <p className='text-xs text-gray-500'>{convertViews(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                    </div>
                </Link>
            )   
        })}
    </div>
  )
}

export default Feed
