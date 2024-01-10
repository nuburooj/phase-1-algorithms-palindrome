function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
    set name of function
    initialize function isPalindrome
    takes in a word parameter
    returns a word that is split into separate strings/characters
    then is reversed and then joined back together
*/

/*
  Add written explanation of your solution here
   takes a word like mom or racecar,
  splits it into individual characters,
  then reverses them,
  then joins them back together
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
