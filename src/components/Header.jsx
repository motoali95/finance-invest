import React, { useEffect } from "react";
import logo from "../img/logo-bitok-3.jpg";
import "../style/Header.scss";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserName } from "../redux/slices/logPassSlice";

const Header = ({ scroll }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [balance, setBalance] = React.useState (0)
  const [userData, setUserData] = React.useState([])
  const username = useSelector((state) => state.logPass.username);
  const accNum = "P635755";
  const dispatch = useDispatch()
  const popUp = () => {
    setOpenMenu(!openMenu);
  };

  const getData = () => {
    axios
    .get('https://65d2610a987977636bfc4941.mockapi.io/users')
    .then((res) => {
      setUserData(res.data)
    })
  }
  useEffect(() => {
    getData()
    const user = userData.find((i) => username === i.login);
    if (user) {
      setBalance(user.balance);
    }
  }, [openMenu]);
  

  useEffect(() => {
    scroll > 0 && setOpenMenu(false);
  }, [scroll]);

  



  const menuItems = [
    "Buy Crypto",
    "Markets",
    "Trade",
    "Futures",
    "Earn",
    // "Square",
  ];

  return (
    <div className="header">
      <div className="logo-tel">
        <div>
          <Link onClick={() => setOpenMenu(false)} to={"/"}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Link>
        </div>
        {/* <button>Qeydiyyat</button> */}
        <div onClick={() => popUp()} className="popup">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {/* {openMenu && ( */}
      <CSSTransition
        in={openMenu}
        classNames="alert"
        timeout={300}
        unmountOnExit
      >
        <div id="menu">
          <hr />
          <div className="log-sign">
            {username !== "" ? (
              <div className="log__sign__reg">
                <div className="log__sign__user">
                  <h3>Username:</h3>
                  <h3 className="yellow">{username}</h3>
                </div>
                <div className="log__sign__accnum">
                  <h3>Account number:</h3>
                  <h3 className="yellow">{accNum}</h3>
                </div>
                <div className="log__sign__accnum" id="balance">
                  <h3>Balance:</h3>
                  <h3 className="yellow">{balance} &#36;</h3>
                </div>
                <button onClick={() => dispatch(setUserName(''))}>Log out</button>
              </div>
            ) : (
              <div className="log__sign">
                <Link to={"/login"}>
                  <button onClick={() => setOpenMenu(false)} id="log">
                    Sign in
                  </button>
                </Link>
                <Link to={"/register"}>
                  <button onClick={() => setOpenMenu(false)}>Register</button>
                </Link>
              </div>
            )}
          </div>
          <hr />
          <ul>
            {menuItems.map((e, index) => {
              return (
                <Link onClick={() => setOpenMenu(!openMenu)} to={(() => {
                  if (username !== '' && e === "Buy Crypto") {
                    return '/buy-crypto'
                  } else if (username !== '' && e === "Trade") {
                      return "/top-up-bal";
                    }else if (username !== '' && e === "Markets") {
                      return "/markets";
                    }else if (username !== '' && e === "Futures") {
                      return "/futures";
                    }else if (username !== '' && e === "Earn") {
                      return "/earn";
                    }
                  else {
                    return '/registermust'
                  }
                  // else if (spendCurrency === "₼ AZN") {
                  //   return <span>{spendValue * 0.59}</span>;
                  // } else if (spendCurrency === "£ GBP") {
                  //   return <span>{spendValue * 1.26}</span>;
                  // } else if (spendCurrency === "€ EUR") {
                  //   return <span>{spendValue * 1.08}</span>;
                  // } else if (spendCurrency === "₽ RUB") {
                  //   return <span>{spendValue * 0.011}</span>;
                  // }else if (spendValue === null) {
                  //   return <span>{0}</span>;
                  // }
                })()}>
                  <li key={index}><p>{e}</p> <p>  &#8250;</p></li>
                </Link>
              );
            })}
          </ul>
        </div>
      </CSSTransition>
      {/* )} */}
    </div>
  );
};

export default Header;

// <Link onClick={() => setOpenMenu(!openMenu)} to={username !== '' ? "/":"/registermust"}>