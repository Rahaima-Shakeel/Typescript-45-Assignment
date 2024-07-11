// Q12 : Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Storing the names of friends in a array called names.
let names = ["Ali", "Hasnain" , "Haleem"];

// Using .forEach and arrow function method for accessing each element in the list, one at a time and temple literal for message.
names.forEach(name => console.log (`${name}, Thanks for your friendship.`));