import { Category } from "./category"

export interface CoffeInterface {
    id:number,
    title:string,
    description:string,
    category: Category[],
    price : number
    url:string
}