"use strict";
/* Q44 : Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(...items) {
    console.log(`making a sandwich with: ${items.join(",")}`);
}
make_sandwich("ketchup", "cheese");
make_sandwich("chicken", "lettuce", "tomato");
make_sandwich("cucumber", "cabbage", "mustard", "mayo");
