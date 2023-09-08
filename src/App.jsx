
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {
  function handleClik(){
    alert('button clicked');
  }
  const handleClik2 = ()=>{
    alert('button 2 clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
     <h1>React Core Concept2</h1>
     <Friends></Friends>
     <Users></Users>
     <Team></Team>
<Counter></Counter>
     <button onClick={handleClik}>Click me</button>
     <button onClick={handleClik2}>Click2</button>
     <button onClick={() =>{alert('third clicked')}}>Third</button>
     <button onClick={() => addToFive(5)}>Four</button>
      </>
  )
}

export default App
