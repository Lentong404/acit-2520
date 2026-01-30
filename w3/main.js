const fs = require('fs');
const { distance } = require('./mathHelpers');

function processInput(x1, y1, x2, y2) {
    const content = `${x1} ${y1} ${x2} ${y2}`;
    
    // Create dataPoints folder
    if (!fs.existsSync('dataPoints')) {
        fs.mkdirSync('dataPoints');
    }
    
    // Write to points.txt
    fs.writeFileSync('dataPoints/points.txt', content);
    
    console.log('Content saved through console.');
    
    // Calculate and append distance
    const dist = distance(x1, y1, x2, y2);
    const distanceMessage = `\nThe distance between your two points: (${x1},${y1}), (${x2},${y2}) is ${dist}`;
    
    fs.appendFileSync('dataPoints/points.txt', distanceMessage);
}

// Get command line arguments (skip first two: node and script name)
const args = process.argv.slice(2);

if (args.length === 4) {
    const x1 = parseFloat(args[0]);
    const y1 = parseFloat(args[1]);
    const x2 = parseFloat(args[2]);
    const y2 = parseFloat(args[3]);
    
    processInput(x1, y1, x2, y2);
}