"use strict";
// Q6 : Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
// Storing a person’s name, and including some whitespace characters (\t\n) at the beginning and end of the name.
let personName = "\t\n Rahaima \t\n";
// printing the name once, so the whitespace around the name is displayed.
console.log(personName);
// printing the name after removing the white spaces.
console.log(personName.trim());
