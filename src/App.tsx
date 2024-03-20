import "./App.css";
import Hand from "./components/Hands";
import { replyInLanguage, Limb, Language, Color } from "./components/reply";
import { useState } from "react";
import { useCookies } from "react-cookie";
import Menu from "./components/Menu";
import NamesContext from "./components/NamesContext";

import { TEAnimation } from "tw-elements-react";

function App() {
  const [cookies, setCookie] = useCookies(["language"]);
  const [names, setNames] = useState([]);

  const [language, setLanguage] = useState(cookies.language || "eng");
  const [handType, setHandType] = useState("leftHand");
  const [handColor, setHandColor] = useState("red");
  const [hexColor, setHexColor] = useState("#FF0000");

  const [whoIsNext, setWhoIsNext] = useState(0);

  //Handle Spinner Click
  function handleClick() {
    if (whoIsNext + 1 === names.length || whoIsNext + 1 >= names.length) {
      setWhoIsNext(0);
    } else {
      setWhoIsNext(whoIsNext + 1);
    }
    console.log(whoIsNext);
    console.log(names.length);

    const randomNumber = Math.floor(Math.random() * 4);
    const randomColor = Math.floor(Math.random() * 4);
    const handTypes = ["leftHand", "rightHand", "leftFoot", "rightFoot"];
    const colors = ["red", "blue", "green", "yellow"];
    const hexColors = ["#FF7373", "#4D94FF", "#33FF33", "#FFFF99"];

    setHandType(handTypes[randomNumber]);
    setHandColor(colors[randomColor]);
    setHexColor(hexColors[randomColor]);
  }

  return (
    <NamesContext.Provider value={{ names, setNames }}>
      <div className='absolute top-10 left-10'>
        <select
          value={language}
          onChange={(event) => {
            setLanguage(event.target.value);
            setCookie("language", event.target.value, { path: "/" });
          }}
          title='Language Selector'
          className='p-2 text-base rounded-md border-2 border-gray-300 bg-gray-200 text-gray-700 outline-none cursor-pointer mx-auto'
        >
          <option value='eng'>🇬🇧 English</option>
          <option value='rus'>🇷🇺 Russian</option>
          <option value='ger'>🇩🇪 German</option>
        </select>
      </div>

      <Menu />

      <h1 className='text-5xl font-bold pb-10'>
        {names[whoIsNext]}{" "}
        {replyInLanguage(
          language as Language,
          handType as Limb,
          handColor as Color
        )}
      </h1>

      <TEAnimation
        animation='[drop-in_0.5s]'
        start='onClick'
        reset
        onClick={handleClick}
        className='h-[230px] w-[230px] 
            rounded-full flex items-center 
            justify-center cursor-pointer 
            mx-auto bg-main-grey shadow-lg'
      >
        <Hand handType={handType} handColor={hexColor} />
      </TEAnimation>
    </NamesContext.Provider>
  );
}

export default App;
