import { Product } from '../../../../cursoAngular/landing-page-angular/src/app/products/products.mock';

interface Product {
    description: string,
    price: number
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

interface taxCalculationOptions{
    tax: number,
    products: Product[];
}

//function taxCalculation ( options: taxCalculationOptions ): [ number, number ] {
//function taxCalculation ({ tax, products }: taxCalculationOptions ): [ number, number ] {
function taxCalculation (options: taxCalculationOptions ): [ number, number ] {

const { tax, products } = options;

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15;

const result = taxCalculation( {
    products: shoppingCart,
    tax: tax
});

console.log("Total:", result[0]);
console.log("Tax:", result[1]);


const [ total, taxTotal ] = taxCalculation( {
    products: shoppingCart,
    tax: tax
});


export {};