import example from '../../../assets/Type=Café Gelado.png';
import QuantityButton from '../../quantityButton/QuantityButton';
import pinI from '../../../assets/icons/Type=map-pin-line-regular.svg';
import Input from '../../input/Input';
import { DeliveryInformation, FormS } from './styles';

function CheckoutForm(){
    return (
        <div>
            <h2>Complete seu pedido</h2>
            <FormS>
                <section>
                    <DeliveryInformation>
                        <div>
                            <img src={pinI} alt="Digite seu endereço de entrega" />
                            <div>
                                <h3>Endereço de Entrega</h3>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </div>
                        <div>
                            <Input type="number" placeHolder="CEP" />
                            <Input type="text" placeHolder="Rua" />
                            <Input type="text" placeHolder="Número" />
                            <Input type="text"  placeHolder="Complemento"  />
                            <Input type="text"  placeHolder="Bairro"  />
                            <Input type="text"  placeHolder="Cidade"  />
                            <Input type="text"  placeHolder="UF"  />
                        </div>
                    </DeliveryInformation>
                    <div>
                        <h3>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        <button>Cartão de Crédito</button>
                        <button>Cartão de Débito</button>
                        <button>Dinheiro</button>
                    </div>
                </section>
                <section>
                    <h1>Cafés Selecionados</h1>
                    <div>
                        <img src={example} alt="Café de exemplo" />
                        <h2>Nome do Café</h2>
                        <QuantityButton />
                        <button>Remove</button>
                        <span>R$ 9.99</span>
                    </div>
                    <div>
                        <p>Total de itens R$29,9</p>
                        <p>Total de entrega R$3.5</p>
                        <h3>TOTAL - R$34</h3>
                    </div>
                    <button type="submit">Confirmar Pedido</button>

                </section>
            </FormS>
        </div>
    );
}

export default CheckoutForm;