import { CoffeInterface } from "../interface/coffeInterface";
import { categories } from "./category";
import tradicional from '../assets/Type=Expresso.png'
import cremoso from '../assets/Type=Expresso Cremoso.png'
import americano from '../assets/Type=Americano.png'
import gelado from '../assets/Type=Café Gelado.png'
import comLeite from '../assets/Type=Café com Leite.png'
import latte from '../assets/Type=Latte.png'
import capuccino from '../assets/Type=Capuccino.png'
import macchiato from '../assets/Type=Macchiato.png'
import mochaccino from '../assets/Type=Mochaccino.png'
import chocolateQuente from '../assets/Type=Chocolate Quente.png'
import cubano from '../assets/Type=Cubano.png'
import havaiano from '../assets/Type=Havaiano.png'
import arabe from '../assets/Type=Irlandês.png'
import irlandes from '../assets/Type=Irlandês.png'
export const coffe: CoffeInterface[] = [
    {
        id: 1,
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
        category: [categories[0]],
        url:  tradicional
    },
    {
        id: 2,
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
        category: [categories[0]],
        url: americano
    },
    {
        id: 3,
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
        category: [categories[0]],
        url:cremoso // Tradicional
    },
    {
        id: 4,
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
        category: [categories[0], categories[2]],
        url:gelado // Tradicional, Gelado
    },
    {
        id: 5,
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
        category: [categories[0], categories[3]],
        url: comLeite
    },
    {
        id: 6,
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
        category: [categories[0], categories[3]],
        url: latte
    },
    {
        id: 7,
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
        category: [categories[0], categories[3]],
        url: capuccino
    },
    {
        id: 8,
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
        category: [categories[0], categories[3]],
        url: macchiato
    },
    {
        id: 9,
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
        category: [categories[0], categories[3]],
        url: mochaccino
    },
    {
        id: 10,
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9,
        category: [categories[1], categories[3]],
        url: chocolateQuente
    },
    {
        id: 11,
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9,
        category: [categories[1], categories[2], categories[4]],
        url: cubano
    },
    {
        id: 12,
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.9,
        category: [categories[1]],
        url: havaiano
    },
    {
        id: 13,
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.9,
        category: [categories[1]],
        url: arabe
    },
    {
        id: 14,
        title: 'Irlândes',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.9,
        category: [categories[1], categories[4]],
        url: irlandes
    }
];
