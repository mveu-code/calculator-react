import { Route, Routes, Link } from "react-router-dom";
import "./Main.css";
import Calculator from './Calculator';
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";

const CalcObject = {
  id: 1,
  name: "Калькулятор рассрочки",
};

function Main() {
  return (
    <>
    <Header />
      <div className="Main">
        <div className="content">
          <p className="link1">{CalcObject.name}</p>
          <Link to="/InterfaceCalc" className="btn">Пeрейти</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
