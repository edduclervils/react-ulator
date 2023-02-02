import React, { useState } from "react";
import { Operate } from "./operations";


export function ShowScreen(){
    
    const[calculations, setCalc]= useState({
        currentNum: "0",
        fullOp: "",
        operator: "=",
        result: ""
    });

    const[textValue,setTextValue]=useState("");
    const[history,listHistory] = useState<string[]>([]);

    function ClearValues(){
        calculations.currentNum =  "0";
        calculations.fullOp = "";
        calculations.operator = "=";
    }

    function CalcHistory(){ 
        calculations.fullOp+="="+calculations.result;
        const historyClone = [...history];
        historyClone.push(calculations.fullOp);
        listHistory(historyClone);
        ClearValues();
    }

    function handleShowOp(event:React.ChangeEvent<HTMLInputElement>){
        calculations.currentNum = event.target.value;
        setTextValue(event.target.value);

    }

    function clearFields(){
        setTextValue("");
    }

    function handleClick(operator1:string){
        calculations.operator = operator1;
        if(textValue === ""){
            calculations.currentNum = "0";
        }
        if(calculations.operator === "="){
            calculations.fullOp+=calculations.currentNum;
            calculations.result = eval(calculations.fullOp);
            CalcHistory();
        }
        else{
            Operate(calculations);
            calculations.result = calculations.fullOp;
            
        }        
        clearFields();

    }

    return <>
        <div id="screen">{calculations.result}</div>
        <br /><br />
        <input id="input" type="text" placeholder="number" value={textValue} onChange={handleShowOp}/>
        <button id="plus" onClick={()=>handleClick("+")}>+</button>
        <button id="minus" onClick={()=>handleClick("-")}>-</button>
        <button id="times" onClick={()=>handleClick("*")}>x</button>
        <button id="divide" onClick={()=>handleClick("/")}>/</button>
        <button id="equal" onClick={()=>handleClick("=")}>=</button>
        <br /><br /><br />
        <h2>Calculation History</h2>
        <ul>
            {history.map(h => <li key={Math.random()}>{h}</li>)}
        </ul>

    
    </>
}