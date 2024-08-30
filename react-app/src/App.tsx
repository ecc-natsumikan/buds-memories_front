import React from "react";
import { Routes, Route,} from "react-router-dom";
import Login from "./page/Login";
import Registration from "./page/Registration";
import Home from "./page/Home";
import Growth from "./page/Growth";

const App: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Growth" element={<Growth/>}/>
    </Routes>
  );
}
export default App;