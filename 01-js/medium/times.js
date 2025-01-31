/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateSumAndTime(n) {
    // Start time
    const startTime = new Date();

    // Calculate the sum from 1 to n
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    // End time
    const endTime = new Date();

    // Calculate elapsed time in seconds
    const elapsedTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds

    console.log(`Sum from 1 to ${n} is ${total}`);
    console.log(`Time taken: ${elapsedTime.toFixed(3)} seconds`);
}

// Running the function for different values of n
console.log("Calculating sum from 1 to 100:");
calculateSumAndTime(100);

console.log("\nCalculating sum from 1 to 100,000:");
calculateSumAndTime(100000);

console.log("\nCalculating sum from 1 to 1,000,000,000:");
calculateSumAndTime(1000000000);
