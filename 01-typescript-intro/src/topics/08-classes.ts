

export class Person {

    constructor( 
        public name: string, 
        private address:string = "No address"
        ){

    }

}

const persona = new Person("Matías", "Moron");

console.log(persona);