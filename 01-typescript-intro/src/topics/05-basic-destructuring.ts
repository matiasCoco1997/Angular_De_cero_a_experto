
interface AudioPlayer {
    audiovolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audiovolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = "New Song";

const { 
    song:anotherSong ,//desestructuramos la cancion con otro nombre para no tener inconvenientes
    songDuration: duration, //le asignamos el nombre duration a la variable
    details//desestructuramos el objeto detalles
} = audioPlayer;

const { author } = details; //desestructuramos el autor y el año
 
/*
console.log( "Song: " , anotherSong);
console.log( "Song: " , song, "/ Duration: ", duration);
console.log("Author: " , author, " / Year: ", year);
*/


const [p1, p2, trunks = "No existe el personaje"]: string[] = ["Goku", "Vegeta", "Trunks"];

//const [ , , trunks = "No existe el personaje"]: string[] = ["Goku", "Vegeta", "Trunks"];
//En el caso de solo querer acceder a trunks, solo se colocaran comas indicando que no nos interesan esos valores y solo queremos acceder a trunks

console.log("Personaje 1: " , trunks );



export {}