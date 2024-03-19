
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
}

  return (
    <>
      <div className="absolute top-10 right-10">
        <select
          value={language}
          onChange={(event) => {
            if (language === '') {
              console.log(language);
              setLanguage("eng");
            } else {
              setLanguage(event.target.value);
            }



          }}
          title="Language Selector"
          className="p-2 text-base rounded-md border-2 border-gray-300 bg-gray-200 text-gray-700 outline-none cursor-pointer"
        >
          <option value="eng">🇬🇧 English</option>
          <option value="rus">🇷🇺 Russian</option>
          <option value="ger">🇩🇪 German</option>
        </select>
      </div>
      <h1 className="text-5xl font-bold pb-10">
        {replyInLanguage(language as Language, handType as Limb, handColor as Color)}
      </h1>
      <div className="circle" onClick={handleClick}>
        <Hand handType={handType} handColor={handColor} />
      </div>
    </>
  );
}

export default App
