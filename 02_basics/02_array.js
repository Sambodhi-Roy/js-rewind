const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); //Nested array

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

const all_new_Heroes = [...marvel_heroes,...dc_heroes]

// ... spreads the array
console.log(all_new_Heroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableAnotherArray = anotherArray.flat(Infinity)

console.log(usableAnotherArray);

console.log(Array.isArray("Sam"))
console.log(Array.from("Sam"));
console.log(Array.from({name: "Sambodhi"}));    //Returns empty array in this case as it cannot form an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

