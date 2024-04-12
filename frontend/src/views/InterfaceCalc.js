import Header from '../components/Header';
import Footer from '../components/Footer';


import React, { Component } from 'react';

class InterfaceCalc extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Название калькулятора</h1>
                <input id="x" type="number" placeholder="Введите первое число" min="0"></input>
                <input id="y" type="number" placeholder="Введите второе число" min="0"></input>
                <button id="result">Вычислить</button>
                <Footer />
            </div>
        );
    }
}



export default InterfaceCalc;