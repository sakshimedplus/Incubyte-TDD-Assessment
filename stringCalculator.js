function add(numbers) {
    if (numbers === "") {
        return 0; // Return 0 in case of an empty string
    }
    let total = 0;   
    let currentNumber = "";
    let delimiter = [',', '\n'];  // Default delimiters
     let negatives = [];           // To store negative numbers
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
                const num = Number(currentNumber);
                if (num < 0) {
                    negatives.push(num); // Store negative numbers
                } else {
                    total += num;
                }
                currentNumber = ""; // Reset the number
            }
        } else {
            currentNumber += char;
        }
    }
    if (currentNumber) {
        const num = Number(currentNumber);
        if (num < 0)
            negatives.push(num);
        else
        total +=num;
    }
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }
    return total; 
}
module.exports=add;