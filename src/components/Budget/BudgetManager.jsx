import React from "react"

const BudgetManager = ({
    percentage,
    title,
    color,
    value,
    onClick
}) => {
    return (
        <div className="flex items-center mb-3">
            <p className="mr-2">{parseFloat(percentage).toFixed(1)}%</p>
            <div style={{backgroundColor: color}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <p className="mx-4">{title}</p>
            <button className="bg-blue-300 rounded-full w-6 h-5 pb-6 mr-5" onClick={onClick}>+</button>
            <p>{parseFloat(value).toFixed(1)}$</p>
        </div>
    )
};

export default BudgetManager;
