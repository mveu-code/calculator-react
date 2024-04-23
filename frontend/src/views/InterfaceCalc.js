import Header from "../components/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import './InterfaceCalc.css'

import React from "react";
import { useParams } from "react-router-dom";

function InterfaceCalc() {
  const { id } = useParams()
  const [calc, setCalc] = useState({})
  const [result, setResult] = useState({
    price: 0,
    commonPercent: 0,
    sumPerMonth: 0,
    neededMoney: 0
  })

  useEffect(() => {
    const api = `http://127.0.0.1:9001/calculator/get/one/` + id;

    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        // console.debug(result)
        setCalc(result.data)
      });
  }, [id]);

  const calculate = (event) => {
    const percent = calc.percent
    const time = document.getElementById("time").value
    const sum = document.getElementById("sum").value
    const firstSum = document.getElementById("firstSum").value

    const price = sum - firstSum
    const percentPerMonth = percent / 12 / 100
    const commonPercent = (1 + percentPerMonth) ^ time * 12
    const sumPerMonth = sum * percentPerMonth * commonPercent / (commonPercent - 1)
    const neededMoney = sumPerMonth * 2.5

    setResult({
      price,
      commonPercent,
      sumPerMonth,
      neededMoney
    })
  }

  return (
    <>
      <Header />
      <div className="InterfaceCalc">
        <p>{calc.nameCalc}</p>
        <input id="sum" type="number" placeholder="Сумма" />
        <input id="time" type="number" placeholder="Срок" />
        <input id="firstSum" type="number" placeholder="Первоначальная сумма" />
        <button id="result" onClick={calculate}>Вычислить</button>
        <p>Стоимость кредита: {result.price}</p>
        <p>Общая ставка кредита: {result.commonPercent}</p>
        <p>Ежемесячный платёж: {result.sumPerMonth}</p>
        <p>Необходимый доход: {result.neededMoney}</p>
      </div>
      <Footer />
    </>
  );
}

export default InterfaceCalc;
