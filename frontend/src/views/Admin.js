import { useState, useEffect } from 'react';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Admin.css';



function Admin({ setModalBox, setMessage }) {
    function AddCalc() {
      const name = document.getElementById('name');
      const formula = document.getElementById('formula');
      

      const data = {
        name: name,
        formula: formula
      }
  
      const api = 'http://127.0.0.1:9001/admin/add/calculator'
      
      fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => result.json())

    }


  

       
      return (
          <>
              <Header />
              <div className='Admin'>
                  <div className='content'>
                      <p>Создать калькулятор:</p>
                      <input id="formula" type="text"placeholder="Введите формулу"></input>
                      <input id="name" type="text" placeholder="Введите название калькулятора"></input>
                      <button id="create" onClick={() => AddCalc()}>Создать</button>
                  </div>
              </div>
              <Footer />
          </>
      );
}


export default Admin;