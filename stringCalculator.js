function add(numbers) {
    if (numbers === "") {
        return 0; // Return 0 in case of an empty string
    }
    let total = 0;   
    let currentNumber = "";

    for (let i = 0; i < numbers.length; i++) {
        const char = numbers[i];
        if (char >= '0' && char <= '9') {
            currentNumber += char;
        } else if (char === ',') {     
             if (currentNumber) {
                total += Number(currentNumber);
                currentNumber = "";
            }
        } 
    }
    if (currentNumber) {
        total += Number(currentNumber);
    }
    return total; 
}
module.exports=add;