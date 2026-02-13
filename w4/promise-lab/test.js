const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// Helper function: parse one CSV line
const parseLine = (line) => {
    // TODO: split by comma, extract mealType, name, quantity, price
    // return an object with those properties
};

// Helper function: calculate new price
const calculatePrice = (priceString) => {
    // TODO: remove $, convert to number, multiply by 1.8, format to 2 decimals
};

// Helper function: group items by meal type
const groupByMealType = (items) => {
    // TODO: create an object, loop through items, group them
    // return { lunch: [...], dinner: [...], etc }
};

// Helper function: format output string
const formatOutput = (groupedItems) => {
    // TODO: build the final text with headers, prices, formatting
    // return the complete string
};

// Main program
readFile('menu.csv', 'utf8')
    .then(csvData => {
        // TODO: split into lines, filter out empty lines
        // TODO: map each line through parseLine
        // TODO: group by meal type
        // TODO: format the output
        // return writeFile('menu.txt', formattedOutput);
    })
    .then(() => {
        console.log("Program is finished");
    })
    .catch(err => console.error(err));