import { Quantity } from "./styles";
import minus from '../../assets/icons/Type=minus-bold.svg'
import plus from '../../assets/icons/Type=plus-bold.svg'
interface QuantityButtonProps {
  quantity: number;
  decreaseQuantityProduct: () => void;
  increaseQuantityProduct: () => void;
}
function QuantityButton({quantity,decreaseQuantityProduct,increaseQuantityProduct} : QuantityButtonProps) {

  return (
    <Quantity>
        <button type="button" disabled={quantity<=1} onClick={decreaseQuantityProduct} ><img src={minus} alt="Diminuir 1" /></button>
        <span>{quantity}</span>
        <button type="button" onClick={increaseQuantityProduct}><img src={plus} alt="Aumentar 1" /></button>
    </Quantity>
  );
}

export default QuantityButton;