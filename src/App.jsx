import './App.css'
import Input from './Input'
import Video from './Video'
import List from './List'
import { useEffect, useState } from 'react'
import youtube from './youtube'

function App() {

  const [searchReasult,setSearchReasult]= useState([])
  const [searchQuery,setsearchQuery]= useState('cricket')
  const [playVideo,setPlayVideo]= useState('')
  const[playVideoTitle,setPlayVideoTitle]=useState('Title of the video')
  const [playVideoDescription,setPVD]=useState('')

  
  
  useEffect(()=>{
    async function getData(){
      var response=await youtube.get('search',{
        params:{
          part:'snippet',
          maxResults:10,
          key: 'AIzaSyDwxi6AuIKn3Lta8rUPdm09ZavYQfSkuKo',
          q:searchQuery
        }
      })
      console.log(response.data.items);
      setSearchReasult(response.data.items)
      setPlayVideo(response.data.items[0].id.videoId)
      setPlayVideoTitle(response.data.items[0].snippet.title)
      setPVD(response.data.items[0].snippet.description)

    }
    getData()
    
  },[searchQuery])

  const [color,setColor]=useState('white')
  const [tcolor,setTcolor]=useState('black')
  const [theme,setTheme]=useState('dark theme')


  const changeBg=()=>{
    if(color=='zinc'){
      setColor('white') 
      setTcolor('black')
      setTheme('dark theme')

    }
    else{
      setColor('zinc')
      setTcolor('white')
      setTheme('light theme')

    }
  }
 
  return (
    <div className={`bg-${color}-800 h-full w-full text-center pl-24 pr-24 pt-6`}>
      <div className='bg-red-600 h-12 w-full mb-6 text-white text-3xl font-black'>YOUTUBE - by Vaibhav Mishra</div>
     <Input setSearchQuery={setsearchQuery}/>
     
     <div className='text-right pr-12'>  
         <button onClick={changeBg} className='bg-red-600 text-white p-3 rounded-full'>Click to set {theme}</button>
         </div>
     <div className='inline-flex'>
      <Video video={searchReasult.length===0?"":playVideo} tcolor={tcolor} title={playVideoTitle} color={color} description={playVideoDescription}/>
      <div className='w-2/5 ml-12'>
      <hr className={`mt-3 border-${tcolor}`}/>
      <List searchReasult={searchReasult} setPlayVideo={setPlayVideo} tcolor={tcolor} setPlayVideoTitle={setPlayVideoTitle}/>

      </div>
     </div>
    </div>
    
    
  )
}

export default App
