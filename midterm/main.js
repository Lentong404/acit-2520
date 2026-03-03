const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);  

readFile('menu.csv', 'utf8')
    .then(data => {
    


  }).then(() =>{
    
  }).catch(err => console.error(err));