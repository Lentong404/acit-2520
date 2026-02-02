const process = require("node:process")
const args = process.argv;


//Todo: processInput <- userInput

function processInput(userInput){
    
    //.slice() gives you index position

    /* 
    pull them out one by one 
    const x1 = args[2]; 

    Rescructuring 
    const [x1, y1, x2, y2] = process.argv; 

    but js will think that x1 is the 0 value 
    
    have to pad with node and script to fix it- but thats annoying
    const [node, script, x1 ...]

    so delete the two variables and leave , so JS will know to skip it 
    const [, , x1 ...]
    */

}
//Todo: directory dataPoints


// Call back functions? 
fstat.mkdir("datapoints", (err)=> {
    if(err){
        console.log(err);
    }else{

    }
})


//Todo: file: dataPoints/points.txt
//Todo: print content saved message 
//Todo: write(append) the distance method to points.txt