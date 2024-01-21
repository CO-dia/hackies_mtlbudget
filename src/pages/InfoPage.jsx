import { useEffect, useState } from "react";
import InfoCard from "../components/InfoPage/InfoCard.jsx";

const InfoPage = () => {
    const [income, setIncome] = useState(0);
    const [goal, setGoal] = useState(0);
    const [borough, setBorough] = useState('');
    const [parking, setParking] = useState(0);

    useEffect(() => {
        console.log(income);
    }, [income]);
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
                <b className="text-6xl">Let's get to know you more !</b>
                <img src="../../public/papers.png" className="w-1/12"/>
            </div>
            <div className="flex mx-72">
                <div className="flex flex-col">
                    <div className="flex mb-12">
                        <InfoCard 
                            imgPath='../../public/parapluie.png' 
                            title='Income'
                            value={income} 
                            onChange={(event) => setIncome(event.target.value)}/>
                        <InfoCard 
                            imgPath='../../public/plante.png' 
                            title='Financial Goal'
                            value={goal}
                            onChange={(event) => setGoal(event.target.value)}/>
                    </div>
                    <div className="flex">
                        <InfoCard 
                            imgPath='../../public/maison.png' 
                            title='Borough'
                            value={borough}
                            onChange={(event) => setBorough(event.target.value)}/>
                        <InfoCard 
                            imgPath='../../public/portefeuille.png' 
                            title='Outside Parking'
                            value={parking}
                            onChange={(event) => setParking(event.target.value)}/>
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
