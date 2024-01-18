
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

const { author, year } = details; //desestructuramos el autor y el año
 
console.log( "Song: " , anotherSong);
console.log( "Song: " , song, "/ Duration: ", duration);
console.log("Author: " , author, " / Year: ", year);








export {}