import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ComA = () => {
    const [num, setnum] = useState();
    const [name, setname] = useState()
    const [move, setmove] = useState()

    useEffect(()=>{
        // alert('hi')
        async function getData(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res);
            // setname(res.data.name);
            // setmove(res.data.moves[0].move.name)
        }
        getData();
    })
  return (
    <>
    <h1>You Choose <span style={{color:'red'}}>{num} </span>Value</h1>
    <h1>my name is <span style={{color:'red'}}>{name}</span> </h1>
    <h1>my Moves<span style={{color:'red'}}> {move}</span>  </h1>
        <select value={num} onChange={(e)=>setnum(e.target.value)}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
    </>
  )
}

export default ComA;
