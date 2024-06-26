// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // o(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // 0(n)
    a++; // o(n)
  }
  return a; // O(1)
}