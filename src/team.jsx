import { useState } from "react"

export default function Team(){
    const [count,setCount] = useState(11);


  const teamStyle = {
    border: '2px solid black',
    margin: '15px',
    padding:'15px',
    borderRadius:'15px'
  }
const handleClick =()=>{
  const newCount = count + 1 ;
  setCount(newCount)
}
const handleClick2=()=>{
  const newCount1 = count - 1 ;
   setCount(newCount1)
}



  return (
    <div style={teamStyle}>
     <h3 style={{color:'blue'}}>Players:{count} </h3>
     <button onClick={handleClick}>ADD</button>
     <button onClick={handleClick2}>REMOVE</button>
    
    
    
    
    
    </div>




  )
}