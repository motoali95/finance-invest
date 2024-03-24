import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/Earn.scss";
import Greeting from "./Greeting";

const Earn = (newScroll) => {
  const [scroll, setScroll] = useState(false);
  const [flag, setFlag] = React.useState(false);
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
    <div className="Earn">
      <h1 id="dual">Dual Investment</h1>
      <hr />
      <p id="gold">Dual Investment</p>
      <p>
        {" "}
        lets you deposit a single cryptocurrency and earn yield based on two
        assets. You can commit your crypto holdings and lock in a savings yield,
        but you will earn even more if the market price of their committed
        holdings increases. Dual Investment provides you with much more control
        over your risks. The return on your savings will depend on how the
        crypto market has moved since the day you invested your crypto into
        Binance Dual Investment. When the product expires, you may choose to
        settle with one of the assets from the two options (such as BTC or
        USDT). It offers non-guaranteed floating earnings, you can obtain the
        highest possible earnings while satisfying your digital asset risk
        management needs. On the expiry date, the final settlement currency is
        determined by comparing the settlement price and the strike price. If
        the market price on your crypto holdings increases and your earnings
        exceed the savings rate, you’ll get the higher amount. If the market
        price on your crypto holdings dips or your earnings is below the savings
        rate, you’ll still get the yield from your savings. The bottom line is
        that your return will always be allocated to your benefit. However,
        please note that your order cannot be redeemed in advance.
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
          Nest Services Limited, trading as finance, is the entity ultimately
          responsible for the finance Services offered through the Platform.
          Trading cryptocurrencies involves significant risk and can result in
          the loss of your capital. You should not invest more than you can
          afford to lose and you should ensure that you fully understand the
          risks involved. Before trading, please take into consideration your
          level of experience, investment objectives, and seek independent
          financial advice if necessary. It is your responsibility to ascertain
          whether you are permitted to use the services of finance based on the
          legal requirements in your country of residence. Neither the firm nor
          investments in cryptoassets are regulated by the Financial Conduct
          Authority, nor covered by the Financial Ombudsman Service or subject
          to protection under the Financial Services Compensation Scheme. The
          information on this site is not directed at residents of the United
          States, Canada, Singapore, Japan, Korea, Australia, and New Zealand or
          any particular country or jurisdiction where such distribution or use
          would be contrary to local law or regulation. finance© 2024 <br />{" "}
          <br /> Cookie Preferences
        </p>
      </div>
    </div>
  );
};

export default Earn;
