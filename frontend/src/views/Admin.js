import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Admin.css';


function Admin() {
  return (
    <div className='Admin'>
        <Header/>
        <div className='content'>
            <h1>Страница администратора</h1>
            <input id="formula" type="number" placeholder="Введите формулу"></input>
            <input id="name" type="text" placeholder="Введите название калькулятора"></input>
            <button id="create">Создать</button>
        </div>
        <Footer/>
    </div>
  );
}

const formula = 'fffff';
const name = document.getElementById('name');

export default Admin;