import React, { useEffect, useState } from "react";
import "../style/Login.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserName } from "../redux/slices/logPassSlice";
import axios from "axios";
import Greeting from "./Greeting";
import HallSelectModal from "./HallSelectModal";

const Login = (newScroll) => {
  const username = useSelector((state) => state.logPass.username);
  const [flag, setFlag] = useState(false)
  const [password, setPassword] = useState("");
  const [currentUsername, setCurrentUsername] = useState([]);
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(false);
  const [hallModalopen, setHallModalOpen] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Очистка слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = scroll;

  newScroll.onDataFromChild(data);

  const apiUrl = "https://65d2610a987977636bfc4941.mockapi.io/users";

  const getUsers = () => {
    setTimeout(() =>{

      axios.get(apiUrl).then((response) => {
        setCurrentUsername(response.data);
      });
    }, 5000)
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const usernameJson = JSON.stringify(username);
    localStorage.setItem("user", usernameJson);
  }, [username]);

  const redBorder = () => {
    document.querySelectorAll("input").forEach((i) => {
      if (!i.value) {
        i.classList.add("redborder");
      } else {
        i.classList.remove("redborder");
        
        notDefined()
      }
    });
  };

  const closeModal =() => {
    dispatch(setUserName(''))
    setPassword('')
    setHallModalOpen(false)
  }

  const notDefined = () => {
    if (username.length > 2 && password.length > 2) {
      setHallModalOpen(true)
    }
  }

  const handleUsername = (event) => {
    // username = event.target.value;
    dispatch(setUserName(event.target.value));
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };



  function waitFiveSeconds() {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  }

  useEffect(() => {
    waitFiveSeconds();
  }, [username]);
if (flag === false) return <Greeting />;
  return (

    

    <div className="Login">
      <HallSelectModal isOpen={hallModalopen}>
        <h1>{username.toUpperCase()} is not defined. Please check username and password</h1>
        <button onClick={()=> closeModal()}>Close</button>
        </HallSelectModal>
      <form action="">
        <label htmlFor="username">Username:</label>
        <input onChange={handleUsername} value={username} type="text" />
        <label htmlFor="password">Password:</label>
        <input onChange={handlePassword} value={password} type="password" />
      </form>
      {currentUsername &&
      currentUsername.some(
        (i) => username === i.login && password === i.pass
      ) ? (
        <Link to={'/'}>
        <button>Sign in</button>
        </Link>
      ) : (
        <button onClick={() => redBorder()}>Sign in</button>
      )}
    </div>
  );
};

export default Login;
