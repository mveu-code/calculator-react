import { Route, Routes, Link } from "react-router-dom";
import "./Main.css";

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
      <div className="Main">
        <Header />
        <div className="content">
          <p className="link1">{CalcObject.name}</p>

          <a href="/Calc" className="btn">
            Пeрейти
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
