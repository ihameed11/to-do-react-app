import React from 'react'
import  {useState} from 'react'

function Hoks() {

    const [data,setData]=useState({
        counter:0,
        name:""
    })
  return (

    <div >

{console.log( data.counter)}
        <input type="text" onChange={e=>setData({
            ...data,
            name:e.target.value
        })}/>

        <button type="button" onClick={e=>setData({
            ...data,
            counter: data.counter+1
        })} > increment</button>

        <button type="button" onClick= {e=>setData({
            ...data,
            counter: data.counter-1
        })} >decrement</button>


    </div>
  )
}

export default Hoks