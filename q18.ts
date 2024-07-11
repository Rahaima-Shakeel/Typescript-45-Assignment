/* Q18 : Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
// Store the locations in a array.
let places = ["Saudi Arabia", "Japan", "Turkey", "Greece", "Finland"];

// Print array in its original order.
console.log("\nOriginal Order:\n"+ places);

// Print array in alphabetical order without modifying the actual list.
// Using ... spread operators to create a shallow copy of places array.
// then .sort() method to sorts array alphabetically.
console.log("\nAlphabetical Order:\n" + [...places].sort());

// Show that array is still in its original order by printing it.
console.log("\nOriginal Order:\n"+ places);

// Print your array in reverse alphabetical order without changing the order of the original list.
// Using ... spread operators to create a shallow copy of places array.
// .sort() method to sorts array alphabetical order.
// .reverse() method reverses the order of sorted array and print it.
console.log("\nReverse Alphabetical Order:\n" + [...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log("\nOriginal Order:\n"+ places);

// Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReversed Order:\n"+ places.reverse());

// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack To original Order:\n"+ places.reverse());

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nSorted In Alphabetical:\n"+ places.sort());

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort()
places.reverse()
console.log("\nSorted In Reverse Alphabetical Order:\n"+ places);