import { CoffeInterface } from "../../interface/coffeInterface";
import cartI from '../../assets/icons/Type=shopping-cart-fill.svg'
import { Cart, CoffeCard, CoffeCategoryContainer,CoffeCategory, CoffeDescription, CoffeDetails, CoffeTitle, Price, PriceQuantityContainer, Quantity, QuantityContainer } from "./styles";
import minus from '../../assets/icons/Type=minus-bold.svg'
import plus from '../../assets/icons/Type=plus-bold.svg'
interface CoffeProps{
    coffe : CoffeInterface
}
function Coffe({coffe} : CoffeProps){
    return(
        <CoffeCard>
            <CoffeDetails>
                <img src={coffe.url} alt={coffe.title} />
                <CoffeCategoryContainer>
                    {coffe.category.map((category) => 
                        <CoffeCategory>{category.title}</CoffeCategory>
                    )}
                </CoffeCategoryContainer>

                <CoffeTitle>{coffe.title}</CoffeTitle>
                <CoffeDescription>{coffe.description}</CoffeDescription>
                <PriceQuantityContainer>
                    <Price>R$ <strong>{coffe.price}</strong></Price>
                    <QuantityContainer>
                        <Quantity>
                            <button><img src={minus} alt="Diminuir 1" /></button>
                            <span>1</span>
                            <button><img src={plus} alt="Aumentar 1" /></button>
                        </Quantity>
                        <Cart>                        
                            <img src={cartI} alt="" />
                        </Cart>
                    </QuantityContainer>
                </PriceQuantityContainer>
            </CoffeDetails>
        </CoffeCard>
    )
}

export default Coffe