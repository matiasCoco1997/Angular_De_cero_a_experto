
const skills: string[] = ["Bash", "Counter", "Healing"];


interface Icharacter {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const personajeUno: Icharacter = {
    name: "Orco",
    hp: 100,
    skills: ["Bash", "Counter"]
};

const personajeDos: Icharacter = {
    name: "Humano",
    hp: 100,
    skills: ["Bash", "Counter"],
    hometown: "Ventormenta"
};

personajeUno.hometown = "Rivendell";

console.table(personajeUno);

export {};