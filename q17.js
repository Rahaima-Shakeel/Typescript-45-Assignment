"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Q17 : Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
// Declared list of guest.
let guestList = ["Ali", "Hasnain", "Haleem"];
// Specified the guest who can't make it to the dinner.
let cancelGuest = "Haleem";
// Notifying that this guest is not available.
console.log(`${cancelGuest} is not available for dinner.\n`);
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
// Using .splice to Add one new guest to the middle of your array.
// (Math.floor(guestList.length/2),0,"Raha") => It calculate the middle index and insert rahi at that index without removing any element.
guestList.splice(Math.floor(guestList.length / 2), 0, "Raha");
// Using .push to Add one new guest to the end of your list.
guestList.push("Tata");
// Using .forEach and arrow function method for accessing each element in the list, one at a time and temple literal to print message.
// Using \n\n\ for two line space. \n indicate newline character.
guestList.forEach(inviteGuests => console.log(`Hello ${inviteGuests}, \n\n I Would Like To Invite You To Join Us For Grand Eid Dinner🍽️.\n\n regards, \n Rahaima Shakeel \n\n`));
// Prints a message saying that you can invite only two people for dinner.
console.log("Sorry, i want to inform you that, i can only invite 2 people for some reason.\n\n");
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// Used while loop to run as long as the length of guestList is greater than 2.
while (guestList.length > 2) {
    // Within loop, Used .pop() to remove last element from the aray and store theri names in uninvitedGuest.
    let uninviteGuest = guestList.pop();
    // Printing informing message to uninvited guest.
    console.log(`sorry ${uninviteGuest}, I can't invite you for Eid Dinner.\n\n`);
}
// After loop printing an invitation message to each remaining guests.
guestList.forEach(inviteGuests => console.log(`Hello ${inviteGuests}, \n\n I Would Like To Invite You To Join Us For Grand Eid Dinner🍽️.\n\n regards, \n Rahaima Shakeel \n\n`));
// Removing last two guest.
guestList.pop();
guestList.pop();
// Printing to assure array is cleared now.
console.log("final Guest list:", guestList);
