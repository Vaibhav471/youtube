import React, { useState } from 'react'

function Input({setSearchQuery}) {

  const [query,setQuery]=useState("")
  console.log(query)
  
  const fun=()=>{
    setSearchQuery(query)
  }

  const keyPress=(e)=>{
    if(e.key==='Enter'){
      fun()
    }
  }

  return (
<>
<div>
    <input placeholder='search...' onChange={(e)=>setQuery(e.target.value)} className='w-96 h-12 p-6 rounded-lg outline' onKeyPress={keyPress}/><button className='bg-red-600 w-24 ml-6 h-12 rounded-lg text-white ' onClick={fun}>Search</button>
</div>
</>
  )
}

export default Input