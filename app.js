// 1. ✅// *STUB -1.  Even or Odd

// Instructions
// Even or Odd

// Write a function that takes in a number and returns even if the number is even or odd if it is odd.

// function evenOrOdd(num){

// }
// console.log(evenOrOdd(2)) // 'even'
// console.log(evenOrOdd(3)) // 'odd'
// console.log(evenOrOdd(0)) // 'even'
// console.log(evenOrOdd(-2)) // 'even'
// console.log(evenOrOdd(-1)) // 'odd'

function evenOrOdd(num) {
  if (num % 2 == 0) {
    return 'even'
  } return 'odd'
}



// 2.✅   // *STUB - 2. Spare Change

//   Instructions
// Spare Change

// Description
// Given an array of coins, and a cost, return true or false on whether you have enough money. The array will always come in the same order and have the same length. [nickles, dimes, quarters]. These numbers are how many of each coin you have.

// challenge([2,5,2], 1.05) // -> true

// all the coins added up = 1.10, which is enough to buy an item that is $1.05.

function spareChange(coins, price) {
  let nickles = .05
  let dimes = .10
  let quarters = .25
  const cost = 1.05
  let money = ((nickles *= 2) + (dimes *= 5) + (quarters *= 2));
  console.log(money)
  if (money >= cost) {
    return true
  }
  return false
}

3.   // *STUB - #3. Longest Word
//   Instructions
// Longest Word

// Write a function that finds the longest word in a string. When a Tie is found return the first longest word found.

// function longestWord(str){

// }
// longestWord('Welcome to Jurassic Park')
// longestWord("I want to be the very best Like no one ever was To catch them is my real test To train them is my cause I will travel across the land Searching far and wide Each Pokemon to understand The power that's inside")

let str = ('Welcome to Jurassic Park')

function longestWord(str) {
  let words = str.split(' ')
  console.log(words);
  let maxLength = 0
  let longestWord = ''
  // *REVIEW - I was pretty sure we would be using split and length, and looping through, but I wasn't sure how exactly, and im still unsure how this solution would be thought through
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length
      longestWord = words[i]
    }
  }
  console.log(maxLength, 'here is the max length');
  console.log(longestWord, 'here is the longest word');
  // }
  // console.log(words);
  // const longest = words.find(w => w.length >= w)
  // console.log(longest);

  // console.log(words);


}



// 4. * TODO - // *STUB 4. -Letter Count Function
// Instructions
// Letter Count

// Write a function that takes in two parameters, a string and a character. The function then returns the number of times that character appeared in the provided string

function letterCount(str, letter) {
  let letters = str.split('')

  let count = letters.match(letter)
  console.log(count);
  // for (let i = 0; i < letters.length; i++) {
  //   if (letters.includes(letter)) 
  // } find? filter?


}





// 5. * TODO - //  *STUB - Most common letter

// Instructions
// Most Common Letter

// Write a function that takes in a string and returns the most common letter found within the string. Be sure to ignore spaces

function mostCommonLetter(str) {
  let letters = str.split('')
  // let mostCommonLetter = {}
  for (let i = 0; i < letters.length; i++) {
    //match? find? filter?
  }

}


// 6.✅ // *STUB -  Pythagorean

// Instructions
// Pythagorean

// Write a function that takes in two numbers a, and b and returns c squared.

// function pythagorean(a,b){

// }
// pythagorean(3,4) // 25
// pythagorean(3,5) // 34

function pythagorean(a, b) {
  let squaredA = (a * a)
  let squaredB = (b * b)
  return squaredA + squaredB

}


7. //  *STUB - Palindrome

// Instructions
// Palindrome*

// Write a function that takes in a string and returns true if the word is spelled the same forwards and backwards.

// function isPalindrome(word){

// }
// isPalindrome('racecar') // true
// isPalindrome('banana') // false
// *TODO - 
function palindrome(word) {
  let splitWord = word.split('')
  console.log(splitWord);
  let reversed = word.split('').reverse()
  console.log(reversed);

  if (splitWord == reversed) {
    console.log("it's a palindrome!");
  } else {
    console.log("it is not a palindrome");
  }
}


8. //*TODO -  *STUB  - - Factorial

// Instructions
// Factorial

// What is a factorial? A factorial is a product of a number than has been multiplied to all positive integers between 1 and that integer.

// They are written with an exclamation mark to denote that they are a factorials.

// Here is an example for a factorial of 5, which is equal to 120.

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Your job is to write a function that will take a positive integer as a parameter and return it's factorial.

function factorial(n) {
  //split to turn into array
  let newArray = n.split()
  console.log(newArray)
  //for each, multiply by itself *=
}


9. // *STUB - Iteration Madness

// Instructions
// Iteration Madness

// Given an array of numbers add each number together continually until you reach the provided target number or greator.

// Then return the total number of iterations required to reach to target number.

// function iterationMadness(num){

// }
// iterationMadness([10, 15, 25], 100) // outputs: 2

// EXAMPLE INPUT:

// 1: 0 + 10 + 15 + 25 = 50 2: 50 + 10 + 15 + 25 = 100


function iterationMadness(nums, target) {
  let numbersArr = []
  for (let i = 0; i < numbersArr.length; numbersArr++)
    if ((numbersArr += nums[i]) >= target) {

    }


}

10. // *TODO - Kaprekars Constant 

export function challenge(num) {
  //we want to take a given number, separate those numbers individually, 
  let numToString = num.toString()
  // console.log(numToString)
  const digits = numToString.split('')
  // console.log('here are the digits: ', digits)
  let reversedSortedDigits = digits.sort().reverse()
  for (i = digits; i <= digits.length; i++) {
    if (digits[0] < digits[3]) 
    }
  let sortedDigits = digits.sort()

  console.log(reversedSortedDigits, 'these are sorted and reversed')
  console.log(sortedDigits, 'hopefully these are still ascending')
  reversedSortedDigits - sortedDigits == newNum
  console.log(newNum)
  //then sort them largest to smallest, 
  //and then subtract those same numbers smallest to largest
}