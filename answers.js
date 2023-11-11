////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i < 21; i++){ //logs 1 through 20 b/c the loop os told to start w/ 1 (i=1) and not progress passed 20 (i<21)
    console.log(i) // i++ adds one to each previous iteration making the loop count each number in successive order
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 2; i < 201; i += 2){
    console.log(i)
}
// Since the initial loop is true, then starting the log at 2 where it doesn't increase passed 200 hundred
// and each number is added to by 2 (i+=2) where the expression (+=) is addition, then this logs every even number b/w 0 and 200

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i < 101; i++) { //provides the scope for what will be logged
    console.log(i) // logs 1 through 100 in succsession
if (i / 3) { // determines that if a number is divisible by 3, that Fizz will log instead of the number
    console.log("Fizz")
} if (i / 5) { // determines that if a number is divisible by 5, that Buzz will log instead of the number
    console.log("Buzz")
} if (i / 3 && 5) // determines that if a number is divisible by both 3 AND 5, that FizzBuzz will log instead of the number
    console.log("FizzBuzz")
}
// this is the first time that these really clicked :D

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = 5001 // adressing plantee at the 2 index, where = allows change, 5000 becomes 5001
    console.log(plantee[2])

wolfy[3] = "Gotham City"
    console.log(wolfy[3])

dart.push("Hawkins")
    console.log(dart)

wolfy[0] = "Gameboy" //tried to use the .pop() method, but it kept removing the last index; eg. wolfy.pop("Wolfy"), wolfy.pop([0])
    console.log(wolfy) // ended up using the replacement method instead

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// ACCORDING TO BARD
// The for...of loop is a type of loop that iterates over the values of an iterable object. 
//An iterable object is an object that can be iterated over, such as an array, a string, or a map.
//The syntax of the for...of loop is as follows:
//   JavaScript
//              for (const value of iterable) {
  //                Code to execute for each value
//              }

//
// The toUpperCase() method is a method that can be used to convert a string to uppercase letters. 
// It does not modify the original string, but instead returns a new string that contains the uppercase version of the original string.

// Example
//const str = "hello";
//const upperStr = str.toUpperCase();
//console.log(upperStr); // Output: HELLO

// So, would that then mean that the code for the prompt would look like this?
//const tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"] //I keep forgetting to put "" around my elements which returns as undefined; MUST REMEMBER THE ""

//for (const Donatello of tmnt) {
 //   console.log("Donatello").toUpperCase())
    
//} def not that
//TAKE 2; USE WHAT YOU KNOW WHAT YOU CAN DO WITH ARRAYS (SPLIT, MAP, SPLICE, ETC)
const tmnt = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
    for (const element of tmnt){ //I KEPT THINKING I HAD TO PUT THE ACTUAL ELEMENT INSTEAD OF JUST *ELEMENT* 
        element.toUpperCase() //and idek remember what I was doing with the console log in the first attempt, just making it harder on myself i guess 
    }                           //this makes so much more sense, i overthink things way too much
    console.log(tmnt)

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
    console.log(favMovies.indexOf('Titanic'))
//1. .sort alphabetically sorted the array. It is not permamnent, further changes can be made.
    favMovies.sort()
    console.log(favMovies) 
//2. 
    favMovies.pop()
    console.log(favMovies)
//3.
    favMovies.push('Guardians of the Galaxy')
    console.log(favMovies)   
//4.
    favMovies.reverse()
    console.log(favMovies)
//5.
    const elementRemoved = favMovies.shift()
    console.log(favMovies)
//6. Using unshift adds elements to the beginning of the array. In this case, it added Silence of the Lambs.
    favMovies.unshift('Silence of the Lambs')
    console.log(favMovies)
//7.
    console.log(favMovies.indexOf('Django Unchained'))
    favMovies.splice(15, 1, 'Avatar')
    console.log(favMovies)
//8. The original array was altered.
//9. The array was sectioned off starting with the 10th element and ending with the 19th element. This created a separate variable without changing the original.
    console.log(favMovies.length)
    const favMovies2 = favMovies.slice(10)
    console.log(favMovies, favMovies2)
//10. Console logging FF returns an undefined error since it is now in favMovies2
    console.log(favMovies['Fast and Furious'])
//11. It is better to use const for arrays since they are generally immutable objects, meaning that they can't be changed.
//      However, there are ways to change the array that are more easily tracked than say accidentally console logging the wrong text. 
//      Using const essentially makes the arrays safer to use in the code because it is harder to accidentally make changes.

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

console.log(whereIsWaldo.indexOf('Eggbert'))
whereIsWaldo.splice(1,1) // Eggbert is not *inside* a specific subarray, so you don't need to add [] after whereIsWaldo
console.log(whereIsWaldo)

whereIsWaldo[1][2] = 'No One' // Understanding that the subarray follows the same protocol for indexes, you can use the simple method
// of addressing the subarray index and then the internal index of an element to change it.
console.log(whereIsWaldo)

const subArray = whereIsWaldo[2]; //Locates the first subarray that we need
    console.log(subArray)
const subSubArray = subArray[1]; //Locates the sub-subarray that we need
    console.log(subSubArray)
const element = subSubArray[1]; //Locates the element that we need
    console.log(element)
    //the above access the element
    console.log('Waldo')

////////////////////////////////
//  Excited Kitten
////////////////////////////////
const  kitSpeak = ['human...why you taking pictures of me?', 'the catnip made me do it', 'why does the red dot always get away']

for (let i = 0; i < 20; i++) { //runs the loop 20 times
    if (i % 2 === 0) { //tells the loop that even multiples of 2 should use the randomization code beneath it to determine what it logs. (I still don't really understand the % operator, but i'm also terrible at math..unless its DnD math)
        purr = Math.floor(Math.random() * kitSpeak.length) //this took me FIVE-EVER to figure out; lots of googling and talking it out; def need more practice; ngl, almost cried
        console.log(kitSpeak[purr])
    } else {
        console.log("Love me, pet me! HSSSSSS!")
    }

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]
//To find the Median, it has to be sorted from lowest to highest
    nums.sort()
        console.log(nums) //11, 11, 11, 11, 12, 12, 12, 12, 13, 14, 14, 15, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 19, 19, 71
//Then the length has to be determined
    console.log(nums.length) // 25 (odd)
//The index of the middle element has to be determined and is the median
    console.log(Math.floor(nums.length / 2)) // 12 is the index of the middle element
//Therefore
    console.log(nums[12]) // output 15
//ngl, i had to refresh my knowledge on finding medians T_T


//I hope my personal notes on here aren't too much for you all lol its just stream of consciousness tbh