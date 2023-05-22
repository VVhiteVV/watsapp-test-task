import React from 'react';
import "./global.css"
import SideBarList from "./components/sideBar/SideBarList";
import WindowChat from "./components/WindowChat/WindowChat";
function App() {

  return (
    <div className="App">
        <SideBarList/>
        <WindowChat/>
    </div>
  );
}

export default App;
