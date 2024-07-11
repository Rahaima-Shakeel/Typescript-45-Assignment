"use strict";
/* Q24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Testing equality with strings");
let country1 = "Pakistan";
let country2 = "India";
console.log(country1 == "Pakistan");
console.log(country2 == "Pakistan");
console.log(country1 == country2);
console.log("Testing with lowercase");
let city = "LAHORE";
console.log(city.toLocaleUpperCase() == "lahore");
console.log("Testing with numerical comparisons");
let population = 220;
console.log(population == 220);
console.log(population != 220);
console.log(population > 200);
console.log(population < 250);
console.log(population <= 210);
console.log("Testing with && and || operators");
let area = 881913;
let gdp = 305;
console.log(area > 800000 && gdp > 300);
console.log(area < 900000 && gdp < 300);
console.log(area > 900000 || gdp > 300);
console.log(area < 800000 || gdp < 300);
console.log("Testing whether an item is in an array");
let cities = ["Karachi", "Lahore", "Islamabad"];
console.log("Is 'Karachi' in cities?");
console.log(cities.includes("Karachi"));
console.log("Testing whether an item is not in an array");
console.log("Is 'Peshawar' not in cities?");
console.log(!cities.includes("Peshawar"));
