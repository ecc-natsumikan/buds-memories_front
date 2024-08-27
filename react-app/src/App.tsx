import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Registration from "./page/Registration";
import ProfilePictureUpload from "./page/ProfilePictureUpload"

const App: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/ProfilePictureUpload" element={<ProfilePictureUpload/>} />
    </Routes>
  );
}
export default App;