// 1) Sum Zero
// Write a function that takes in an array of numbers. 
// The function should return True if any two numberss in list sum to 0, and false otherwise.

const isSumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true
        }
      }
    }
    return false
  }
  
  let arr1 = [1, 2, 3, 4, 5, 6, 7]
  
  // console.log(isSumZero(arr1), `should return false`)
  
  // runtime: O(n^2)


// 2) Unique Characters
// Write a function that takes in a single word, as a string. 
// It should return True if that word contains only unique characters. 
// Return False otherwise.

const hasUniqueChars = (str) => {
    for(let i = 0; i < str.length - 1; i++) {
        if(str.includes(str[i], i + 1)) {
            return false
        }
    }
    return true
}

// console.log(hasUniqueChars("lol"))
//console.log(hasUniqueChars("monday"))
// runtime: O(n)


// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.



const isPangram = (str) => {

    let alph = "abcdefghijklmnopqrstuvwxyz"
    let regex = /\s/g;

    let lowerC = str.toLowerCase().replace(regex, "")
   
    for(let i = 0; i < alph.length; i++) {
        if(lowerC.indexOf(alph[i]) === -1) {
            return false
        }
    }
   
    return true
}

//console.log(isPangram("The quick brown fox jumps over the lazy dog!"))

// runtime: O(n)



// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

const findLongestWord = (arr) => {
    let theLongestWord = ''
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > theLongestWord.length) {
            theLongestWord = arr[i]
        }
    }
    return theLongestWord.length
}

//console.log(findLongestWord(["hi", "hello"]))

//runtime: O(n)


