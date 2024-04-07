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
        </div>
        <Footer/>
    </div>
  );
}

export default Admin;