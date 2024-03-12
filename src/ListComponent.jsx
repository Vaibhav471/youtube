import React from 'react'

function ListComponent({thumbnail,videoId,setPlayVideo,title,tcolor,setPlayVideoTitle,videoTitle}) {
  const fun=()=>{
    setPlayVideo(videoId)
    setPlayVideoTitle(videoTitle)
  }

  return (
    <>
    <div className={`inline-flex mt-12 text-${tcolor}`} onClick={fun}>
      <img src={thumbnail}
          className='h-24 w-fit rounded-lg'
    />
    <p className='ml-6'>{title}</p>
    </div>
    </>
  )
}

export default ListComponent