import React from "react"

const InfoCard = ({
    imgPath,
    title,
    value,
    onChange
}) => {
    return (
        <div className="border border-gray-900 w-2/12">
            <div className="bg-gray-500 bg-opacity-30">
                <img src="../../../public/fixed-asset@2x.png"/>
            </div>
            <div className="flex bg-gray-900 bg-opacity-80 text-white p-2">
                <p className="w-1/2 text-center">Income</p>
                <input type="text" className="w-1/2 rounded"/>
            </div>
        </div>
    )
};

export default InfoCard;
