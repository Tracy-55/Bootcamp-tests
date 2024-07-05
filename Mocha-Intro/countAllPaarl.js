function countAllPaarl(reNumbers) {
    const regNumArray = regNumbers.split(', ');
    let count = 0;
    for (let regNum of regNumArray) {
        if (regNum.startsWith('CJ')) {
            count++;
        }
    }
    return count;
}

//This returns the total count of registration numbers from Paarl
assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));


