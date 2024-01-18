

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


const result: number = addNumbers(1, 2);
showResult(result);

const result2: string = addNumbersArrow(3, 4);
showResult(result);

const multiplyResult: number = multiply(5);
showResult(multiplyResult);

export {};