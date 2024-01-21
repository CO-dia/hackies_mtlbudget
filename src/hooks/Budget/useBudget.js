import axios from "axios";
import React, { useState } from "react"

export function UseBudget() {
    const [inflation, setInflation] = useState('');
    async function getInflation() {
        try {
            await axios.get("http://192.168.2.10:5000/inflation")
                .then((res) => {
                    console.log(res.data);
                    setInflation(res.data); 
                    return res.data;
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    function getNbMoisRestant(objectif, montantInitial) {
        let total = parseInt(montantInitial);
        montantInitial = parseInt(montantInitial);
        let mois = 0;
        let inflationRate = parseFloat(inflation.replace('%', '')) / 100;
        console.log(inflationRate, objectif, montantInitial)
        while (total < objectif) {
            let montantAvecInflation = montantInitial * (1 + inflationRate);
            total += montantAvecInflation;
            mois++;
        }
        return mois;
    }
    
    
    

    return {
        inflation,
        getInflation,
        getNbMoisRestant
    }
}
