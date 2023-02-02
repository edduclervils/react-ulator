
import { ShowScreen } from "./screen";

type Calculations = {
    currentNum: string,
    fullOp: string,
    operator: string,
    result: string
}

export function Operate(currentCalc: Calculations){
    currentCalc.fullOp+=currentCalc.currentNum+currentCalc.operator;

    return <></>
}