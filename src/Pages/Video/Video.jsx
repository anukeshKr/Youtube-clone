import React from 'react'
import Playvideo from '../../Components/playvideo/Playvideo'
import Recomended from '../../Components/Recomended/Recomended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId} = useParams();
  return (

    <div className='pl-[2%] pr-[2%] pt-[20px] b-[20px] flex justify-between flex-wrap'>
      <Playvideo videoId={videoId} />
      <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video
