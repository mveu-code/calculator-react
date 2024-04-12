import Header from '../components/Header';
import Footer from '../components/Footer';

import React from 'react';

function InterfaceCalc() {
    return (
        <>
            <Header />
            <div>
                <h1>Название калькулятора</h1>
                <input id="x" type="number" placeholder="Введите первое число" min="0"></input>
                <input id="y" type="number" placeholder="Введите второе число" min="0"></input>
                <button id="result">Вычислить</button>
            </div>
            <Footer />
        </>
    );
}



export default InterfaceCalc;