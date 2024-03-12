import React, { useEffect, useState } from 'react'

function Video({video,tcolor,title,color, description}) {

  const [descBg,setDescBg]=useState('zinc-600')

  useEffect(()=>{
    if(color==='white'){
      setDescBg('stone-200')
    }
    else{
      setDescBg('zinc-600')
    }
  },[color])


  console.log(description)

  const url=`https://www.youtube.com/embed/${video}`
  const [display,setDisplay]= useState('hidden')

  const fun=()=>{
    if(display==='hidden'){
      setDisplay('none')
    }
    else{
      setDisplay('hidden')
    }
  }
  
  return (
    <div className='w-3/4'>
    <iframe src={url} frameborder="0"     className='w-full h-1/4 mt-6 rounded-lg outline'/>
    <h1 className={`text-${tcolor} text-2xl text-left mt-3`}>{title}</h1>
    <button id='descBtn' className={`text-${tcolor} float-right pr-6`} onClick={fun}>description...</button><br />
    <div id='description' className={`text-${tcolor} mt-6 text-left ${display} bg-${descBg} p-6 rounded-lg`}>
      {description} <br /> <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aliquam, reprehenderit fugiat deserunt laboriosam impedit placeat ab maxime quia possimus nemo, nihil velit itaque nulla animi facere aspernatur voluptatum excepturi!
      <br /> <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aliquam, reprehenderit fugiat deserunt laboriosam impedit placeat ab maxime quia possimus nemo, nihil velit itaque nulla animi facere aspernatur voluptatum excepturi!
      <br /> <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aliquam, reprehenderit fugiat deserunt laboriosam impedit placeat ab maxime quia possimus nemo, nihil velit itaque nulla animi facere aspernatur voluptatum excepturi!
      <br /> <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae aliquam, reprehenderit fugiat deserunt laboriosam impedit placeat ab maxime quia possimus nemo, nihil velit itaque nulla animi facere aspernatur voluptatum excepturi!
    
    </div>
    </div>
  )
}

export default Video