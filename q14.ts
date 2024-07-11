// Q14 : Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Declared list of guest.
let guestList = ["Ali", "Hasnain" , "Haleem"];

// Using .forEach and arrow function method for accessing each element in the list, one at a time and temple literal to print message.
// Using \n\n\ for two line space. \n indicate newline character.
guestList.forEach(inviteGuests => console.log (`Hello ${inviteGuests}, \n\n I Want To Invite You For the Eid Dinner. Do join us on this special occasion.\n\n regards, \n Rahaima Shakeel \n\n`));