import React from "react";
import About from "./components/about/About";
import FullArticle from "./components/full-articall/FullArticle";
import Menu from "./components/menu/Menu";
import OpenMenu from "./components/openMenu/OpenMenu";
import Profile from "./components/profile/Profile";

function App() {
  const [exit, setExit] = React.useState(false);
  const handleExitToggle = () => {
    setExit(!exit);
  };

  return (
    <div className="app" style={{ display: "flex" }}>
      {/* <About /> */}
      {/* <FullArticle/> */}
      <Profile/>
      {exit ? <OpenMenu handleExitToggle={handleExitToggle} /> : <Menu handleExitToggle={handleExitToggle}/>}
    </div>
  );
}

export default App;
