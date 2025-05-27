
import { coffe } from "../../db/coffes"
import Coffe from "../coffe/coffe"
import { CoffeContainer } from "./styles"

function CoffeList(){
    return(
        <CoffeContainer>
           {coffe.map((coffe)=>{
            return(
                    <Coffe key={coffe.id} coffe={coffe}/>
            )
      
           })}
        </CoffeContainer>


    )
}

export default CoffeList