import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import CharacterList from "./components/CharacterList";

const App: React.FC = () => {
  
  return (
    <div>
      <Logo />
     <CharacterList/>
    </div>
  );
};

export default App;
