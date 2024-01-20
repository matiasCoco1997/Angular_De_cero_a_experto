
export interface Passenger {
    name: string,
    childern?: string[],
}

const passengerOne: Passenger = {
    name: "Matías"
}

const passengerTwo: Passenger = {
    name: "Fernando",
    childern: ['Natalia', 'Elizabeth']
}

const printChildren = (passenger: Passenger) => {
    
    const { name , childern } = passenger;

    const howManyChildren = childern?.length || 0;

    console.log("El pasajero: " , name , " tiene ",howManyChildren, " hijos.");
}

printChildren(passengerOne);

printChildren(passengerTwo);

