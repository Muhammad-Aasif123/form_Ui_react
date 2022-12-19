import React from "react";
// import { BrowserRouter as Router, Route,} from "react-router-dom";
import LoginPage from '../Pages/Login'
import SignUp from '../Pages/SignUp/signUp'
import {Route,Routes} from 'react-router-dom'

export default function Routerss() {
  return (
    <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
    </Routes>
  );
}
