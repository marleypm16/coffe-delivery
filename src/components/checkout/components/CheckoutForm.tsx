import QuantityButton from "../../quantityButton/QuantityButton";
import Input from "../../input/Input";
import MapPin from "../../../assets/icons/Type=map-pin-line-regular.svg";
import Money from "../../../assets/icons/Type=currenc-dollar-regular.svg";
import {
  Container,
  Card,
  Header,
  InputGroup,
  Subtitle,
  FormS,
  LocalizationAndPaymentSection,
  OrderSection,
  PaymentMethod,
  CartItem,
  RemoveButton,
  Item,
  Prices,
  CheckoutButton,
} from "./styles";
import CardI from "../../../assets/icons/Type=credit-card-regular.svg";
import Cash from "../../../assets/icons/Type=money-regular.svg";
import Trash from "../../../assets/icons/Type=trash-regular.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCart } from "../../../context/cartContext";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const [paymentMethodSelected, setPaymentMethodSelected] = useState<string | null>(null);
  const [endereco, setEndereco] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [uf, setUf] = useState<string>("");
  const navigation = useNavigate();
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePaymentMethod = (method: string) => {
    setPaymentMethodSelected(method);
  };

  const handleCheckout = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(
      { paymentMethod: paymentMethodSelected, 
        endereco: endereco, 
        numero: numero, 
        complemento: complemento, 
        bairro: bairro, 
        cidade: cidade, 
        uf: uf,
      }
    ));
    cart.splice(0, cart.length);
    navigation("/order");
  };

  const handleCepInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setCep(value.slice(0, 8));

  }

  return (
    <div>
      <h2>Complete seu pedido</h2>
      <FormS onSubmit={handleCheckout}>
        {/* Seção de Endereço */}
        <LocalizationAndPaymentSection>
          <Container>
            <Card>
              <Header>
                <img src={MapPin} alt="" />
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: "600", margin: 0 }}>Endereço de Entrega</h3>
                  <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
                </div>
              </Header>
              <Input type="text" value={cep} maxLength={8} onChange={handleCepInput}  placeHolder="CEP" width="33%" />
              <Input type="text"  onChange={(e) => setEndereco(e.target.value)} placeHolder="Rua" width="100%" />
              <InputGroup>
                <Input type="text" onChange={(e)=> setNumero(e.target.value)} placeHolder="Número" width="33%" />
                <Input type="text"onChange={(e) => setComplemento(e.target.value)} placeHolder="Complemento (Opcional)" width="70%" />
              </InputGroup>
              <InputGroup>
                <Input type="text" onChange={(e)=> setBairro(e.target.value)} placeHolder="Bairro" width="33%" />
                <Input type="text" onChange={(e)=> setCidade(e.target.value)} placeHolder="Cidade" width="50%" />
                <Input type="text" placeHolder="UF" onChange={(e) => setUf(e.target.value)} width="16%" />
              </InputGroup>
            </Card>
          </Container>

          <Container>
            <Card>
              <Header>
                <img src={Money} alt="" />
                <div>
                  <h3 style={{ margin: 0 }}>Pagamento</h3>
                  <Subtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Subtitle>
                </div>
              </Header>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <PaymentMethod type="button" selected={paymentMethodSelected === "Cartão de Crédito"} onClick={() => handlePaymentMethod("Cartão de Crédito")}>
                  <img src={CardI} alt="" />
                  Cartão de Crédito
                </PaymentMethod>
                <PaymentMethod type="button" selected={paymentMethodSelected === "Cartão de Débito"} onClick={() => handlePaymentMethod("Cartão de Débito")}>
                  <img src={CardI} alt="" />
                  Cartão de Débito
                </PaymentMethod>
                <PaymentMethod type="button" selected={paymentMethodSelected === "Dinheiro"} onClick={() => handlePaymentMethod("Dinheiro")}>
                  <img src={Cash} alt="" />
                  Dinheiro
                </PaymentMethod>
              </div>
            </Card>
          </Container>
        </LocalizationAndPaymentSection>

        {/* Seção de Itens do Carrinho */}
        <OrderSection>
          <h1>Cafés Selecionados</h1>
          <Container>
            {cart.length > 0 ? (
              cart.map((product) => (
                <>
                <CartItem key={product.id}>
                  <Item>
                    <img style={{ width: "64px", height: "64px" }} src={product.url} alt="Café de exemplo" />
                    <div>
                      <h2>{product.title}</h2>
                      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <QuantityButton
                          quantity={product.quantity}
                          decreaseQuantityProduct={() => decreaseQuantity(product.id)}
                          increaseQuantityProduct={() => increaseQuantity(product.id)}
                        />
                        <RemoveButton onClick={() => removeItem(product.id)}>
                          <img src={Trash} alt="" />
                          Remover
                        </RemoveButton>
                      </div>
                    </div>
                    <span>R${product.price.toFixed(2)}</span>
                  </Item>
                </CartItem>
                <div style={{ width: "100%", backgroundColor: "lightgrey", height: "1px" }}></div>

               
               </>
              ))
            ) : (
              <h2>Nenhum item no carrinho</h2>
            )}

            <Prices>
                 <p>
                   Total de itens <span>R$ {totalItems.toFixed(2)}</span>
                 </p>
                 <p>
                   Entrega <span>R$ 3,90</span>
                 </p>
                 <strong>
                   Total <span>R$ {(totalItems + 3.9).toFixed(2)}</span>
                 </strong>
               </Prices>
   
               <CheckoutButton type="submit">Confirmar Pedido</CheckoutButton>
          </Container>
        </OrderSection>
      </FormS>
    </div>
  );
}

export default CheckoutForm;
