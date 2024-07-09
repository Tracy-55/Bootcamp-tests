function isWeekday(day) {
    // an array that consists of the 7 days of the week
    var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    return weekdays.includes(day) && day !== 'Saturday' && day !== 'Sunday';
}

console.log(isWeekday('Saturday')); 
console.log(isWeekday('Sunday')); 
console.log(isWeekday('Monday')); 
console.log(isWeekday('Tuesday'));
console.log(isWeekday('Wednesday')); 
console.log(isWeekday('Thursday')); 
console.log(isWeekday('Friday')); 
