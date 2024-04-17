import Header from '../components/Header';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import CalculatorItem from "../components/CalculatorItem";

import React from 'react';

function InterfaceCalc() {
    const [calc, setCalc] = useState([])

    useEffect(() => {
        const api = 'http://127.0.0.1:9001/calculator/get/all'

        fetch(api)
            .then((result) => result.json())
            .then((result) => {
                // console.debug(result.data)
                setCalc(result.data)
            })
    }, [])

    return (
        <>
            <Header />
            <div>
                <h1>{calc.map((item) => <CalculatorItem nameCalc={item.nameCalc}/>)}</h1>
                <input id="x" type="number" placeholder="Введите первое число" min="0"></input>
                <input id="y" type="number" placeholder="Введите второе число" min="0"></input>
                <button id="result">Вычислить</button>
            </div>
            <Footer />
        </>
    );
}

export default InterfaceCalc;