import React from 'react'
import { useLocation, useParams, useHistory, useNavigate} from 'react-router-dom'

const User = () => {

    const {fname,lname}=useParams();
    const location= useLocation();
    const navigate=useNavigate();
console.log(navigate)
    // console.log(location)
  return (
    <>
      <h1> user name {fname}{lname}</h1>
      <h3> Currunt location is {location.pathname}</h3>

      {
        location.pathname===`/user/shree/ss`?<button onClick={()=>alert('thanks')}>clicked</button>:null
      }
      <button onClick={()=>navigate('/contact')}>Go Back</button>
    </>
  )
}

export default User
