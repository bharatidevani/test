import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import ComA from './ComA'
import About from './About'
import {Error} from './Error'
import {Menu} from './Menu'
import { Contact } from './Contact'
import Service from './Service'
import User from './User'
import Search from './Search'

const App=()=> {
  return (
    <>
    <Menu/>
    <Routes>
        <Route exact path='/' Component={About}/>
       <Route  path='/contact' Component={()=><Contact contact='contact us'/>} />
       <Route path='/service' Component={()=><Service service='get service' />}/>
       <Route path='/user/:fname/:lname' Component={User}/>
      <Route path='/search' Component={Search} />
       {/* <Route path='*'Component={Error}  /> */}
    </Routes>
    {/* <ComA/>
    <About/> */}
                         
    </>
  )
}

export default App
