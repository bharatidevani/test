import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
 

export const Error = () => {
  const Navigate= useNavigate();
  
  return (
    <>
    <div>Page not found</div>
    <p>sorry, This page not find</p>
    <NavLink to='/'>Go Back</NavLink>
    {/* <button onClick={()=>Navigate('/')} >Go HOme</button> */}
    </>
  )
}
export default Error;