import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../style/Futures.scss";
import Greeting from "./Greeting";

const Futures = (newScroll) => {
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
    <div className="Futures">
      <h1 id="general">General Info</h1>
      <hr />
      <p>
        <p id="gold">Testnet:</p> Most of the endpoints can be used in the testnet platform. The
        REST baseurl for testnet is "https://testnet.financefuture.com" The
        Websocket baseurl for testnet is "wss://fstream.financefuture.com" SDK
        and Code Demonstration Disclaimer: The following SDKs are provided by
        partners and users, and are not officially produced. They are only used
        to help users become familiar with the API endpoint. Please use it with
        caution and expand R&D according to your own situation. finance does not
        make any commitment to the safety and performance of the SDKs, nor will
        be liable for the risks or even losses caused by using the SDKs. Python3
        SDK: To get the provided SDK for finance Futures Connector, please visit
        https://github.com/finance/finance-futures-connector-python, or use the
        command below: pip install finance-futures-connector Java To get the
        provided SDK for finance Futures, please visit
        https://github.com/finance/finance-futures-connector-java, or use the
        command below: git clone
        https://github.com/finance/finance-futures-connector-java.git General
        API Information Some endpoints will require an API Key. Please refer to
        this page The base endpoint is: https://fapi.finance.com All endpoints
        return either a JSON object or array. Data is returned in ascending
        order. Oldest first, newest last. All time and timestamp related fields
        are in milliseconds. All data types adopt definition in JAVA. HTTP
        Return Codes HTTP 4XX return codes are used for for malformed requests;
        the issue is on the sender's side. HTTP 403 return code is used when the
        WAF Limit Web Application Firewall has been violated. HTTP 429 return
        code is used when breaking a request rate limit. HTTP 418 return code is
        used when an IP has been auto-banned for continuing to send requests
        after receiving 429 codes. HTTP 5XX return codes are used for internal
        errors; the issue is on finance's side. If there is an error message
        "Request occur unknown error.", please retry later. HTTP 503 return code
        is used when: If there is an error message "Unknown error, please check
        your request or try again later." returned in the response, the API
        successfully sent the request but not get a response within the timeout
        period. It is important to NOT treat this as a failure operation; the
        execution status is UNKNOWN and could have been a success; If there is
        an error message "Service Unavailable." returned in the response, it
        means this is a failure API operation and the service might be
        unavailable at the moment, you need to retry later. If there is an error
        message "Internal error; unable to process your request. Please try
        again." returned in the response, it means this is a failure API
        operation and you can resend your request if you need. If there is an
        error message "Server is currently overloaded with other requests.
        Please try again in a few minutes." returned in the response, it means
        this is a failure API operation and you can resend your request if you
        need. Error Codes and Messages Any endpoint can return an ERROR The
        error payload is as follows: Specific error codes and messages defined
        in Error Codes. General Information on Endpoints For GET endpoints,
        parameters must be sent as a query string. For POST, PUT, and DELETE
        endpoints, the parameters may be sent as a query string or in the
        request body with content type application/x-www-form-urlencoded. You
        may mix parameters between both the query string and request body if you
        wish to do so. Parameters may be sent in any order. If a parameter sent
        in both the query string and request body, the query string parameter
        will be used.
      </p>
      <hr />
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

export default Futures;
