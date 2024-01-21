import { useState } from "react";
import InfoCard from "../components/InfoPage/InfoCard.jsx";

const InfoPage = () => {
    const [income, setIncome] = useState(0);
    const [goal, setGoal] = useState(0);
    const [borough, setBorough] = useState('');
    const [parking, setParking] = useState(false);

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
                <b className="text-6xl">Let's get to know you more !</b>
                <img src="../../public/magnifiers-card@2x.png" className="w-1/12"/>
            </div>
            <div className="flex mx-72">
                <div className="flex flex-col">
                    <div className="flex mb-12">
                        <InfoCard 
                        
                            imgPath='../../public/magnifiers-card@2x.png' 
                            title='Income'
                            value={income} 
                            onChange={(event) => console.log(event.value)}/>
                        <InfoCard imgPath='../../public/magnifiers-card@2x.png' title='Financial Goal'/>
                    </div>
                    <div className="flex">
                        <InfoCard imgPath='../../public/magnifiers-card@2x.png' title='Borough'/>
                        <InfoCard imgPath='../../public/magnifiers-card@2x.png' title='Outside Parking'/>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="bg-yellow-500 px-5 py-10 text-white text-2xl font-bold rounded-3xl">
                        COMPUTE
                    </button>
                </div>
            </div>
        </div>
    )
};

export default InfoPage;
