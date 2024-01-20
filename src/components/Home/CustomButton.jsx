import React from "react"

const CustomButton = (props) => {
    return (
        <button className="bg-blue-300" onClick={() => alert('Coucou')}>
            Test custom button
        </button>
    )
};

export default CustomButton;
