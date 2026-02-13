/*
Promise is an object that represents eventual completion/failure of an asynchronous operation and its resulting value
    Return object to which you attach callbacks instead of passing call backs into a function.

**Async functions will start but the program keeps running.
    Good for fetching data from a server
    reading files or timers
    *Async/Await is the modern way to write async code that looks synchronous

    await keyword pauses the async function until the promise resolves - but other code can run

.then() = Promise chaining, handles SUCCESS case 
.catch() handles err/ERRORS
*/

// EXAMPLE
async function getData() { 
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

//EXAMPLE on how Promise works
function readFileBetter(){
    return new Promise((resolve, reject) => {
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
}

const readFileButter = () => {
    return new Promise((resolve, reject) => {
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    })
}

const promiseObject = readFileButter("file1.txt");
console.log(promiseObject);

// EXAMPLE PROMISIFY

/*


*/

/*

First two functions are the callbacks for success and failure. 

function asynchronously generates a sound file given a config record
    config record = object with settings (You make this up)

*/

function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

//Rewrite into a promise 
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

