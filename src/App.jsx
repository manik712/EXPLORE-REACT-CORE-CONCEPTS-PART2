import './App.css'
import Friends from './Friends';
import Users from './Users';
import Counter from './counter';
import Team from './team';


function App() {

  function handleClick(){
    alert('button clicked');
  }
  
  const handleClick2=()=>{
  
    alert('mara kha')
  }
  
  const addToFive =(num)=>{
    alert(num+5);
  }









  return (
    <>
    
      <h1> React Core Concepts 2</h1>
      <Friends></Friends>



    <Users></Users>

      <Team></Team>





      <Counter></Counter>
      {/* <button onclick="handleClick">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert('mara kha tui bal')}}>Click Me 3</button>

      {/* vajailla */}
      <button onClick={()=>addToFive(3)} >Four</button>
           
    </>
  )
}

export default App
