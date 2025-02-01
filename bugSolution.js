function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  } else {
    return a + b; 
  }
}

console.log(foo(1, null)); // Output: null
console.log(foo(1, 2)); // Output: 3
console.log(foo(0,2)); // Output: 2
console.log(foo(false, 2)); //Output: 2

function fooStrict(a, b) {
  if (a === null || b === null) {
    return null;
  } else {
    return a + b;
  }
}

console.log(fooStrict(1, null)); // Output: null
console.log(fooStrict(1, 2)); // Output: 3
console.log(fooStrict(0,2)); // Output: 2
console.log(fooStrict(false, 2)); // Output: 2