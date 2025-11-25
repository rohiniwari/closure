// Understanding Global and Function Execution Context

// Problem Statement: You are tasked with creating two functions, one in the global execution context and another inside a function context. In this problem, you need to:

// Define a global variable age.
// Create a function displayAge that prints the value of the age variable.
// Call the displayAge function to show how the global execution context works.
// Additionally, create another function changeAge that updates the global age variable within the function, and print the value of age after updating it.

// Steps:

// Declare a global variable age and assign a value to it.

// Create a function displayAge that logs the value of age.

// Create a second function changeAge, which changes the value of age.

// Call displayAge and changeAge and check how the value of age is updated.

// Global Execution Context
let age = 20; // global variable

function displayAge() {
  // Function Execution Context
  console.log("Age inside displayAge():", age);
}

function changeAge() {
  // Function Execution Context
  age = 25; // updating global variable
  console.log("Age updated inside changeAge():", age);
}

// Calling the functions
displayAge();  // prints: 20
changeAge();   // prints: 25
displayAge();  // prints: 25 (global variable updated)
// Explanation
// 1. Global Execution Context

// The variable age is defined globally.

// Any function can access it unless shadowed.

// 2. Function Execution Context

// When displayAge() runs, it looks for the variable age.

// Since there is no local age inside the function, JavaScript looks at the global scope and prints it.

// 3. Updating the Global Variable

// changeAge() modifies the global age variable.

// After calling it once, age becomes 25 everywhere.

// ✔ Final Output When Executed
// Age inside displayAge(): 20
// Age updated inside changeAge(): 25
// Age inside displayAge(): 25