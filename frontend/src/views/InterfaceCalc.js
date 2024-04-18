import Header from "../components/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import './InterfaceCalc.css'
import { parse } from 'mathjs'

import React from "react";
import { useParams } from "react-router-dom";

function InterfaceCalc() {
  const { id } = useParams()
  const [calc, setCalc] = useState({});

  useEffect(() => {
    const api = `http://127.0.0.1:9001/calculator/get/one/` + id;

    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        // console.debug(result)
        setCalc(result.data)
      });
  }, [id]);

  let expression

  if (Object.hasOwn(calc, 'formula')) {
    expression = parse(calc.formula);
    console.debug(expression)
  }

  return (
    <>
      <Header />
      <div className="InterfaceCalc">
        <p>{calc.nameCalc}</p>
        <p>Формула: {calc.formula}</p>
        {calc.numberFields?.map((item) => (
          <input id={item.field} type="number" placeholder={item.fieldName} key={item.field}/>
        ))}
        <button id="result">Вычислить</button>
      </div>
      <Footer />
    </>
  );
}

export default InterfaceCalc;
