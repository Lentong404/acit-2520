const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);


const parseLine = (line) => {
    const parts = line.split(','); 
    return {
        coffeeType: parts[0],  
            
    };
};

const parseCoffee = (coffees) =>{
    const coffeeTypes = {}
    for (let coffee of coffees) {
        if (!coffee in coffeeTypes) {
            coffeeTypes[coffee.coffeeTypes] = [];
        }
        coffeeTypes[coffee.coffeeTypes].push(coffee);
    }
}

// Count Number of Coffees
const viewAllSupply = (coffeetype) => {
    let result = 0
    

};


readFile('supply.txt', 'utf8')
    .then(data => {
        //split the data into lines 
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const coffees = lines.map(parseLine);
        // place in dictionary as Key
        const coffeeTypes = parseCoffee(coffees);        
        // return number of coffees
        const numCoffee = viewAllSupply(coffeeTypes)
        console.log(numCoffee)

  }).then(() =>{
    
  }).catch(err => console.error(err)); 



// Read Supply.txt and return a single integer 
/*

**- "DR" (for dark-roast)**
**- "MR" (for medium-roast)**
**- "B"  (for blonde)**

❌ If a user passes into the function a value that is NOT "DR", "MR", or "B",
 you should consider it an error and tell the user they passed an incorrect value into the function.

*/

// addSupply which should add to the end of supply.txt


// deleteSupply passing two things. What to delete (DR) and how Many to delete
// Show a delete confirmation Message

// Edge Cases o_o 