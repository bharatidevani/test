import React, { useState } from 'react'
import Searchresult from './Searchresult';

const Search = () => {

    const [img, setimg] = useState('');
 
    const inputevent=(e)=>{
        setimg(e.target.value)
        console.log(e.target.value)
    }
  return (
    <>
   
    <div className='searchbar'>
        
      <input type='text'onChange={inputevent} value={img} placeholder='Search image' />
       
    </div>
    <div className='img1'>
       {img===''? null : <Searchresult images={img} />} 
    </div>
     
    </>
  )
}

export default Search
