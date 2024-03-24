import React, {useState, useEffect} from "react"; 
import { useSelector } from "react-redux";
import '../style/MustSignUp.scss'
import { Link } from "react-router-dom";
import Greeting from "./Greeting";

const MustSignUp = () => {
  const [flag, setFlag] = useState(false)
  const username = useSelector((state) => state.logPass.username)
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
  <div className="must-sign-up">
    <h1>
        <span>😔</span>
        <br />
        User is not defined.
      </h1>
      <p>
      please sign up to use all the functions of our portal.
      </p>
      <Link to={'/register'} >
      <button>Sign up</button>
      </Link>
  </div>
  );
};

export default MustSignUp;
