import React from 'react'
import './index.css';


const Searchresult = (prop) => {

    const img=`https://source.unsplash.com/300x300/?${prop.images}`
  return (
   <>
   <div className='img1'>
          <img  src={img} />
   </div>
   </>
  )
}

export default Searchresult
