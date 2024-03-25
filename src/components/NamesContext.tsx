/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

type NamesContextType = {
  names: string[];
  addName: (name: string) => void;
  deleteName: (index: number) => void;
};

const NamesContext = React.createContext<NamesContextType>({
  names: [],
  addName: () => {},
  deleteName: () => {},
});

export default NamesContext;
