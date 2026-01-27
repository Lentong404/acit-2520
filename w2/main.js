const labTwo = require('./lab-two.js');

function getDayOfTheWeekForUserDate() {
  const readlineSync = require('readline-sync');
  
  // Ask user for month, day, year
  const month = readlineSync.question('Enter month (1-12): ');
  const day = readlineSync.question('Enter day (1-31): ');
  const year = readlineSync.question('Enter year: ');
  
  // Get the day of the week
  const dayName = labTwo.getDayOfTheWeek(year, month, day);
  
  console.log(`${month}-${day}-${year} is a ${dayName.toLowerCase()}.`);
}

getDayOfTheWeekForUserDate();