import React from "react"

const InfoCard = ({
    imgPath,
    title,
    value,
    onChange
}) => {
    return (
        <div className="border border-gray-900 w-5/12 mr-36">
            <div className="bg-gray-500 bg-opacity-30">
                <img src={imgPath}/>
            </div>
            <div className="flex bg-gray-900 bg-opacity-80 p-2">
                <p className="w-2/3 text-center text-white">{title}</p>
                <input 
                    type="number" 
                    className="w-1/2 rounded" 
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
};

export default InfoCard;
