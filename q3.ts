// Q3 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// created a variable named personName and assigned it the string value Rahaima.
let personName = "rahaima";

// printed a name in upercase.
console.log (personName.toUpperCase());

// printed a name in lowercase.
console.log (personName.toLowerCase());

// printed a name in tittlecase
// personName.charAt(0) => getting first letter of the name, 0 is indicating a index.
// .toUpperCase() => changing a first letter of name.
// + => concatenating strings.
// personName.slice(1) => after first letter getting the rest of the name.
console.log (personName.charAt(0).toUpperCase()+personName.slice(1));