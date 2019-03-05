// 1. Write a function that takes a string of a dog breed as an argument (like 'border collie')
// 2. Have the function return "my favorite dog breed is" plus the passed in string. If no argument is passed to the function, return "I like cats".
// 3. Execute the function in a way that captures the returned value in a variable.

let dogBreed = "pitbull";

const favoriteDogBreed = (dogBreed) => {
  if(dogBreed !== undefined) {
    return `My favorite dog breed is ${dogBreed}.`;
    // console.log(`My favorite dog breed is ${dogBreed}.`)
  } else {
    return "I like cats.";
    // console.log("I like cats.")
  }
};




let catDog = favoriteDogBreed(dogBreed)


console.log(`When it comes to pets, ${catDog}`)