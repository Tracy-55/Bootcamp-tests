function isFromGauteng(registrationNumber) {
    // its making sense but its not making sense
    if (registrationNumber.endsWith("GP")) {
        return true;
    } else {
        return false;
    }
}

// Help Me LORD
console.log(isFromGauteng('DR 12 TY GP'));
console.log(isFromGauteng('CA 123 456'));
