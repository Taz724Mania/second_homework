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


////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


