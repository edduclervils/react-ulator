import React, { useState } from "react"
import { ShowScreen } from "./screen";

type Calculations = {
    currentNum: string,
    fullOp: string,
    operator: string   
}


export function CalcHistory(calcSolution: Calculations){

    const [histVal,setHistVal] = useState("");
    const[history,listHistory] = useState<string[]>([]);

    function addHistory(){
        setHistVal(calcSolution.fullOp);
        const historyClone = [...history];
        historyClone.push(histVal);
        listHistory(historyClone);
    }

    return <>
        <h2>Calculation History</h2>
        {addHistory};

        <ul>
            {history.map(h => <li>{h}</li>)}
        </ul>
    </>
}