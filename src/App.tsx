
import './App.css'
import Hand from './components/Hands';
import { replyInLanguage, Limb, Language, Color } from './components/reply';
import {useState} from 'react';
//import Dropdown from './components/selectLang';



function App() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState('eng');
  const [handType, setHandType] = useState('leftHand');
  const [handColor, setHandColor] = useState('red');

//Handle Spinner Click
function handleClick() {  
  const randomNumber = Math.floor(Math.random() * 4);
  const randomColor = Math.floor(Math.random() * 4);
  const handTypes = ['leftHand', 'rightHand', 'leftFoot', 'rightFoot'];
  const colors = ['red', 'blue', 'green', 'yellow'];
  setHandType(handTypes[randomNumber]);
  setHandColor(colors[randomColor]);
  //console.log(handColor);

}

  return (
    <>
         <select value={language} onChange={(event)=>{
          setLanguage(event.target.value); 
          console.log(event.target.value);
          
        }} title="Language Selector">
            <option value="">Select...</option>
            <option value="eng">English</option>
            <option value="rus">Russian</option>
            <option value="ger">German</option>
        </select>
    <h1 style={{paddingBottom: "50px"}}>{replyInLanguage(language as Language, handType as Limb, handColor as Color)}</h1>
    <div className='circle' onClick={handleClick}>
      <Hand handType={handType} handColor={handColor}/>
    </div>
    </>
  )
}

export default App
