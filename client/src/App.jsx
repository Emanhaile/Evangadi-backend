import React, { useContext, useEffect } from "react";
import "./index.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Signup/Register"
import Login from "./Components/Signup/Login";
import Question from "./Components/pages/Question";
import Answer from "./Components/pages/Answer";
import Home from "./Components/Home/Home";
import axios from "./axiosConfig";
import { UserContext } from "./Components/ContextAPI/Context";
import Notfound from "./Components/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  useEffect(() => {
    checkUserLoggedIn();
  }, []);
  const checkUserLoggedIn = async () => {
    try {
      let token = localStorage.getItem("token");
      if (token === null) {
        localStorage.setItem("token", "");
        token = "";
      } else {
        const { data } = await axios.get("/user/check", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(data);

        setUserData(data);
        console.log(setUserData);
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/question/" element={<Question />} />
        <Route path="/answer/" element={<Answer />} />

        {/* <Route path='question/getanswer/:questionId' element={<Answer/>} /> */}
        <Route path="answer/:id" element={<Answer />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
