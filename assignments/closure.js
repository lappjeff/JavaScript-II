// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function parent () {
    console.log('I contain a closure')
    const passItOn = 'I do not contain a closure'

    function child () {
        console.log(passItOn)
    }
    child();
}

parent();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let value = 0;

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  console.log(value)
  return value ++;
};

counter();
counter();
counter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
