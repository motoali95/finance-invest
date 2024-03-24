import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Greeting from "./Greeting";


import "../style/Markets.scss";
import bitcoin from "../img/bitcoin.png";
import ethereum from "../img/ethereum.png";
import usdt from "../img/usdt.png";
import bnb from "../img/rnb.png";
import solana from "../img/solana 1.png";
import ripple from "../img/ripple.png";
import usdc from "../img/usdc.png";
import ada from "../img/ada.png";
import avax from "../img/avax.png";
import doge from "../img/doge.png";
import trx from "../img/trx.png";
import link from "../img/link.png";
import dot from "../img/dot.png";
import matik from "../img/matik.png";
import wbtc from "../img/wbtc.png";
import icp from "../img/acp.png";
import shib from "../img/shib.png";
import dai from "../img/dai.png";
import bch from "../img/bch.png";
import ltc from "../img/ltc.png";
import strk from "../img/strk.png";
import TimerRem from "./TimerRem";

const Markets = (newScroll) => {
  const [scroll, setScroll] = useState(false);
  const [a, setA] = useState(43512.99);
  const [b, setB] = useState(2340.59);
  const [c, setC] = useState(0.99936411);
  const [d, setD] = useState(353.3);
  const [e, setE] = useState(108.67);
  const [f, setF] = useState(0.5618);
  const [g, setG] = useState(1.0);
  const [h, setH] = useState(0.616);
  const [i, setI] = useState(38.18);
  const [j, setJ] = useState(0.1856);
  const [k, setK] = useState(0.13661);
  const [l, setL] = useState(19.235);
  const [m, setM] = useState(7.63);
  const [n, setN] = useState(0.96458);
  const [o, setO] = useState(51638.89);
  const [p, setP] = useState(13.698);
  const [q, setQ] = useState(0.10000968);
  const [r, setR] = useState(0.10001);
  const [s, setS] = useState(266.2);
  const [t, setT] = useState(69.989);
  const [flag, setFlag] = React.useState(false);
  const username = useSelector((state)=>state.logPass.username)
  function waitFiveSeconds() {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  }

  useEffect(() => {
    waitFiveSeconds();
  }, [username]);

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
      setK((prevK) => getRandomValue(prevK));
      setL((prevL) => getRandomValue(prevL));
      setM((prevM) => getRandomValue(prevM));
      setN((prevN) => getRandomValue(prevN));
      setO((prevO) => getRandomValue(prevO));
      setP((prevP) => getRandomValue(prevP));
      setQ((prevQ) => getRandomValue(prevQ));
      setR((prevR) => getRandomValue(prevR));
      setS((prevS) => getRandomValue(prevS));
      setT((prevT) => getRandomValue(prevT));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const getRandomValue = (prevValue) => {
    const randomChange = (Math.random() * 2 - 1) * 0.01;
    return parseFloat((prevValue + randomChange).toFixed(2));
  };

  const coinIcons = [
    bitcoin,
    ethereum,
    usdt,
    bnb,
    solana,
    ripple,
    usdc,
    ada,
    avax,
    doge,
    trx,
    link,
    dot,
    matik,
    wbtc,
    icp,
    shib,
    dai,
    bch,
    ltc,
  ];

  const coinNames = [
    "BTC",
    "ETH",
    "USDT",
    "BNB",
    "SOL",
    "XRP",
    "USDC",
    "ADA",
    "AVAX",
    "DOGE",
    "TRX",
    "LINK",
    "DOT",
    "MATIC",
    "WBTC",
    "ICP",
    "SHIB",
    "DAI",
    "BCH",
    "LTC",
  ];

  const coinCost = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t];

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
    <div className="Markets">
      <h1 id="market">Markets Overview</h1>
      <hr className="hr" />
      <div className="remain">
        <div className="remain__icon">
          <div>
            <img src={strk} alt="" />
            <h1>STRK</h1>
            <p>Starknet Token</p>
          </div>
          <a target="_blank" href="https://www.starknet.io/en">
            Detail
          </a>
        </div>
        <div className="remain__timer">
          <div className="remaining">
            <p>Will be open for trading in</p>
          </div>
          <div className="timer">
            <TimerRem />
          </div>
        </div>
      </div>
      <div className="coins__box">
        <div className="coin__icons">
          <ul>
            {coinIcons.map((icon, index) => {
              return (
                <Link to={"/buy-crypto"}>
                  <li ey={index}>
                    <img src={icon} alt="" />
                  </li>
                </Link>
              );
            })}
          </ul>

          <ul>
            {coinNames.map((name, index) => {
              return (
                <Link to={"/buy-crypto"}>
                  <li key={index}>{name}</li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="coin__cost">
          <ul>
            {coinCost.map((cost, index) => {
              return (
                <Link to={"/buy-crypto"}>
                  <li className="color" key={index}>${cost}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
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
          financial advice if necessary. It is your responsibility to ascertain
          whether you are permitted to use the services of Binance based on the
          legal requirements in your country of residence. Neither the firm nor
          investments in cryptoassets are regulated by the Financial Conduct
          Authority, nor covered by the Financial Ombudsman Service or subject
          to protection under the Financial Services Compensation Scheme. The
          information on this site is not directed at residents of the United
          States, Canada, Singapore, Japan, Korea, Australia, and New Zealand or
          any particular country or jurisdiction where such distribution or use
          would be contrary to local law or regulation. Binance© 2024 <br />{" "}
          <br /> Cookie Preferences
        </p>
      </div>
    </div>
  );
};

export default Markets;
