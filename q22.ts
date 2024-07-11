// Q22 : Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. 

// Making the array of 3 vegetable which means this array has 3 index number : 0 , 1 , 2
let veges = ["potato", "tomato", "onion"];

// Intentionally produce an index error.
// It will give an undefined error.
console.log(veges[3]);

// Correcting the error.
console.log(veges[2]);