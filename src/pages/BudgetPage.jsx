import React, { useEffect, useState } from "react"
import { useLocation } from "react-router";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import BudgetManager from "../components/Budget/BudgetManager";
import axios from "axios";
import {UseBudget} from "../hooks/Budget/useBudget";

const BudgetPage = () => {
    const {state} = useLocation();
    const { income, goal, borough, parking } = state; 
    const { inflation, getInflation, getNbMoisRestant} = UseBudget();
    
    ChartJS.register(ArcElement, Tooltip, Legend);
    const [needs, setNeeds] = useState(50);
    const [wants, setWants] = useState(30);
    const [savings, setSavings] = useState(20);
    const [moisRestant, setMoisRestant] = useState(0);

    useEffect(() => {
        getInflation();
    }, []);

    useEffect(() => {
        console.log('inflation');
        setMoisRestant(getNbMoisRestant(goal, income * (savings / 100)));
    }, [needs, wants, savings, inflation]);

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
                <b className="text-6xl">Yout most optimal budget</b>
                <img src="../../public/stats.png" className="w-2/12"/>
            </div>
            <div className="flex items-center justify-end h-2/12 w-2/12 text-white">
                <div className="mr-20">
                    <BudgetManager 
                        percentage={(needs / (needs + savings + wants)) * 100}
                        color='rgba(255, 99, 132)' 
                        title='Needs' 
                        value={income * (needs / 100)}
                        onClick={() => {
                            setNeeds(needs + 1);
                            setWants(wants - 1);
                        }}/>
                    <BudgetManager 
                        percentage={(savings / (needs + savings + wants)) * 100}
                        color='rgba(54, 162, 235)' 
                        title='Savings' 
                        value={income * (savings / 100)}
                        onClick={() => {
                            setSavings(savings + 1);
                            setWants(wants - 1);
                        }}/>
                    <BudgetManager 
                        percentage={(wants / (needs + savings + wants)) * 100}
                        color='rgba(255, 206, 86)' 
                        title='Wants' 
                        value={income * (wants / 100)}
                        onClick={() => {
                            setWants(wants + 1);
                            setSavings(savings - 1);
                        }}/>
                </div>
                <Doughnut
                    data={{
                        datasets: [
                            {
                                data: [needs, savings, wants],
                                backgroundColor: [
                                    'rgba(255, 99, 132)',
                                    'rgba(54, 162, 235)',
                                    'rgba(255, 206, 86)',
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                ],

                            },
                        ],
                    }}
                />
            </div>
            <div className="flex justify-center items-center">
                <img src="../../public/money_limit.png" className="w-2/12"/>
                <p className="text-white text-2xl w-5/12">Based on the current monthly inflation rate of 
                    <span className="font-bold text-red-300"> {inflation}</span>, 
                    you should attain your financial goal (
                    <span className="font-bold text-green-400">{goal}$</span>) in 
                    <span className="font-bold text-orange-400"> {moisRestant}</span> months.</p>
            </div>
        </div>
    )
};

export default BudgetPage;
