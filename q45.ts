/* Q45 : Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly*/

function make_car(manufacturer:string, model:string, ...options:{[key:string]:any}[]):any{
    let car = {
        manufacturer:manufacturer,
        model:model,
    }
    for(let option of options){
        car = {...car, ...option};
    }
    return car;
}
let car1 = make_car("toyota","corcolla",{color:"white",year:2024});
let car2 = make_car("tesla","model s",{color:"red",sunroof:true});

console.log(car1);
console.log(car2);