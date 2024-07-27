import axios from 'axios';
import  { useEffect, useState } from 'react'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const[tag,setTag] = useState('');

  const{gif,loading, fetchData} = UseGif(tag);

  return (

    
    <div className='w-1/2  flex flex-col items-center gap-y-5 mt-[15px] border-black bg-blue-800'>
        <h1 className='text-2xl underline font-bold uppercase'>Random {tag} Gif</h1>


         {
          loading ? (<Spinner/>) : (<img src={gif} width="450" height="100"/>)
         }

         <input
className='w-10/12 text-lg py-2 text-center rounded-lg mb-[3px]'
onChange={(event)=> setTag(event.target.value)}
value={tag}
></input>

        {/* <img src={gif} width="450"/> */}
        <button className='w-10/12 bg-blue-500 text-lg py-2 rounded-lg' onClick={() => fetchData(tag)}>
            Generate
        </button>
    </div>
  )
}

export default Tag