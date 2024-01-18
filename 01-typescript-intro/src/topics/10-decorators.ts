

function classDecorator( constructor: any ){
    
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

//Los decoradores son funciones que pueden modificar el comportamiento de clases, propiedades y metodos

//@classDecorator esta es la forma de invocar un decorador, es raro que lo usemos
export class SuperClass {

    public myProperty: string = "Abc123";

    print (){
        console.log("Hola mundo");
    }
}


console.log(SuperClass);

const myClass = new SuperClass();

console.log( myClass );