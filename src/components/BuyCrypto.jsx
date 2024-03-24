import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../style/BuyCrypto.scss";
import Greeting from "./Greeting";
import axios from "axios";

const BuyCrypto = (newScroll) => {
  const [scroll, setScroll] = useState(false);
  const [spendValue, setSpendValue] = useState(null);
  const [spendCurrency, setSpendCurrency] = useState("$ USD");
  const [flag, setFlag] = useState(false);
  const [userData, setUserData] = useState([]);
  const username = useSelector((state) => state.logPass.username);

  const getData = () => {
    axios
      .get("https://65d2610a987977636bfc4941.mockapi.io/users")
      .then((res) => {
        setUserData(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  let a = 0;

  if (spendCurrency === "$ USD") {
    a = spendValue * 1.04;
  } else if (spendCurrency === "₼ AZN") {
    a = spendValue * 0.59;
  } else if (spendCurrency === "£ GBP") {
    a = spendValue * 1.26;
  } else if (spendCurrency === "€ EUR") {
    a = spendValue * 1.08;
  } else if (spendCurrency === "₽ RUB") {
    a = spendValue * 0.011;
  }

  // console.log(userData);
  // console.log(username);
  


  const handleUpdateObject = () => {
    userData.some((i) => {
      if (i.login === username) {
        const url = "https://65d2610a987977636bfc4941.mockapi.io/users";
        const objectIdToUpdate = i.id; 
        const newData = { balance: i.balance + a }; 
        // console.log(typeof(i.balance));
        // console.log(i.balance);

        axios
          .put(`${url}/${objectIdToUpdate}`, newData)
          .then((response) => {
            console.log("Обновленный объект:", response.data);
          })
          .catch((error) => {
            console.error("Ошибка при обновлении объекта:", error);
          });

        return true;
      }

      return false;
    });
    goToPayPage()
  };

  const goToPayPage = () => {
    setTimeout(() => {
      window.location.href = 'payment-site.com';
    }, 1000);
  }

  function waitFiveSeconds() {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  }

  useEffect(() => {
    waitFiveSeconds();
  }, [username]);

  const currency = ["$ USD", "£ GBP", "€ EUR", "₽ RUB", "₼ AZN"];

  const handleSpendValue = (event) => {
    setSpendValue(event.target.value);
  };
  const handleSpendCurrency = (event) => {
    setSpendCurrency(event.target.value);
  };

  const click = () => {
    alert("minimum purchase amount 59 USDT");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScroll(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = scroll;

  newScroll.onDataFromChild(data);

  if (flag === false) return <Greeting />;
  return (
    <div className="BuyCrypto">
      <h1 id="buy-crypto-title">Buy Crypto</h1>
      <div className="converter__box">
        <h3>Top up balance with cryptocurrencies</h3>
        <div className="amount">
          <div className="amount__amount">
            <p>you spend:</p>
            <input
              onChange={handleSpendValue}
              value={spendValue}
              placeholder="min 57$ - max 15000$"
              type="tel"
            />
          </div>
          <div className="amount__currency">
            <p>currency:</p>
            <select
              onChange={handleSpendCurrency}
              value={spendCurrency}
              name="money"
              id=""
            >
              {currency.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div id="get" className="amount">
          <div className="amount__amount">
            <p>you get:</p>
            <p className="get__tether">
              {/* {(() => {
                if (spendCurrency === "$ USD") {
                  return <span>{spendValue * 1.04}</span>;
                } else if (spendCurrency === "₼ AZN") {
                  return <span>{spendValue * 0.59}</span>;
                } else if (spendCurrency === "£ GBP") {
                  return <span>{spendValue * 1.26}</span>;
                } else if (spendCurrency === "€ EUR") {
                  return <span>{spendValue * 1.08}</span>;
                } else if (spendCurrency === "₽ RUB") {
                  return <span>{spendValue * 0.011}</span>;
                }else if (spendValue === null) {
                  return <span>{0}</span>;
                }
                
              })()} */}
              {a}
            </p>
          </div>
          <div className="amount__currency">
            <p>currency:</p>
            <select name="money" id="">
              <option value="USD">&#8366; USDT</option>
            </select>
          </div>
        </div>
        {(() => {
          if (spendCurrency === "$ USD" && spendValue >= 57) {
            return (
                <button onClick={() => handleUpdateObject()}>go to pay</button>
            );
          } else if (spendCurrency === "₼ AZN" && spendValue >= 100) {
            return (
                <button onClick={() => handleUpdateObject()}>go to pay</button>
            );
          } else if (spendCurrency === "£ GBP" && spendValue >= 47) {
            return (
                <button onClick={() => handleUpdateObject()}>go to pay</button>
            );
          } else if (spendCurrency === "€ EUR" && spendValue >= 55) {
            return (
                <button onClick={() => handleUpdateObject()}>go to pay</button>
            );
          } else if (spendCurrency === "₽ RUB" && spendValue >= 5370) {
            return (
                <button onClick={() => handleUpdateObject()}>go to pay</button>
            );
          } else {
            return <button onClick={() => click()}>go to pay</button>;
          }
        })()}
      </div>
      <p className="foot__description">
        This site is protected by reCAPTCHA and the Google Privacy Policy and
        Terms of Service apply.
      </p>
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

export default BuyCrypto;
