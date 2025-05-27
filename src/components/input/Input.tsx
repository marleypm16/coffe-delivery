import { ChangeEvent } from "react";
import { InputS } from "./style";

interface InputProps {
    type: string;
    placeHolder: string;
    width?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
    value?: string;
}

function Input( {type, value,placeHolder,width,onChange,maxLength}: InputProps) {
  return <InputS value={value} type={type} maxLength={maxLength} onChange={onChange} placeholder={placeHolder} width={width} />;
}

export default Input;