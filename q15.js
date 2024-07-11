"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Q15 : Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
// Declared list of guest.
let guestList = ["Ali", "Hasnain", "Haleem"];
// Specified the guest who can't make it to the dinner.
let cancelGuest = "Haleem";
// Notifying that this guest is not available.
console.log(`${cancelGuest} is not available for dinner.\n\n`);
// Defined new guest.
let newGuest = "Areej";
// replaced old guest from new guest to send invitation
// guestList.indexOf(cancelGuest) => This part search the index of element in guestList that matches the position of cancelGuest.
// guestList[guestList.indexOf(cancelGuest)] => This part access the element haleem bu using index and replace.
// guestList[guestList.indexOf(cancelGuest)] = newGuest; => this assign the new value areej.
guestList[guestList.indexOf(cancelGuest)] = newGuest;
// Using .forEach and arrow function method for accessing each element in the list, one at a time and temple literal to print message.
// Using \n\n\ for two line space. \n indicate newline character.
guestList.forEach(inviteGuests => console.log(`Hello ${inviteGuests}, \n\n I Want To Invite You For the Eid Dinner. Do join us on this special occasion.\n\n regards, \n Rahaima Shakeel \n\n`));
