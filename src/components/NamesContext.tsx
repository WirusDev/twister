import React from "react";

const NamesContext = React.createContext({
  names: [],
  setNames: () => {},
});

export default NamesContext;
