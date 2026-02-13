const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Helper function: parse one CSV line
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
const calculatePrice = (priceString) => {
    const numPrice = parseFloat(priceString.replace('$', '')); 
    const newPrice = numPrice * 1.8; 
    return newPrice.toFixed(2);  
};

// Helper function: group items by meal type
const groupByMealType = (items) => {
    const grouped = {};
    items.forEach(item => {
        if (!grouped[item.mealType]) {
            grouped[item.mealType] = [];
        }
        grouped[item.mealType].push(item);
    });
    return grouped;
};


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