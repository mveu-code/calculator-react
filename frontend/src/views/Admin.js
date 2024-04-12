import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Admin.css';

function Admin() {
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

const formula = 'fffff';
const name = document.getElementById('name');

export default Admin;