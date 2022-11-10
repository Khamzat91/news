import React from "react";
import About from "./components/about/About";
import Menu from "./components/menu/Menu";
import OpenMenu from "./components/openMenu/OpenMenu";

function App() {
  const [exit, setExit] = React.useState(false);
  const handleExitToggle = () => {
    setExit(!exit);
  };

  return (
    <div className="app" style={{ display: "flex" }}>
      <About />
      {exit ? <Menu handleExitToggle={handleExitToggle}/> : <OpenMenu handleExitToggle={handleExitToggle}/>}
    </div>
  );
}

export default App;
