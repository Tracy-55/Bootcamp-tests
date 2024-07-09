function allPaarl(regNumbers){
    const regNumArray = regNumbers.split(', ');
    return regNumArray.filter(regNum => regNum.startsWith('CJ'));
}

var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
var regNumbersForPaarl = allPaarl(regNumbers);

 // I still get confused with when to use assert.equal
assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
assert.equal('CJ 678 543', regNumbersForPaarl[0]);
assert.equal('CJ 67890', regNumbersForPaarl[1]);
