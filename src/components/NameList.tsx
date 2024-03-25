import React, { useState } from "react";
import { useCookies } from "react-cookie";

function NameList() {
  const [cookies, setCookie] = useCookies(["names"]);
  const [names, setNames] = useState(
    Array.isArray(cookies.names) ? cookies.names : []
  );

  const [currentName, setCurrentName] = useState("");

  const handleDeleteName = (index: number) => {
    const newNames = names.filter((name, i) => i !== index);
    setNames(newNames);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentName(event.target.value);
  };

  const handleAddName = () => {
    if (!currentName.trim()) {
      // Don't add if the current name is empty or only contains whitespace
      return;
    }
    setNames((prevNames) => {
      const updatedNames = [...prevNames, currentName];
      setCookie("names", updatedNames, { path: "/" }); // set the cookie to the updated names array
      return updatedNames;
    });

    setCurrentName("");
  };

  return (
    <div>
      {names.map((name, index) => (
        <div key={index} className='flex items-center '>
          <div className='flex items-center justify-center text-lg h-[40px] bg-[#565656] w-full my-1 py-1 rounded-md mx-auto mr-2'>
            <h2 className=''>{name}</h2>
          </div>
          <button
            onClick={() => handleDeleteName(index)}
            className='bg-[#e85656] w-[50px] h-[40px] text-lg'
          >
            x
          </button>
        </div>
      ))}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddName();
        }}
        className=' items-center '
      >
        <input
          value={currentName}
          onChange={handleNameChange}
          className='text-white flex-grow w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline'
          placeholder='Enter name'
        />
        <button
          type='submit'
          className='bg-green-500 h-[40px] w-full my-1 py-1 rounded-md text-black'
        >
          +
        </button>
      </form>
    </div>
  );
}

export default NameList;
