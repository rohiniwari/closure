// Question 1: Closure-Based Counter Implementation
// Write a function createCounter that uses closures to create a simple counter. The function should:

// Allow incrementing the counter.
// Allow decrementing the counter.
// Display the current count.
// The function should not expose the counter variable directly to the outside world.

// Example Usage:

// const counter = createCounter();
// counter.increment(); // Output: Current count: 1
// counter.increment(); // Output: Current count: 2
// counter.decrement(); // Output: Current count: 1
// Tasks:

// Implement the createCounter function.
// Explain how closures are being used to encapsulate the counter variable.
// What happens if multiple counters are created using the same function? Provide examples to demonstrate this behavior.
// Question 2: Simulating Private Variables with Closures
// Create a function createBankAccount that simulates a simple bank account using closures. The function should:

// Allow deposits to be made to the account.
// Allow withdrawals from the account, but only if there is sufficient balance.
// Allow checking the current balance.
// Prevent direct access to the balance variable from outside the function.
// Example Usage:

// const account = createBankAccount();
// account.deposit(500); // Output: Deposited: 500
// account.withdraw(200); // Output: Withdrawn: 200
// account.withdraw(400); // Output: Insufficient balance
// console.log(account.balance); // Output: undefined
// Tasks:

// Implement the createBankAccount function.
// How does the closure ensure that the balance variable is private?
// Modify the function to include a transactionHistory feature that stores all transactions and explain how closures enable this feature.
// Submission Instructions: Please submit the GitHub Repo Link


// Question 1: Closure-Based Counter Implementation
function createCounter() {
  let count = 0; // private variable

  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },

    decrement() {
      count--;
      console.log("Current count:", count);
    },

    getCount() {
      console.log("Current count:", count);
    }
  };
}
// Explanation of Closures:
// In the createCounter function, the variable count is defined within the scope of the function. The returned object contains methods that can access and modify this count variable. Because these methods are defined within the same scope as count, they form a closure over it. This means that even after createCounter has finished executing, the count variable remains accessible to these methods, while remaining hidden from the outside world.

// Example of Multiple Counters:


// Each call to createCounter() creates a new independent closure, with its own private count.

// Usage:

const c1 = createCounter();
const c2 = createCounter();

c1.increment(); // 1
c1.increment(); // 2

c2.increment(); // 1 (separate counter)
c2.decrement(); // 0
// Each counter has its own private count. They do NOT share values.



// Question 2: Simulating Private Variables with Closures
// Create a function createBankAccount that simulates a simple bank account using closures. The function should:

// Allow deposits to be made to the account.
// Allow withdrawals from the account, but only if there is sufficient balance.
// Allow checking the current balance.
// Prevent direct access to the balance variable from outside the function.
// Example Usage:

// const account = createBankAccount();
// account.deposit(500); // Output: Deposited: 500
// account.withdraw(200); // Output: Withdrawn: 200
// account.withdraw(400); // Output: Insufficient balance
// console.log(account.balance); // Output: undefined
// Tasks:

// Implement the createBankAccount function.
// How does the closure ensure that the balance variable is private?
// Modify the function to include a transactionHistory fea

function createBankAccount() {
  let balance = 0; // private variable
  let transactionHistory = []; // private variable

  return {
    deposit(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },

    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push(`Failed withdrawal: ${amount}`);
      } else {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      }
    },

    checkBalance() {
      console.log("Current balance:", balance);
    },

    getHistory() {
      console.log("Transaction History:", transactionHistory);
    }
  };
}
// Explanation of Closures:
// In the createBankAccount function, the balance and transactionHistory variables are defined within the scope of the function. The returned object contains methods that can access and modify these variables. Because these methods are defined within the same scope as balance and transactionHistory, they form a closure over them. This means that even after createBankAccount has finished executing, the balance and transactionHistory variables remain accessible to these methods, while remaining hidden from the outside world.

const acc = createBankAccount();

acc.deposit(500);  
acc.withdraw(200);
console.log(acc.balance); // undefined
acc.checkBalance();
acc.getHistory();       
// The closure ensures that balance and transactionHistory are private by restricting access to them only through the methods defined within the returned object.ture that stores all transactions and explain how closures enable this feature.
// Submission Instructions: Please submit the GitHub Repo Link
// Implement the createBankAccount function.
function createBankAccount() {
  let balance = 0; // private variable
    let transactionHistory = []; // private variable
    return {
    deposit(amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    }
    ,
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push(`Failed withdrawal: ${amount}`);
        } else {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
            
        }
    },
    checkBalance() {
      console.log("Current balance:", balance);
    }
    ,
    getHistory() {
      console.log("Transaction History:", transactionHistory);
    }
    };
}
// How does the closure ensure that the balance variable is private?
// In the createBankAccount function, the balance and transactionHistory variables are defined within the scope of the function. The returned object contains methods that can access and modify these variables. Because these methods are defined within the same scope as balance and transactionHistory, they form a closure over them. This means that even after createBankAccount has finished executing, the balance and transactionHistory variables remain accessible to these methods, while remaining hidden from the outside world.

// Modify the function to include a transactionHistory feature that stores all transactions and explain how closures enable this feature.
// The transactionHistory variable is also private and can only be accessed through the getHistory method. This allows us to keep a record of all transactions without exposing the transaction history directly to the outside world.  
// Example Usage:
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400);  // Output: Insufficient balance
console.log(account.balance); // Output: undefined              
account.checkBalance(); // Output: Current balance: 300
account.getHistory(); // Output: Transaction History: [ 'Deposited: 500', 'Withdrawn: 200', 'Failed withdrawal: 400' ]


