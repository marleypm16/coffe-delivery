import { Quantity } from "./styles";
import minus from '../../assets/icons/Type=minus-bold.svg'
import plus from '../../assets/icons/Type=plus-bold.svg'
function QuantityButton() {
  return (
    <Quantity>
        <button><img src={minus} alt="Diminuir 1" /></button>
        <span>1</span>
        <button><img src={plus} alt="Aumentar 1" /></button>
    </Quantity>
  );
}

export default QuantityButton;