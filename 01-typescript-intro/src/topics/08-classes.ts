

export class Person {

    public name?: string;
    private address?: string;

    constructor( name: string, address:string ){
        this.name = name;
        this.address = address;
    }

}

const persona = new Person("Matías", "Moron");

console.log(persona);