// React and hooks
import React, { useState } from "react";

// Third-party libraries
import { useCookies } from "react-cookie";
import { motion } from "framer-motion";

// Styles
import "./App.css";

// Components
import Hand from "./components/Hands";
import Menu from "./components/Menu";
import NamesContext from "./components/NamesContext";
import Footer from "./components/Footer";
import TextToSpeech from "./components/TextToSpeechTest";

// Utilities
import { replyInLanguage, Limb, Language, Color } from "./components/reply";

function App() {
  const [cookies, setCookie] = useCookies(["language", "names"]);
  const [names, setNames] = useState(
    Array.isArray(cookies.names) ? cookies.names : []
  );
  const [language, setLanguage] = useState(cookies.language || "eng");
  const [handType, setHandType] = useState("leftHand");
  const [handColor, setHandColor] = useState("red");
  const [hexColor, setHexColor] = useState("#FF0000");
  const [whoIsNext, setWhoIsNext] = useState(0);

  // Handle Spinner Click
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomColor = Math.floor(Math.random() * 4);

    const handTypes = ["leftHand", "rightHand", "leftFoot", "rightFoot"];
    const colors = ["red", "blue", "green", "yellow"];
    const hexColors = ["#FF7373", "#4D94FF", "#33FF33", "#FFFF99"];

    setHandType(handTypes[randomNumber]);
    setHandColor(colors[randomColor]);
    setHexColor(hexColors[randomColor]);

    if (whoIsNext + 1 === names.length || whoIsNext + 1 >= names.length) {
      setWhoIsNext(0);
    } else {
      setWhoIsNext(whoIsNext + 1);
    }
  }

  const addName = (name: string) => {
    const newNames = [...names, name];
    setNames(newNames);
    setCookie("names", newNames, { path: "/" });
  };

  const deleteName = (index: number) => {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames);
    setCookie("names", newNames, { path: "/" });
  };

  return (
    <NamesContext.Provider value={{ names, addName, deleteName }}>
      <div className='fixed top-10 left-10'>
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

      {/* <NewMenu /> */}

      <h1 className='text-5xl font-bold pb-10'>
        {names[whoIsNext] ? names[whoIsNext] + "," : ""}{" "}
        {replyInLanguage(
          language as Language,
          handType as Limb,
          handColor as Color
        )}
      </h1>

      {/* <TextToSpeech
        text={
          names[whoIsNext]
            ? names[whoIsNext] + ","
            : "" +
              replyInLanguage(
                language as Language,
                handType as Limb,
                handColor as Color
              )
        }
      /> */}

      <motion.div
        whileHover={{ scale: [null, 1.4, 1.3] }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.7 }}
        onClick={handleClick}
        className={`h-[230px] w-[230px]  rounded-full flex items-center justify-center cursor-pointer mx-auto bg-main-grey shadow-lg `}
      >
        {" "}
        <Hand handType={handType} handColor={hexColor} />
      </motion.div>

      <Footer />
    </NamesContext.Provider>
  );
}

export default App;
