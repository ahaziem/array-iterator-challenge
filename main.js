// Write a function that:

// Takes an array of names as a parameter.
// It needs return a new array with each of the first letters of the names capitalized
// EXAMPLE INPUT -> ["charlie", "rob"];
// EXPECTED OUTPUT -> ["Charlie", "Rob"]

const coachArr = ["charlie", "rob"];

const capitaliseWords = () => {
  const capitalArr = coachArr.map((array) => {
    const eqcationofCapitalArr =
      array[0].toUpperCase() + array.substring(1).toLowerCase();
    return eqcationofCapitalArr;
  });
  return capitalArr;
};

console.log(capitaliseWords());

// Remove vowels 📓
// Write a function that:

// Takes an array of letters as a parameter.
// It needs return a new array with only consonants, the vowels need to be removed.
// // EXAMPLE INPUT -> ["c", "r", "a"];
// // EXPECTED OUTPUT -> ["c", "r"]

// Mean coaches 💭
// Write a function that:

// Takes an array of numbers as a parameter
// It needs to return the mean average
// Total the numbers and divide by the amount of numbers in the array
// // EXAMPLE INPUT -> [25, 50, 175, 50];
// // EXPECTED OUTPUT -> 75

// -------- 2. Practice Problem Solving ----------- //
// Spot the difference 👀
// Write a function that:
// Takes an array of words
// Returns a new array of words
// Figure out the difference with the examples below and use an array iterator method to implement it.
// // EXAMPLE INPUT -> ["spray", "limit", "disco", "exuberant", "destruction", "present"];
// // EXPECTED OUTPUT -> ["exuberant", "destruction", "present"]

let inputArr = [
  "spray",
  "limit",
  "disco",
  "exuberant",
  "destruction",
  "present",
];
let outputArr = ["spray", "limit", "disco"];

const removeArr = (array, removeItem) => {
  return array.filter((item) => {
    return !removeItem.includes(item);
  });
};

console.log(
  removeArr(
    ["spray", "limit", "disco", "exuberant", "destruction", "present"],
    ["spray", "limit", "disco"]
  )
);

// Disco Shoes 👞
// Write a function that:

// Takes an array of words
// Returns a new array of words
// Figure out the difference with the examples below and use an array iterator method to implement it.
const  INPUT =  ["please camel", "join casing", "these disco", "with shoes"];
// // EXPECTED OUTPUT -> ["pleaseCamel", "joinCasing", "theseDisco", "withShoes"]



const capitalizeSecondItem = (array) => {
    return array.filter(arr => {
    arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
})
  }

  console.log(capitalizeSecondItem(INPUT))

// / Write a function that:

// Takes an array of scrabble tile objects
// Returns a score
// Figure out the difference with the examples below and use an array iterator method to implement it.
// // EXAMPLE INPUT -> [{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}];
// // EXPECTED OUTPUT -> 9
