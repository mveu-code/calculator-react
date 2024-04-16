import React from "react";
import './CalculatorItem.css'

function CalculatorItem({nameCalc}) {
    return(
        <div className="CalculatorItem">
            <p>{nameCalc}</p>
            <button>Перейти к калькулятору</button>
        </div>
    )
}

export default CalculatorItem