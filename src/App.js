import React from 'react';
import About from './components/about/About';
import Article from './components/article/Article';
import Menu from './components/menu/Menu';


function App() {
  return (
    <div className="app" style={{display: "flex"}}>
    <About/>
    <Menu/>
    </div>
  );
}

export default App;
