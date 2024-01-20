

function addNumbers(a: number, b:number): number {
    return a + b;
}

function showResult(a: number | string): void {
    console.log({a});
}

const addNumbersArrow = ( a:number, b:number ): string => {
    return `${a + b}`;
}

function multiply ( firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}


/*const result: number = addNumbers(1, 2);
showResult(result);

const result2: string = addNumbersArrow(3, 4);
showResult(result2);

const multiplyResult: number = multiply(5);
showResult(multiplyResult);*/

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const personaje: Character = {
    name: "Aragorn",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}


const healCharacter = ( character: Character , amount:number ) => {

    if( character.hp+amount > 100 ){
        character.hp = 100;
    } else{
        character.hp += amount;
    }
}

personaje.showHp();

healCharacter(personaje, 100);

personaje.showHp();

export {};