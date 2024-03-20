
import './App.css'
import Hand from './components/Hands';
import { replyInLanguage, Limb, Language, Color } from './components/reply';
import {useState} from 'react';
//import Dropdown from './components/selectLang';

import { TEAnimation } from "tw-elements-react";


function App() {


  const [language, setLanguage] = useState('eng');
  const [handType, setHandType] = useState('leftHand');
  const [handColor, setHandColor] = useState('red');
  const [hexColor, setHexColor] = useState('#FF0000');

  const hexColors = ['#FF7373', '#4D94FF', '#33FF33', '#FFFF99'];
//Handle Spinner Click
function handleClick() {  
  const randomNumber = Math.floor(Math.random() * 4);
  const randomColor = Math.floor(Math.random() * 4);
  const handTypes = ['leftHand', 'rightHand', 'leftFoot', 'rightFoot'];
  const colors = ['red', 'blue', 'green', 'yellow'];

  
  setHandType(handTypes[randomNumber]);
  setHandColor(colors[randomColor]);
  setHexColor(hexColors[randomColor]);

}

  return (
    <>
      <div className="absolute top-10 right-10">
        <select
          value={language}
          onChange={(event) => {
              setLanguage(event.target.value); 
            }}
            title="Language Selector"
            className="p-2 text-base rounded-md border-2 border-gray-300 bg-gray-200 text-gray-700 outline-none cursor-pointer mx-auto"
          >
            <option value="eng">🇬🇧 English</option>
            <option value="rus">🇷🇺 Russian</option>
            <option value="ger">🇩🇪 German</option>
          </select>
          </div>
          <div className="absolute top-10 left-10">
            <h1>Menu</h1>
            </div>

            <h1 className="text-5xl font-bold pb-10">
            {replyInLanguage(language as Language, handType as Limb, handColor as Color)}
            </h1>


          <TEAnimation   
            animation="[drop-in_0.5s]"
            start="onClick"
            reset
            onClick={handleClick}
            className="h-[230px] w-[230px] 
            rounded-full flex items-center 
            justify-center cursor-pointer 
            mx-auto bg-[#333333] shadow-lg"
      >
        <Hand handType={handType} handColor={hexColor} />
      </TEAnimation>
    </>
  );
}

export default App
