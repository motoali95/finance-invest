import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import MustSignUp from "./components/MustSignUp";
import Login from "./components/Login";
import Registration from "./components/Registration";
import BuyCrypto from "./components/BuyCrypto";
import TopUpBal from "./components/TopUpBal";
import Markets from "./components/Markets";
import Futures from "./components/Futures";
import Earn from "./components/Earn";
import './style/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/App.scss'
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'




function App() {

  const [scrollData, setScrollData] = React.useState(null);

 const  handleScroll =(data)=>{
    setScrollData(data)
  }

  return (
    <div>
      {/* <Timer/> */}
      <Provider store = {store}>

      <BrowserRouter>
        <Header scroll = {scrollData} />
          
        <Routes>
          <Route path="/" element={<Home onDataFromChild = {handleScroll} />} />
          <Route path="/login" element={<Login onDataFromChild = {handleScroll} />} />
          <Route path="/register" element={<Registration onDataFromChild = {handleScroll} />} />
          <Route path="/registermust" element={<MustSignUp />} />
          <Route path="/buy-crypto" element={<BuyCrypto onDataFromChild = {handleScroll} />} />
          <Route path="/markets" element={<Markets onDataFromChild = {handleScroll} />} />
          <Route path="/top-up-bal" element={<TopUpBal onDataFromChild = {handleScroll} />} />
          <Route path="/futures" element={<Futures onDataFromChild = {handleScroll} />} />
          <Route path="/earn" element={<Earn onDataFromChild = {handleScroll} />} />
        </Routes>
      </BrowserRouter>
      </Provider>
      </div>
  );
}

export default App;
