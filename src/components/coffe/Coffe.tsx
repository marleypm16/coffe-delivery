import { CoffeInterface } from "../../interface/coffeInterface";
import cartI from '../../assets/icons/Type=shopping-cart-fill.svg'
import { Cart, CoffeCard, CoffeCategoryContainer,CoffeCategory, CoffeDescription, CoffeDetails, CoffeTitle, Price, PriceQuantityContainer, QuantityContainer } from "./styles";
import QuantityButton from "../quantityButton/QuantityButton";

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
                        <QuantityButton/>
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