const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);  

readFile('menu.csv', 'utf8')
    .then(data => {
    

    // writeFile('menu.txt').then(data => {
        
    // }).catch(err => console.error(err));

  }).then(() =>{
    
  }).catch(err => console.error(err));




