/* Q37 : Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/

function make_shirt (size: string, message: string): void {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt("Large", "I Love Typescript!");