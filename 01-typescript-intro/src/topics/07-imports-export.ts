import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "Ipad",
        price: 200
    },
];



const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

//cuando se importa un archivo no se deberia estar ejecutando codigo, sino que deberian ser invocados

console.log("Total: ", total);
console.log("Tax: ", tax);



