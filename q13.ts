// Q13 : Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Made an array of favorite mode of transportation.
let favoriteTransport = [ "Car", "Motorcycle", "Bus", "Train"];

// using for loop to execute block of code multiple time.
// i = 0; => starting loop from 0.
// i < favoriteTransport.length; => this condition assure that loop continues as long as the i is lesse than the array length.
// i++ => increease the value of a variable by 1.
for (let i = 0; i < favoriteTransport.length; i++ ){ 

// Printing a statement for each mode of transportation, obtaining each element using i.
    console.log ("I would like to own a", favoriteTransport[i])
};