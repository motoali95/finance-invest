import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../style/Home.scss";
import Timer from "./Timer";

import grafik from "../img/grafik-3.jpg";
import bitcoin from "../img/bitcoin.png";
import ethereum from "../img/ethereum.png";
import bnb from "../img/rnb.png";
import ripple from "../img/ripple.png";
import solana from "../img/solana 1.png";
import { useSelector } from "react-redux";
import Greeting from "./Greeting";

const Home = (newScroll) => {
  const [a, setA] = useState(-5.72);
  const [b, setB] = useState(-3.42);
  const [c, setC] = useState(2.1);
  const [d, setD] = useState(-4.71);
  const [e, setE] = useState(1.63);
  const [f, setF] = useState(43512.99);
  const [g, setG] = useState(2340.59);
  const [h, setH] = useState(304.9);
  const [i, setI] = useState(0.5135);
  const [j, setJ] = useState(101.44);
  const [scroll, setScroll] = useState(false);
  const [flag, setFlag] = React.useState(false);
  const username = useSelector((state)=>state.logPass.username)


  function waitFiveSeconds() {
    setTimeout(() => {
      setFlag(true);
    }, 3000);
  }

  useEffect(()=>{
    waitFiveSeconds()
  },[username])

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setA((prevA) => getRandomValue(prevA));
      setB((prevB) => getRandomValue(prevB));
      setC((prevC) => getRandomValue(prevC));
      setD((prevD) => getRandomValue(prevD));
      setE((prevE) => getRandomValue(prevE));
      setF((prevF) => getRandomValue(prevF));
      setG((prevG) => getRandomValue(prevG));
      setH((prevH) => getRandomValue(prevH));
      setI((prevI) => getRandomValue(prevI));
      setJ((prevJ) => getRandomValue(prevJ));
    }, 500);

    return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
  }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании

  const getRandomValue = (prevValue) => {
    const randomChange = (Math.random() * 2 - 1) * 0.01; // Случайное изменение от -1% до 1%
    return parseFloat((prevValue + randomChange).toFixed(2));
  };

  // const username = useSelector((state) => state.logPass.username);
  if (flag === false) return <Greeting/>


  return (
    <div>
      <div className="section1">
        <div className="description">
          <h1 className="gold">1,875,321</h1>
          <h1 id="large">Users trust us</h1>
          {username !== "" ? (
            <Link to={'/buy-crypto'}>
            <button>Buy crypto</button>
            </Link>
          ) : (
            <Link to={'/register'}>
            <button>Sign up</button>
            </Link>
          )}
        </div>
        <div className="view">
          <div className="graph">
            <img src={grafik} alt="" />
          </div>
          <div className="order">
            <h1 id="halv">
              Bitcoin Halving Countdown
              <br />
              <br />
              <Timer />
            </h1>
            <div className="bitcoin">
              <ul>
                <li>
                  <img src={bitcoin} alt="" />
                </li>
                <li>
                  <h1>BTC</h1>
                </li>
                <li>
                  <p>Bitcoin</p>
                </li>
              </ul>
              <h1>${f}</h1>
              <h1 className={e < 0 ? "red" : "green"}>{e}%</h1>
            </div>
            <div className="ethereum">
              <ul>
                <li>
                  <img src={ethereum} alt="" />
                </li>
                <li>
                  <h1>ETH</h1>
                </li>
                <li>
                  <p>Ethereum</p>
                </li>
              </ul>
              <h1>${g}</h1>
              <h1 className={d < 0 ? "red" : "green"}>{d}%</h1>
            </div>
            <div className="bnb">
              <ul>
                <li>
                  <img src={bnb} alt="" />
                </li>
                <li>
                  <h1>BNB</h1>
                </li>
                <li>
                  <p>BNB</p>
                </li>
              </ul>
              <h1>${h}</h1>
              <h1 className={c < 0 ? "red" : "green"}>{c}%</h1>
            </div>
            <div className="ripple">
              <ul>
                <li>
                  <img src={ripple} alt="" />
                </li>
                <li>
                  <h1>XRP</h1>
                </li>
                <li>
                  <p>Ripple</p>
                </li>
              </ul>
              <h1>${i}</h1>
              <h1 className={b < 0 ? "red" : "green"}>{b}%</h1>
            </div>
            <div className="solana">
              <ul>
                <li>
                  <img src={solana} alt="" />
                </li>
                <li>
                  <h1>SOL</h1>
                </li>
                <li>
                  <p>Solana</p>
                </li>
              </ul>
              <h1>${j}</h1>
              <h1 className={a < 0 ? "red" : "green"}>{a}%</h1>
            </div>
          </div>
        </div>
        {username === "" ? (
          <div className="verified-users">
            <h1>
              Sign up now and get up to <strong>100 USDT</strong> in rewards
            </h1>
            <Link to={'/register'}>
            <button>Sign up now</button>
            </Link>
          </div>
        ) : (
          <div className="verified-users">
            <h1>
              Buy crypto now and get up to <strong>100 USDT</strong> in rewards
            </h1>
            <Link to={'/buy-crypto'}>
            <button>Buy crypto now</button>
            </Link>
          </div>
        )}
        
        <div className="features">
          <div className="features__f">
            <h3>About us</h3>
            <h1>+</h1>
          </div>
          <div className="features__f">
            <h3>Products</h3>
            <h1>+</h1>
          </div>
          <div className="features__f">
            <h3>Business</h3>
            <h1>+</h1>
          </div>
          <div className="features__f">
            <h3>Learn</h3>
            <h1>+</h1>
          </div>
          <div className="features__f">
            <h3>Sevrvice</h3>
            <h1>+</h1>
          </div>
          <div className="features__f">
            <h3>Support</h3>
            <h1>+</h1>
          </div>
          <hr />
        </div>
        <div className="foot">
          <p>
            Nest Services Limited, trading as Binance, is the entity ultimately
            responsible for the Binance Services offered through the Platform.
            Trading cryptocurrencies involves significant risk and can result in
            the loss of your capital. You should not invest more than you can
            afford to lose and you should ensure that you fully understand the
            risks involved. Before trading, please take into consideration your
            level of experience, investment objectives, and seek independent
            financial advice if necessary. It is your responsibility to
            ascertain whether you are permitted to use the services of Binance
            based on the legal requirements in your country of residence.
            Neither the firm nor investments in cryptoassets are regulated by
            the Financial Conduct Authority, nor covered by the Financial
            Ombudsman Service or subject to protection under the Financial
            Services Compensation Scheme. The information on this site is not
            directed at residents of the United States, Canada, Singapore,
            Japan, Korea, Australia, and New Zealand or any particular country
            or jurisdiction where such distribution or use would be contrary to
            local law or regulation. Binance© 2024 <br /> <br /> Cookie
            Preferences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
