import "./App.css";
// asでRouterにrename
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  // ログインしているかをstateで管理
  const [inAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
