"use strict";
/* Q42 : Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
let magician = [] = ["chris angel", "david blaine", "dynamo"];
function show_magicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magician);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[1] = magicians[i] + "the great";
    }
}
make_great(magician);
