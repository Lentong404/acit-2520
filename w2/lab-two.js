/* 

Create a function that takes three parameters 
year - month - day 

It makes use of function you write whose signature is 

function isLeapYear(year)
which returns true or false 

Don't use getDay function 

*/

//Special Step: Leap Year Function (If year is divisible by four AND (! /100 OR / 400))
const isLeapYear = (year) => {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;

}

const getDayOfTheWeek = (year, month, day) =>{

    //Step 1:  Only look at the last two digits of the year and determine how many 12s fit in it
    const lastTwoDigits = year % 100;
    //Step 2: Look at the remainder of this division:
    const divisionRemainder = lastTwoDigits % 12;
    //Step 3:  How many 4s fit into that remainder:
    const howManyFours = Math.floor(divisionRemainder / 4);
    //Step 4:  Add the day of the month:
    const dateDay = day;
    //Step 5:  Add the month code:
    const monthCodes = [0, 1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
    let monthCode = monthCodes[month];
    //Leap year off sets
    if (isLeapYear(year) && (month === 1 || month === 2)) {
        monthCode -= 1;
    }

    // Century adjustments
    const century = Math.floor(year / 100);
    if (century === 16) monthCode += 6;
    if (century === 17) monthCode += 4;
    if (century === 18) monthCode += 2;
    if (century === 20) monthCode += 6;
    if (century === 21) monthCode += 4;
  
    // Step 6: Add everything and mod by 7
    const total = lastTwoDigits + divisionRemainder + howManyFours + dateDay + monthCode;
    const dayIndex = total % 7;
    
    // Convert to day name
    const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return days[dayIndex];
    
};

// console.log(getDayOfTheWeek(1989, 8, 16)); 
// console.log(getDayOfTheWeek(1950, 3, 20));  

const getCalendar = () =>{

    const year = 2019;
    const calendarMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    if (isLeapYear(year)) {
        calendarMonths[2] = 29;
    }
    
    // Loop through each month
    for (let month = 1; month <= 12; month++) {
        
        // Loop through each day in this month
        for (let day = 1; day <= calendarMonths[month]; day++) {
        
        // Get the day of the week
        const dayName = getDayOfTheWeek(year, month, day);
        
        console.log(`${month}-${day}-${year} is a ${dayName.toLowerCase()}.`);
        }
    }

}
module.exports = {
  isLeapYear,
  getDayOfTheWeek,
  getCalendar
};