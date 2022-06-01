// Write a function that:

// Takes an array of names as a parameter.
// It needs return a new array with each of the first letters of the names capitalized
// EXAMPLE INPUT -> ["charlie", "rob"];
// EXPECTED OUTPUT -> ["Charlie", "Rob"]

const coachArr = ["charlie", "rob"];

const capitaliseWords = () => {
  const capitalArr = coachArr.map((array) => {
    const eqcationofCapitalArr = array[0].toUpperCase() + array.substring(1).toLowerCase();
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
