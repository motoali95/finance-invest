import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import "../style/TopUpBal.scss";
import Greeting from "./Greeting";

const TopUpBal = (newScroll) => {
  const [scroll, setScroll] = useState(false);
  const [flag, setFlag] = useState(false);
  const username = useSelector((state) => state.logPass.username);

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

  if (flag === false && username !== "") return <Greeting />;
  return (
  <div className="TopUpBal">
    <h1>
        <span>😔</span>
        <br />
        You have zero balance.
      </h1>
      <p>
      please top up your balance to start trading.
      </p>
      <button>Buy crypto</button>
  </div>);
};

export default TopUpBal;
