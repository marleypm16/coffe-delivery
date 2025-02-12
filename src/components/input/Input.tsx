import { InputS } from "./style";

interface InputProps {
    type: string;
    placeHolder: string;
}

function Input( {type, placeHolder}: InputProps) {
  return <InputS type={type} placeholder={placeHolder} />;
}

export default Input;