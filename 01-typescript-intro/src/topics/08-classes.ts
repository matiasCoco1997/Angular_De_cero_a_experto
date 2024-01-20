

export class Person {

    constructor( 
        public name: string, 
        public lastName: string,
        private address:string = "No address"
        ){
    }
}

/* //extendiendo de persona
export class Hero extends Person {

    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super( realName, "New York" );
    }

}
*/

//realizando una composición
export class Hero {

    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){}
}

const tony = new Person("Tony", "Stark" ,"New York");
const persona = new Hero("Ironman", 45, "Tony " , tony);

console.log(persona);