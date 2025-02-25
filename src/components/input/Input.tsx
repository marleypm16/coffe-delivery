import { InputS } from "./style";

interface InputProps {
    type: string;
    placeHolder: string;
    width?: string;
}

function Input( {type, placeHolder,width}: InputProps) {
  return <InputS type={type} placeholder={placeHolder} width={width} />;
}

export default Input;