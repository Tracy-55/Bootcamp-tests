function isFromBellville(registrationNumber){
    if (registrationNumber.startsWith("CY")) {
        return true;
    } else {
        return false;
    }
}
console.log(isFromBellville("CY12345")); 
console.log(isFromBellville("CY12345"));

  