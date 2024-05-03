
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOdd(num) {
  if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(evenOdd(2));