/* Q41 : Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

let magician=[]=["chris angel", "david blaine", "dynamo"];

function show_magicians(magician:string[]){
    magician.forEach(magician => {
        console.log(magician)
    });
}
show_magicians(magician);