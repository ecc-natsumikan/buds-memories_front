import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Registration from "./page/Registration";
import ProfilePictureUpload from "./page/ProfilePictureUpload"
import Confirm from './page/Confirm';
import Complete from "./page/Complete";
import ChangeProfile from "./page/ChangeProfile";
import ChangeComplete from "./page/ChangeComplete"
import Home from "./page/Home";
import Growth from "./page/Growth";
import Post  from "./page/Post";
import ChangeComplete_Post from "./page/ChangeComplete_post";


const App: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/ProfilePictureUpload" element={<ProfilePictureUpload/>} />
      <Route path="/Confirm" element={<Confirm/>} />
      <Route path="/Complete" element={<Complete/>}/>
      <Route path="/ChangeProfile" element={<ChangeProfile/>}/>
      <Route path="/ChangeComplete" element={<ChangeComplete/>}/>
      <Route path="/ChangeCompletePost" element={<ChangeComplete_Post/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Growth" element={<Growth/>}/>
      <Route path="/Post" element={<Post/>} />
    </Routes>
  );
}
export default App;