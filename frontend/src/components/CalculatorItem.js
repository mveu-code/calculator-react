import React from "react";
import './CalculatorItem.css'
import {Routes, Route, Link, useParams} from 'react-router-dom';
import InterfaceCalc from "../views/InterfaceCalc";
import {useEffect, useState} from 'react';

function CalculatorItem({nameCalc}) {
    

    const [calc, setCalc] = useState([])


        useEffect(() => {
            const api = (`http://127.0.0.1:9001/calculator/get/one`)
    
            fetch(api)
                .then((result) => result.json())
                .then((result) => {
    
                    setCalc(result.data)
                })
        }, [])


    return(
        
        <div className="CalculatorItem">
            <p>{nameCalc}</p>
            <p>{console.log(calc)}</p>
            <Link to={`InterfaceCalc`}>Перейти</Link>

        </div>
        //${id}
    )
}

export default CalculatorItem