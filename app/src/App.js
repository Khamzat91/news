import React from "react";
import About from "./components/about/About";
import FullArticle from "./components/full-articall/FullArticle";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Main from "./page/main/Main";
import OpenMenu from "./components/openMenu/OpenMenu";
import Profile from "./page/profile/Profile";
import Login from "./components/login/Login";
import CreateArticle from "./components/createArticle/CreateArticle";
import EditArticle from "./components/editArticle/EditArticle";
import Registration from "./components/registration/Registration";
import { useDispatch } from "react-redux";
import { setIsAuth } from "./redux/action/user";

function App() {
  const [exit, setExit] = React.useState(false);
  const dispatch = useDispatch()
  const handleExitToggle = () => {
    setExit(!exit);
  };

  React.useEffect(() => {
    if (localStorage.getItem('user')) {
      dispatch(setIsAuth(true))
    }
  }, [])

  return (
    <div className="app" style={{ display: "flex" }}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="index" element={<About />} />
          <Route path="/createarticle" element={<CreateArticle/>}/>
          <Route path="/editarticle" element={<EditArticle/>}/>
          <Route path="/fullarticle/:id" element={<FullArticle />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
      {exit ? (
        <OpenMenu handleExitToggle={handleExitToggle} />
      ) : (
        <Menu handleExitToggle={handleExitToggle} />
      )}
    </div>
  );
}

export default App;
