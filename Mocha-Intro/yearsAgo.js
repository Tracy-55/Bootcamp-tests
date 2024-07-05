function yearsAgo(year) {
    const currentYear = new Date().getFullYear();
    
    const yearsDifference = currentYear - year;
    
    return yearsDifference;
}

console.log(yearsAgo(1976));
console.log(yearsAgo(2000));
