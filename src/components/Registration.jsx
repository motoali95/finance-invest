import React, { useEffect, useState } from "react";
import "../style/Registration.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setName, setSurname, setUsername } from "../redux/slices/userSlice";
import axios from "axios";
import ModalInfo from "./ModalInfo";
import Greeting from "./Greeting";

const Registration = (newScroll) => {
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch();
  const [year, setYear] = useState([]);
  const [day, setDay] = useState([]);
  const [month, setMonth] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [users, setUsers] = useState([]);
  const name = useSelector((state) => state.userInfo.name);
  const surname = useSelector((state) => state.userInfo.surname);
  const username = useSelector((state) => state.userInfo.username);
  const balance = useSelector((state) => state.logPass.balance);
  const [scroll, setScroll] = useState(false);
  const [firstModalopen, setFirstModalOpen] = React.useState(false);


  function waitFiveSeconds() {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  }

  useEffect(() => {
    waitFiveSeconds();
  }, [username]);

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

  const userData = {
    login: username,
    pass: password,
    balance: balance,
  };
  const apiUrl = "https://65d2610a987977636bfc4941.mockapi.io/users";

const getData =() => {
  axios 
  .get(apiUrl)
  .then((res) => {
    setUsers(res.data)
  })
}








useEffect (() =>{
getData()
}, [])
  
console.log(users);

const pushUserData = () => {
  const foundUser = users.find((e) => username === e.login);
  if (foundUser) {
    alert('This username is already taken, please come up with another one.');
    dispatch(setUsername(''))
    return;
  } else {
    axios.post(apiUrl, userData);
    setFirstModalOpen(true);
  }
};



  // useEffect(() => {

  //     const usernameJson = JSON.stringify(username);
  //     localStorage.setItem("user", usernameJson);

  //   }, [username])

  const handleName = (event) => {
    const name = event.target.value;
    dispatch(setName(name));
  };
  const handleSurname = (event) => {
    const surname = event.target.value;
    dispatch(setSurname(surname));
  };
  const handleUsername = (event) => {
    const username = event.target.value;
    dispatch(setUsername(username));
  };
  const handlePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  const handleConfirm = (event) => {
    const confirmPass = event.target.value;
    setConfirmPass(confirmPass);
  };

  const redBorder = () => {
    document.querySelectorAll("input").forEach((i) => {
      if (!i.value) {
        i.classList.add("redborder");
      } else {
        i.classList.remove("redborder");
      }
    });
    if (
      name.length >= 2 &&
      surname.length >= 2 &&
      username.length >= 3 &&
      password.length >= 4
    ) {
      setPassword("");
      setConfirmPass("");
      alert("please check your password confirmation");
    }
  };

  const fetchYears = async () => {
    const years = [];
    const months = [];
    const days = [];
    for (let index = 1; index < 32; index++) {
      days.push(index);
    }
    for (let index = 1; index < 13; index++) {
      months.push(index);
    }
    for (let index = 2007; index > 1930; index--) {
      years.push(index);
    }
    await setDay(days);
    await setMonth(months);
    await setYear(years);
  };

  useEffect(() => {
    fetchYears();
  }, []);

  if (flag === false) return <Greeting />;
  return (
    <div className="registration">
      <ModalInfo isOpen={firstModalopen}>
        <div className="form"></div>
        <Link to={"/"}>
          <h1>
            
        Congraulations! You have successfully registered
          </h1>
          <button>Finish</button>
        </Link>
      </ModalInfo>
      <form action="">
        <label htmlFor="name">Name</label>
        <input onChange={handleName} value={name} type="text" />
        <label htmlFor="surname">Surname</label>
        <input onChange={handleSurname} value={surname} type="text" />
        <label htmlFor="username">Username</label>
        <input onChange={handleUsername} value={username} type="text" />
        <label htmlFor="password">Password</label>
        <input onChange={handlePassword} value={password} type="password" />
        <label htmlFor="password">Confirm password</label>
        <input onChange={handleConfirm} value={confirmPass} type="password" />
        <label id="dob" htmlFor="date">
          Date of birth
        </label>
        <div className="dob">
          <label htmlFor="day">Day</label>
          <select name="day" id="day">
            {day.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
          <label htmlFor="month">Month</label>
          <select name="month" id="month">
            {month.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
          <label htmlFor="year"> Year</label>
          <select name="year" id="year">
            {year.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
        </div>
      </form>
      {name.length >= 2 &&
      surname.length >= 2 &&
      username.length >= 2 &&
      password.length >= 4 &&
      password === confirmPass ? (
        <button onClick={() => pushUserData()}>Confirm</button>
      ) : (
        <button className="second" onClick={() => redBorder()}>
          Confirm
        </button>
      )}
    </div>
  );
};

export default Registration;
