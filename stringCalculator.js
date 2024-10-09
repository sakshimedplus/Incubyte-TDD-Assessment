function add(numbers) {
    if (numbers === "") {
        return 0; // Return 0 in case of an empty string
    }
    let total = 0;   
    let currentNumber = "";
    let delimiter = [',', '\n'];  // Default delimiters
    if (numbers.startsWith("//")) {
         // Check if there's a custom delimiter declaration
        const firstNewlineIndex = numbers.indexOf("\n");
        if (firstNewlineIndex !== -1) {
            delimiter = [numbers.substring(2, firstNewlineIndex)];
            // Remove the delimiter declaration from the string
            numbers = numbers.substring(firstNewlineIndex + 1);
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        const char = numbers[i];
        if (char >= '0' && char <= '9') {
            currentNumber += char;
        } else if (delimiter.includes(char)) {     
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