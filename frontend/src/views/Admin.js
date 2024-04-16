// import { useState, useEffect } from 'react';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Admin.css';

function Admin() {

    /**
    const [Calc, setCalc] = useState([]);
    const [CalcTitle, setCalcTitle] = useState('');

    useEffect(() => {
        const api = 'http://127.0.0.1:9001'

        fetch(api)
            .then((result) => result.json())
            .then((result) => {
                setCalc(result.data)
            })
    }, []);
    **/

    return (
        <>
            <Header />
            <div className='Admin'>
                <div className='content'>
                    <p>Создать калькулятор:</p>
                    <input id="formula" type="text" placeholder="Введите формулу"></input>
                    <input id="name" type="text" placeholder="Введите название калькулятора"></input>
                    <button id="create">Создать</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

// const formula = 'fffff';
// const name = document.getElementById('name');

export default Admin;