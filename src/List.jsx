import React from 'react'
import ListComponent from './ListComponent'

function List({searchReasult,setPlayVideo,tcolor,setPlayVideoTitle}) {

  if(searchReasult.length===0){
    console.log("Loading")
  }
  else{
    console.log(searchReasult[0].snippet.thumbnails.high.url)

  }
  
  

  return (
    <div className=' text-left'>
    {
        searchReasult.map((value,index)=><ListComponent key={index} thumbnail={searchReasult[index].snippet.thumbnails.high.url} videoId={searchReasult[index].id.videoId} setPlayVideo={setPlayVideo} title={searchReasult[index].snippet.title} tcolor={tcolor} setPlayVideoTitle={setPlayVideoTitle} videoTitle={searchReasult[index].snippet.title}/>)
    }
    </div>
  )
}

export default List