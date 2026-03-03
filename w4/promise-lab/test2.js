const { promisify } = require('util');
const fs = require('fs');
// fs = file system module (to read/write files)

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
// Promisify = Tool that converts call back style functions into Promise-Style

/*
fs.readFile/fs.writeFile use old call backs with if(err)
    The modern is .then() and .catch()
promisify converts it for us
    const readFile = promisify(fs.readFile);
    const writeFile = promisify(fs.writeFile);  
    ^ This is the conversion

OLD: 
    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) console.error(err);
        else console.log(data);
    });

NEW - No if(err)
    readFile('file.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));

*/



// Helper function: parse one CSV line
/*

    Input: One CSV Line
        "lunch,bento box b - sashimi,box combo,$9.59"

    You input one line of csv as a string and split each line by the , using line.split(',')
    You return a dictionary object without a dictionary
*/
const parseLine = (line) => {
    const parts = line.split(','); 
    return {
        mealType: parts[0],  
        name: parts[1],        
        quantity: parts[2],     
        price: parts[3]         
    };
};

// Helper function: calculate new price
/*

numPrice
    1. priceString.replace replaces the $ with nothing 
    2. parseFloat converts the remaining number to an actual number (from a string)

    New Price multiples by 1.8
    Then returns newPrice to 2 decimal places back to a string

*/
const calculatePrice = (priceString) => {
    const numPrice = parseFloat(priceString.replace('$', '')); 
    const newPrice = numPrice * 1.8; 
    return newPrice.toFixed(2);  
};

// Helper function: group items by meal type
/*
    Input from parseLine: 
        [
            {mealType: 'lunch', name: 'bento box a', ...},
            {mealType: 'dinner', name: 'sushi', ...},
            {mealType: 'lunch', name: 'bento box b', ...},
            {mealType: 'dinner', name: 'tuna', ...}
        ]

    Output: 
        {
            lunch: [
                {mealType: 'lunch', name: 'bento box a', ...},
                {mealType: 'lunch', name: 'bento box b', ...}
            ],
            dinner: [
                {mealType: 'dinner', name: 'sushi', ...},
                {mealType: 'dinner', name: 'tuna', ...}
            ]
        }


    Start with the empty object grouped
    Items gets looped over by a for loop which checks if not in grouped
        grouped[] <- Index checking grouped[item.mealType] <- KEY checking
    
    if it doesn't exist, create an array for that group
    grouped[item.mealType] = [];
        Same as: grouped['lunch'] = [];
        Now: grouped = { lunch: [] }
    grouped[item.mealType].push(item);
        Same as: grouped['lunch'].push(item);
        Now: grouped = { lunch: [{mealType: 'lunch', name: 'bento box', ...}] }

    item = {mealType: 'lunch', name: 'teriyaki', ...}
    if (!grouped['lunch']) {  -> grouped['lunch'] already exists!
        ![]  ← an array exists
        false  ← So we SKIP the if statement
    }

    grouped['lunch'].push(item);  -> Just add to existing array
        Now: grouped = { lunch: [{...bento...}, {...teriyaki...}] }
*/
const groupByMealType = (items) => {
    const grouped = {};
    for (let item of items) {
        if (!grouped[item.mealType]) {
            grouped[item.mealType] = [];
        }
        grouped[item.mealType].push(item);
    }
    return grouped;
};

// Helper function: format output string
/*
    **Input:** Grouped items object

    **Process:**
    1. Start with empty string `result = ''`
    2. Loop through each meal type (lunch, dinner, dessert, etc):
    - Capitalize first letter: `'lunch'` → `'Lunch'`
    - Add header: `"* Lunch Items *\n"`
    - Loop through items in that type:
        - Calculate the price
        - Add formatted line: `"$17.26  bento box, combo\n"`
    - Add blank line between sections: `"\n"`
    3. Build up the entire string piece by piece

    **Output:** Complete formatted string
    ```
    * Lunch Items *
    $15.46  bento box a, combo
    $17.26  bento box b, combo

    * Dinner Items *
    $6.30  sushi, 6 rolls

*/


const formatOutput = (groupedItems) => {
    let result = '';
    
    for (let mealType in groupedItems) {
        const capHeader = mealType.charAt(0).toUpperCase() + mealType.slice(1);
        
        result += `* ${capHeader} Items *\n`;
        
        groupedItems[mealType].forEach(item => { 
            const price = calculatePrice(item.price); 
            result += `$${price}  ${item.name}, ${item.quantity}\n`;
        });
        result += '\n';
    }
    return result;
};

// Main program
readFile('menu.csv', 'utf8')
    .then(csvData => {
        const lines = csvData.split('\n').filter(line => line.trim() !== '');
        const items = lines.map(parseLine);
        const grouped = groupByMealType(items);
        const output = formatOutput(grouped);
        return writeFile('menu.txt', output);
    })
    .then(() => {
        console.log("Program is finished");
    })
    .catch(err => console.error(err));


/*
CSV file
    ↓ (readFile)
Raw string: "lunch,bento,$9.59\ndinner,sushi,$3.50"
    ↓ (.split('\n'))
Array of lines: ["lunch,bento,$9.59", "dinner,sushi,$3.50"]
    ↓ (.map(parseLine))
Array of objects: [{mealType:'lunch',...}, {mealType:'dinner',...}]
    ↓ (groupByMealType)
Grouped object: {lunch: [...], dinner: [...]}
    ↓ (formatOutput)
Formatted string: "* Lunch Items *\n$17.26 bento...\n\n* Dinner Items *..."
    ↓ (writeFile)
menu.txt file created!
    ↓
"Program is finished"
*/