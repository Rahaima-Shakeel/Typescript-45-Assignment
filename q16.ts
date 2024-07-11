/* Q16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/
// Declared list of guest.
let guestList = ["Ali", "Hasnain" , "Haleem"];
// Specified the guest who can't make it to the dinner.
let cancelGuest ="Haleem";

// Notifying that this guest is not available.
console.log(`${cancelGuest} is not available for dinner.\n`)
// Defined new guest.
let newGuest = "Areej";

// replaced old guest from new guest to send invitation
// guestList.indexOf(cancelGuest) => This part search the index of element in guestList that matches the position of cancelGuest.
// guestList[guestList.indexOf(cancelGuest)] => This part access the element haleem bu using index and replace.
// guestList[guestList.indexOf(cancelGuest)] = newGuest; => this assign the new value areej.
guestList[guestList.indexOf(cancelGuest)] = newGuest;

// Print statement to the end of your program informing people that i found a bigger dinner table.
console.log("Update: Guys, I found a bigger dinner table.\n");

// Using .unshift to Add one new guest to the beginning of your array.
guestList.unshift("Rahi");

//Using .splice to Add one new guest to the middle of your array.
//(Math.floor(guestList.length/2),0,"Raha") => It calculate the middle index and insert rahi at that index without removing any element.
guestList.splice(Math.floor(guestList.length/2),0,"Raha");

// Using .push to Add one new guest to the end of your list.
guestList.push("Tata");

// Using .forEach and arrow function method for accessing each element in the list, one at a time and temple literal to print message.
// Using \n\n\ for two line space. \n indicate newline character.
guestList.forEach(inviteGuests => console.log (`Hello ${inviteGuests}, \n\n I Would Like To Invite You To Join Us For Grand Eid Dinner🍽️.\n\n regards, \n Rahaima Shakeel \n\n`));

