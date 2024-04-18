import Header from '../components/Header';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import CalculatorItem from "../components/CalculatorItem";

import React from 'react';

function InterfaceCalc() {
    const {id} = useParams();

    const [calc, setCalc] = useState([])

    useEffect(() => {
        const api = (`http://127.0.0.1:9001/calculator/get/all`)

        fetch(api)
            .then((result) => result.json())
            .then((result) => {

                setCalc(result.data)
            })
    }, [])

    return (
        <>
            <Header />
            <div>

                <p>{id}</p>
                
                <input id="x" type="number" placeholder="Введите первое число" min="0"></input>
                <input id="y" type="number" placeholder="Введите второе число" min="0"></input>
                <button id="result">Вычислить</button>
            </div>
            <Footer />
        </>
    );
}

export default InterfaceCalc;