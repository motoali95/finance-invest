import React from "react";
import "../style/Greeting.scss";
import { useSelector } from "react-redux";

const Greeting = () => {
  const username = useSelector((state) => state.logPass.username);

  return (
    <>
      {username ? (
        <div className="preloader">
          <h1>@{username}</h1>
          <span className="loader"></span>
          <h5>security control</h5>
        </div>
      ) : (
        <div className="preloader">
          <span className="loader"></span>
          <h5>security control</h5>
        </div>
      )}
    </>
  );
};

export default Greeting;
