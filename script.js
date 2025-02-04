//reduce Method

//sum of numbers in an array
const numbers = [1,2,3,4]
let sum = 0
for(let i = 0; i < numbers.length; i++){
sum= sum + numbers[i]

}
console.log(sum)

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator 
+ currentValue,0)
console.log(sumOfNumbers)

//concatenate into a single string

const stringArray = ["hello", "sanjay","!"]

const combainedString = stringArray.reduce((accumulator , currentValue) => accumulator + currentValue , ' ')

console.log(combainedString)

// Find The Maximum Number In an Array

const numbersArray = [10,5,8,20,15]

const maxNumber = numbersArray.reduce((acc,curr) => (curr > acc ? curr :  acc), numbersArray[0] )
console.log(maxNumber)

//occurence of each word in an array

const fruits = ["apple", "banana","apple","orange","kiwi","kiwi"]

const wordCount = fruits.reduce((accumulator,currentValue) => {accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
   return accumulator
  },{})
console.log(wordCount)