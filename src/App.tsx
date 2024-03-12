
import './App.css'
import Hand from './components/Hands';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import StartetCode from './components/startetCode';
import {useState} from 'react';



function App() {

  const [handType, setHandType] = useState('left-hand');
  const [handColor, setHandColor] = useState('red');


function handleClick() {  
  const randomNumber = Math.floor(Math.random() * 4);
  const randomColor = Math.floor(Math.random() * 4);

  const handTypes = ['left-hand', 'right-hand', 'left-foot', 'right-foot'];
  const colors = ['red', 'blue', 'green', 'yellow'];
  setHandType(handTypes[randomNumber]);
  setHandColor(colors[randomColor]);
  console.log(handColor);
}

  return (
    <>

    <h1 style={{paddingBottom: "50px"}}>{handType} on {handColor}</h1>

    <div className='circle' onClick={handleClick}>
     
      <Hand handType={handType} handColor={handColor}/>


    
    </div>
    </>
  )
}

export default App
