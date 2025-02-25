import example from '../../../assets/Type=Café Gelado.png';
import QuantityButton from '../../quantityButton/QuantityButton';
import Input from '../../input/Input';
import MapPin from '../../../assets/icons/Type=map-pin-line-regular.svg'
import Money from '../../../assets/icons/Type=currenc-dollar-regular.svg'
import {  Container,Card,Header,InputGroup,Subtitle, FormS, LocalizationAndPaymentSection, OrderSection, PaymentMethod, CartItem } from './styles';
import CardI from '../../../assets/icons/Type=credit-card-regular.svg'
import Cash from '../../../assets/icons/Type=money-regular.svg'

function CheckoutForm(){
    return (
        <div>
            <h2 >Complete seu pedido</h2>
            <FormS>
                <LocalizationAndPaymentSection>
                <Container>
                        <Card>
                            <Header>
                            <img src={MapPin} alt="" />
                            <div>
                                <h3 style={{ fontSize: "1rem", fontWeight: "600",margin:0 }}>Endereço de Entrega</h3>
                                <Subtitle>Informe o endereço onde deseja receber seu pedido</Subtitle>
                            </div>
                            </Header>
                            <Input type='text' placeHolder="CEP" width="33%" />
                            <Input type='text' placeHolder="Rua" width="100%" />
                            <InputGroup>
                            <Input type='text' placeHolder="Número" width="33%" />
                            <Input type='text' placeHolder="Complemento (Opcional)" width="70%" />
                            </InputGroup>
                            <InputGroup>
                            <Input type='text' placeHolder="Bairro" width="33%" />
                            <Input type='text' placeHolder="Cidade" width="50%" />
                            <Input type='text' placeHolder="UF" width="16%" />
                            </InputGroup>
                        </Card>
                    </Container>
                    <Container>
                        <Card>
                            <Header>  
                                <img src={Money} alt="" />  
                            
                                <div>
                                <h3 style={{margin:0}} >Pagamento</h3>
                                <Subtitle>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Subtitle>
                            </div>
                            </Header>
                            <div style={{display: "flex", justifyContent: "space-around"}}>
                                <PaymentMethod>
                                    <img src={CardI} alt="" />
                                    Cartão de Crédito
                                    </PaymentMethod>
                                <PaymentMethod>
                                    <img src={CardI} alt="" />
                                    Cartão de Débito</PaymentMethod>
                                <PaymentMethod>
                                    <img src={Cash} alt="" />
                                    Dinheiro</PaymentMethod>
                            </div>
                           
                        </Card>
                    </Container>
                    
                </LocalizationAndPaymentSection>
                <OrderSection>
                    <h1>Cafés Selecionados</h1>

                    <Container>
                        <CartItem>
                            <div style={{display: "flex",gap: "16px",alignItems: "center"}} >
                                <img src={example} alt="Café de exemplo" />
                                <div >
                                    <h2>Expresso Tradicional</h2>
                                    <div style={{display: "flex",gap: "16px",alignItems: "center"}}>
                                        <QuantityButton />
                                        <button>Remove</button>
                                    </div>
                                </div>
                            </div>
                           
                           
                            <span>R$ 9.99</span>
                        </CartItem>
                        <div style={{width:"100%",backgroundColor:"lightgrey",height:"1px"}}></div>

                        <div>
                            <p>Total de itens R$29,9</p>
                            <p>Total de entrega R$3.5</p>
                            <h3>TOTAL - R$34</h3>
                        </div>
                        <button type="submit">Confirmar Pedido</button>
                    </Container>
                    

                </OrderSection>
            </FormS>
        </div>
    );
}

export default CheckoutForm;