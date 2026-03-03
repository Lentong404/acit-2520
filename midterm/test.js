const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);




readFile('supply.txt', 'utf8')
    .then(data => {
        // Read returns an entire txt file as a giant string
        // Use .split to turn each new line into one array
        const lines = data.split('\n');

  }).then(() =>{
    
  }).catch(err => console.error(err)); 

// viewAllSupply("MR");
// addSupply("MR")
// deleteSupply("MR", 1)

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