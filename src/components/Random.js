import axios from 'axios';
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  
  const {gif,loading,fetchData} = UseGif();



  return (

    
    <div className='w-1/2  flex flex-col items-center gap-y-5 mt-[15px] border-black bg-green-500'>
        <h1 className='text-2xl underline font-bold uppercase'>A Random Gif</h1>


         {
          loading ? (<Spinner/>) : (<img src={gif} width="450" height="100"/>)
         }




        {/* <img src={gif} width="450"/> */}
        <button className='w-10/12 bg-blue-500 text-lg py-2 rounded-lg mb-[20px]' onClick={() => fetchData()}>
            Generate
        </button>
    </div>
  )
}

export default Random