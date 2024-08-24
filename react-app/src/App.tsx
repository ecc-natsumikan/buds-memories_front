import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./page/Login";
import Registration from "./page/registration";

const App: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Registration" element={<Registration/>}/>
    </Routes>
  );
}
export default App;