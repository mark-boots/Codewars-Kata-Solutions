//[8 kyu] Area of a Square
const squareArea = A => Number(((2 * A / 3.1416)**2).toFixed(2))

//[8 kyu] For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
const quote = fighter => {
  let t = {
    'george saint pierre': 'I am not impressed by your performance.', 
    'conor mcgregor':'I\'d like to take this chance to apologize.. To absolutely NOBODY!'
  }
  return t[fighter.toLowerCase()]
}

//[8 kyu] 5 without numbers !!
const unusualFive = () => '_____'.length

//[8 kyu] Regexp Basics - is it a digit?
String.prototype.digit = function() {
  return /^\d$/.test(this);
};

//[8 kyu] The 'if' function
const _if = (bool, func1, func2) => (bool ? func1() : func2())

//[8 kyu] Well of Ideas - Easy Version
function well(x){
  let count = x.filter(r=>r=='good').length;
  switch(true){
      case (count<1): return 'Fail!';
      case (count<3): return 'Publish!';
      default: return 'I smell a series!'
  }
}

//[8 kyu] Draw stairs
function drawStairs(n) {
  let arr = Array.from({length:n}, (_,i)=>' '.repeat(i)+"I");
  return arr.join('\n')
}

//[8 kyu] Tip Calculator
let tips = {
  poor:5,
  good:10,
  great:15,
  excellent:20
}
function calculateTip(amount, rating) {
  if(rating.toLowerCase()=='terrible') return 0;
  return Math.ceil(amount/100*tips[rating.toLowerCase()]) || 'Rating not recognised'
}

//[8 kyu] Count the Monkeys!
const monkeyCount = n => Array.from({length: n}, (_, i) => i+1)

//[8 kyu] Classic Hello World
class Solution {
  static main() {
    console.log('Hello World!')
  }
}

//[8 kyu] Grasshopper - Check for factor
const checkForFactor = (base, factor) => !(base%factor)

//[8 kyu] noobCode 01: SUPERSIZE ME.... or rather, this integer!
function superSize(num){
  let sorted = [...num.toString()].sort((a,b)=>b-a).join('')
  return +sorted
}

//[8 kyu] No Loops 2 - You only need one
const check = (a,x) => a.includes(x)

//[8 kyu] Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

//[8 kyu] Simple Fun #352: Reagent Formula
function isValid(f){
  if(f.includes(1) && f.includes(2))return false;
  if(f.includes(3) && f.includes(4))return false;
  if(f.includes(5) && !f.includes(6)) return false
  if(f.includes(6) && !f.includes(5)) return false
  if((f.includes(7) || f.includes(8))) return true
  return false
}

//[8 kyu] What's the real floor?
function getRealFloor(n) {
  if(n > 13) return n-2;
  if(n < 1) return n
  return n-1
}

//[8 kyu] Opposite number
const opposite = n => -n

//[8 kyu] Grasshopper - Messi goals function
const goals = (a, b, c) => a+b+c
  
//[8 kyu] How good are you really?
const betterThanAverage = (c, y) => y > c.reduce((a,b)=>a+b,0) / c.length;
  
//[8 kyu] Exclusive "or" (xor) Logical Operator
const xor = (a, b) => a!=b

//[8 kyu] No zeros for heros
function noBoringZeros(n) {
  if(n!==0 && n%10 == 0) n = noBoringZeros(n/10);
  return n
}

//[8 kyu] Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart-bluePulled)/(blueStart-bluePulled+redStart-redPulled)
}

//[8 kyu] Triple Trouble
function tripleTrouble(one, two, three){
  return [...one].map((c,i)=>c+two[i]+three[i]).join('')
 }

//[etired] Watermelon
const divide = weight => weight == 2 ? false : !(weight%2)

//[8 kyu] get ascii value of character
const getASCII = c => c.charCodeAt()

//[retired] Number toString
var a = 123+'';

//[8 kyu] Removing Elements
function removeEveryOther(arr){
  for(i=1;i<=arr.length-1;i++){
    arr.splice(i,1)
  }
  return arr
}

//[8 kyu] Find the Difference in Age between Oldest and Youngest Family Members
function differenceInAges(ages){
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)]
}

//[8 kyu] Is it even?
const testEven = n => !(n%2)

//[8 kyu] All Star Code Challenge #18
function strCount(str, letter){  
  return str.split(letter).length - 1
}

//[8 kyu] Polish alphabet
const chars = {
  "ą":"a",
  "ć":"c",
  "ę":"e",
  "ł":"l",
  "ń":"n",
  "ó":"o",
  "ś":"s",
  "ź":"z",
  "ż":"z"
}
const correctPolishLetters = string => [...string].map(c=>chars[c] || c).join('')

//[8 kyu] Is the string uppercase?
String.prototype.isUpperCase = function() {
  return this == this.toUpperCase()
}

//[8 kyu] SpeedCode #2 - Array Madness
const sumPowedArray = (arr,pow) => arr.reduce((sum,n)=>sum+(n**pow),0)
const arrayMadness = (a, b) => sumPowedArray(a,2)>sumPowedArray(b,3)

//[8 kyu] altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
  return this.split("").map(c => c === c.toUpperCase()? c.toLowerCase(): c.toUpperCase()).join('');
}

//[8 kyu] Total amount of points
const getResult = g => {
  let result = g.split(":")
  if(result[0]>result[1]) return 3;
  if(result[0]<result[1]) return 0;
  return 1;
}
const points = games => games.reduce((a,b)=>a+getResult(b),0)

//[8 kyu] Expressions Matter
const expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))

//[8 kyu] Subtract the Sum
const fruits = ['kiwi','pear','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple','cucumber','pineapple','cucumber','orange','grape','orange','grape','apple','grape','cherry','pear','cherry','pear','kiwi','banana','kiwi','apple','melon','banana','melon','pineapple','melon','pineapple','cucumber','orange','apple','orange','grape','orange','grape','cherry','pear','cherry','pear','apple','pear','kiwi','banana','kiwi','banana','melon','pineapple','melon','apple','cucumber','pineapple','cucumber','orange','cucumber','orange','grape','cherry','apple','cherry','pear','cherry','pear','kiwi','pear','kiwi','banana','apple','banana','melon','pineapple','melon','pineapple','cucumber','pineapple','cucumber','apple','grape','orange','grape','cherry','grape','cherry','pear','cherry','apple','kiwi','banana','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple']
const sum = n => n - [...n.toString()].reduce((a,b)=>+a + +b)
function SubtractSum(n){
  let lookup = sum(n)
  result = false;
  while(!result){
    lookup<= fruits.length ? result = fruits[lookup-1] : lookup=sum(lookup)
  }
  return result
}

//[8 kyu] Get Planet Name By ID
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
const getPlanetName = id => planets[id-1] || undefined

//[8 kyu] Welcome!
const greetings = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}
const greet = language => greetings[language] || "Welcome"

//[8 kyu] Grasshopper - Create the rooms
var rooms = {
  room1:{
    name:'name1',
    description:'description1',
    completed:false
  },
  room2:{
    name:'name2',
    description:'description2',
    completed:false
  },
  room3:{
    name:'name3',
    description:'description3',
    completed:false
  }
}

//[8 kyu] Find Multiples of a Number
const findMultiples = (integer, limit) => Array.from({length: Math.floor(limit/integer)}, (_,i) => ++i*integer)

//[8 kyu] Is n divisible by x and y?
const isDivisible = (n, x, y) => !(n%x||n%y)

//[8 kyu] Coefficients of the Quadratic Equation
const quadratic = (x1, x2) => [1, -(x1+x2), x1*x2]

//[8 kyu] Short Long Short
function solution(a,b){
  arr = [a,b].sort((a,b)=>a.length - b.length)
  arr.push(arr[0]);
  return arr.join('')
}

function solution(a, b){
  return a.length > b.length ? b+a+b : a+b+a
}

//[8 kyu] Parse float
const parseF = s => (Number.isNaN(parseFloat(s)) ? null : parseFloat(s))

//[8 kyu] Grasshopper - Messi Goals
let laLigaGoals = 43
let championsLeagueGoals = 10
let copaDelReyGoals = 5
let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

//[8 kyu] Grasshopper - Debug
const convert = temp => (temp - 32) * (5/9)
function weatherInfo (temp) {
  return `${convert(temp)} is ${convert(temp) > 0 ? 'above ':''}freezing temperature`
}

//[8 kyu] Capitalization and Mutability
const capitalizeWord = word => word[0].toUpperCase()+word.slice(1).toLowerCase()

//[8 kyu] Grasshopper - Debug sayHello
const sayHello = name => 'Hello, '+name

//[8 kyu] Grasshopper - Function syntax debugging
const main = (verb, noun) => verb+noun

//[8 kyu] Grasshopper - If/else syntax debug
const checkAlive = health => health>0

//[8 kyu] Hello, Name or World!
const hello = n => 'Hello, '+ (n && n!==""? n[0].toUpperCase() + n.slice(1).toLowerCase() : 'World') +"!"

//[8 kyu] The falling speed of petals
const sakuraFall = v => v <= 0 ? 0 : 400 / v

//[8 kyu] Are You Playing Banjo?
const areYouPlayingBanjo = name => `${name} ${name[0].toLowerCase() == 'r' ? 'plays': 'does not play'} banjo`

//[8 kyu] Array plus array
const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((a,b)=>a+b)

//[8 kyu] L1: Set Alarm
const setAlarm = (e, v) => e>v

//[8 kyu] Square(n) Sum
const squareSum = (numbers) => numbers.reduce((a,b)=>b*b+a,0)

//[8 kyu] Keep Hydrated!
const litres = t => Math.floor(t/2)

//[8 kyu] Switch it Up!
const nums = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine']
const switchItUp = n => nums[n]

//[7 kyu] Check the exam
function checkExam(array1, array2) {
  console.log
  let score = 0;
  for(i=0;i<array1.length;i++){
    if(array2[i] !== ""){
      score += (array1[i] == array2[i]? 4:-1)
    }
  }
  return score > 0 ? score : 0
}

//[8 kyu] Multiplication table for number
function multiTable(n) {
  return Array.from({length:10},(_,i)=>`${i+1} * ${n} = ${(i+1)*n}`).join('\n')
}

//[8 kyu] Sum Arrays
const sum = n => n.reduce((a,b)=>a+b,0)

//[8 kyu] Multiply
const multiply = (a, b) => a * b

//[8 kyu] Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let me = pontoonDistance / youSpeed;
  let shark = sharkDistance / (sharkSpeed / (dolphin ? 2 : 1));
  return me >= shark ? 'Shark Bait!': 'Alive!'
}

//[8 kyu] Beginner Series #2 Clock
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000
}

//[8 kyu] Dollars and Cents
function formatMoney(amount){
  return '$'+amount.toFixed(2)
}

//[8 kyu] Function 2 - squaring an argument
const square = n => n*n

//[8 kyu] Take the Derivative
const derive = (c,e) => `${c*e}x^${e-1}`

//[8 kyu] Convert to Binary
let toBinary = n => +n.toString(2)

//[8 kyu] For Twins: 2. Math operations
function iceBrickVolume(radius, bottleLength, rimLength) {
 return (bottleLength - rimLength) * radius * 2 * radius;
}

//[8 kyu] Sum The Strings
const sumStr = (a,b) => ''+((+a)+(+b))

//[8 kyu] USD => CNY
const usdcny = usd => (usd*6.75).toFixed(2) + ' Chinese Yuan'

//[8 kyu] Filling an array (part 1)
const arr = N => N?[...Array(N).keys()]:[]

//[8 kyu] How much water do I need?
const howMuchWater = (water, load, clothes) =>
  clothes > 2 * load
    ? 'Too much clothes'
    : clothes < load 
       ? 'Not enough clothes' 
       : Number((water * 1.1 ** (clothes - load)).toFixed(2))

//[8 kyu] Sum of differences in array
function sumOfDifferences(arr) {
  let sum = 0;
  arr.sort((a,b)=>b-a)
  for(let i=0; i<arr.length-1;i++){
    sum+= (arr[i]-arr[i+1]);
  }
  return sum
}

//[8 kyu] Find the position!
const position = letter=> 'Position of alphabet: '+(letter.charCodeAt()-96)

//[8 kyu] NBA full 48 minutes average
const pointsPer48 = (ppg, mpg) => Math.round(ppg/mpg*48*10)/10 || 0

//[8 kyu] Grasshopper - Basic Function Fixer
const addFive = num => num+5

//[8 kyu] Aspect Ratio Cropping - Part 1
const aspectRatio = (x,y) => [Math.ceil(y/9*16),y]

//[8 kyu] N-th Power
const index = (array, n) => array[n]**n || -1

//[8 kyu] CSV representation of array
const toCsvText = array => array.join("\n")

//[8 kyu] Parse nice int from char problem
const getAge = s => +s[0]

//[8 kyu] Are arrow functions odd?
const odds = values => values.filter(x=>x%2==1)

//[8 kyu] Super Duper Easy
const problem = x => typeof x === 'number' ? x*50+6 : "Error"

//[8 kyu] Smallest unused ID
const nextId = ids => {
  ids = [...new Set(ids)].sort((a,b)=>a-b)
  if(ids[0] !== 0) return 0;
  for(let i = 0; i<ids.length; i++){
    if(ids[i] +1 !== ids[i+1]) return ids[i]+1
  }
  return ids.length
}

//[8 kyu] Gravity Flip
const flip=(d, a)=> a.sort((a,b)=>d=="L"?b-a:a-b)

//[8 kyu] L1: Bartender, drinks!
const drinks = {
  "jabroni":"Patron Tequila",
  "school counselor":"Anything with Alcohol",
  "programmer":"Hipster Craft Beer",
  "bike gang member":"Moonshine",
  "politician":"Your tax dollars",
  "rapper":"Cristal",
}
const getDrinkByProfession = param => drinks[param.toLowerCase()] || 'Beer'

//[8 kyu] get character from ASCII Value
const getChar = c => String.fromCharCode(c)

//[8 kyu] Find the first non-consecutive number
function firstNonConsecutive (arr) {
  for(i=1;i<arr.length;i++){
    if(arr[i] - arr[i-1] > 1) return arr[i]
  }
  return null
}

//[8 kyu] Incorrect division method
const solve = (x, y) => x/y

//[8 kyu] Do I get a bonus?
function bonusTime(salary, bonus) {
return '£' + (salary * (bonus?10:1))
}

//[8 kyu] Grasshopper - Variable Assignment Debug
const a = "dev"
const b = "Lab"
const name = a + b

//[8 kyu] Function 3 - multiplying two numbers
const multiply = (a,b) => a*b

//[8 kyu] Century From Year
const century = year => Math.ceil(year/100)

//[8 kyu] Beginner - Lost Without a Map
maps = x => x.map(n=>n*2)

//[8 kyu] Beginner - Reduce but Grow
const grow = x => x.reduce((a,b)=>a*b)

//[8 kyu] Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3
  switch(true){
    case avg<60: return "F"
    case avg<70: return "D"
    case avg<80: return "C"
    case avg<90: return "B"
    default: return "A"
  }
}

//[8 kyu] UEFA EURO 2016
function uefaEuro2016(t, s){
  result = ''
  if(s[0] == s[1]){
    result = 'teams played draw.'  
  } else if(s[0] > s[1]){
    result = t[0] + ' won!'
  } else {
    result = t[1] + ' won!'
  }
  return `At match ${t[0]} - ${t[1]}, ${result}`
}

//[8 kyu] Function 1 - hello world
const greet = () => 'hello world!'

//[8 kyu] Total pressure calculation
const solution = (m1, m2, M1, M2, v, t) => (M1/m1+M2/m2)*0.082*(t+273.15)/v 

//[8 kyu] Sum of positive
const positiveSum = arr => arr.reduce((a,b)=>a+(b>0?b:0),0)

//[8 kyu] Grasshopper - Summation
const summation = n => (n*(n+1))/2

//[8 kyu] Is he gonna survive?
const hero = (b,d) => b>=d*2

//[8 kyu] Reversed Strings
const solution = s => [...s].reverse().join('')

//[8 kyu] Grasshopper - Terminal game move function
const move = (p, r) => p+r*2

//[8 kyu] Reversed Words
const reverseWords = str => str.split(" ").reverse().join(" ")

//[8 kyu] Return Negative
const makeNegative = num => -Math.abs(num)

//[8 kyu] Convert a Number to a String!
const numberToString = num => num+''

//[8 kyu] The Feast of Many Beasts
const firstLast = str => str[0]+[...str].pop()
const feast = (beast, dish) => firstLast(beast) === firstLast(dish)

//[8 kyu] Convert a Boolean to a String
function booleanToString(b){
  return b+''
}

//[8 kyu] A wolf in sheep's clothing
function warnTheSheep(queue) {
  sheep_nr = queue.length-queue.indexOf("wolf")-1
  return sheep_nr>0
    ? `Oi! Sheep number ${sheep_nr}! You are about to be eaten by a wolf!` 
    : `Pls go away and stop eating my sheep`
}

//[8 kyu] Regular Ball Super Ball
var Ball = function(ballType="regular") {
  this.ballType = ballType
};

//[8 kyu] Stringy Strings
function stringy(size) {
  str='1'  
  for(let i = 1; i <size; i++){
    str+= (i%2==1 ? '0' : '1')
  }
  return str
}

//[8 kyu] Difference of Volumes of Cuboids
function findDifference(a, b) {
  return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=>a*b))
}

//[8 kyu] Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2).sort((a,b)=>a-b))]
}

//[8 kyu] Remove String Spaces
function noSpace(x){
  return x.replace(/ /g,"")
}

//[8 kyu] Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if(!input || input.length == 0) return [];
  sums = [0,0]
  input.map(n=> n>0 ? sums[0]++ : sums[1]+=n)
  return sums 
}

//[8 kyu] Find Maximum and Minimum Values of a List
min = l => Math.min(...l)
max = l => Math.max(...l)

//[8 kyu] Can we divide it?
isDivideBy = (n, a, b) => n%a == 0 && n%b == 0

//[8 kyu] Convert a string to an array
stringToArray = s => s.split(" ")

//[8 kyu] I love you, a little , a lot, passionately ... not at all
t = ['I love you','a little','a lot','passionately','madly','not at all']
howMuchILoveYou = n => t[--n%t.length]

//[8 kyu] Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
  return numbers.filter(n=>n%divisor==0)
}

//[8 kyu] Invert values
function invert(array) {
   return array.map(n=>n*-1)
}

//[8 kyu] Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  return Math.floor(s*27.778)
}

//[8 kyu] Transportation on vacation
rentalCarCost = d => d*40 - (d > 6 ? 50 : d > 2 ? 20 : 0)

//[8 kyu] Opposites Attract
lovefunc = (f1, f2) => (f1-f2)%2 !== 0

//[8 kyu] DNA to RNA Conversion
DNAtoRNA = dna => dna.replace(/T/g,'U')

//[8 kyu] What is between?
function between(a, b) {
  arr=[]
  for(i=a; i<=b;i++){
    arr.push(i)
  }
  return arr
}

//[8 kyu] Get Nth Even Number
nthEven = n => n*2-2

//[8 kyu] My head is at the wrong end!
fixTheMeerkat = arr => arr.reverse()

//[8 kyu] Fake Binary
fakeBin = x => [...x].map(n=>Math.round(n*.1)).join("")

//[8 kyu] Is this my tail?
correctTail = (b, t) => [...b].pop() === t
  
//[8 kyu] Sum Mixed Array
const sumMix = a => a.reduce((a,b)=>+b+a,0)

//[8 kyu] You only need one - Beginner
const check = (a, x) => a.includes(x)

//[8 kyu] Squash the bugs
const findLongest = str => str.split(" ").map(w=>w.length).sort((a,b)=>b-a)[0]

//[8 kyu] 101 Dalmatians - squash the bugs, not the dogs!
const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = number => {
  switch(true){
      case (number <= 10): return dogs[0];
      case (number <= 50): return dogs[1];
      case (number == 101): return dogs[3];
      default: return dogs[2]
  }
}

//[8 kyu] Is there a vowel in there?
isVow = a =>a.map(c=>[97,101,105,111,117].includes(c)?String.fromCharCode(c):c)

//[8 kyu] Sort and Star
const twoSort = s => s.sort()[0].split("").join("***")

//[8 kyu] Grasshopper - Personalized Message
function greet (name, owner) {
  return 'Hello '+ (name === owner ? 'boss' : 'guest')
}

//[8 kyu] You Can't Code Under Pressure #1
doubleInteger = i => i*2

//[8 kyu] Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

//[8 kyu] Lario and Muigi Pipe Problem
function pipeFix(n){
  let arr = []
  for(i = n[0]; i<=n[n.length-1];i++){
    arr.push(i)
  }
  return arr
}

//[8 kyu] Logical calculator
function logicalCalc(array, op){
  if(op == 'AND') return !array.includes(false)
  if(op == 'OR') return array.reduce((a,b) => a || b);
  if(op == 'XOR') return array.reduce((a,b) => a != b);
}

//[8 kyu] Template Strings
const TempleStrings = (obj, feature) => `${obj} are ${feature}`

//[8 kyu] Convert number to reversed array of digits
const digitize = n => [...n+''].map(Number).reverse();

//[8 kyu] Remove exclamation marks
const removeExclamationMarks = s => s.replace(/\!/g,"")

//[8 kyu] Reversed sequence
const reverseSeq = n => [...Array(n)].map(() => n--)

//[8 kyu] Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  let human = humanYears;
  let cat = 0;
  let dog = 0;
  if(human >= 1){
    human-=1;
    cat+=15;
    dog+=15
  }
  if(human >= 1){
    human-=1
    cat+=9;
    dog+=9
  }
  if(human > 0) {
    cat+=human*4;
    dog+=human*5;
  }
  return [humanYears,cat,dog]
}

//[8 kyu] FIXME: Replace all dots
var replaceDots = str => str.replace(/\./g, '-');

//[8 kyu] Miles per gallon to kilometers per liter
function converter (mpg) {
  return Number((1.609344 / 4.54609188 * mpg).toFixed(2));
}

//[8 kyu] Quarter of the year
const quarterOf = (month) => {
  return Math.ceil(month/3)
  
}

//[8 kyu] Counting sheep...
const countSheeps = a => a.filter(s => s).length;

//[8 kyu] The Wide-Mouthed frog!
function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? "small" : "wide"
}

//[8 kyu] Generate range of integers
function generateRange(min, max, step){
  let range = []
  for(i=min; i<=max; i+=step){
    if(i<=max) range.push(i)
  }
  return range
}

//[8 kyu] Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  newBirds = []
  birds.forEach(bird=>{
    if(!geese.includes(bird)) newBirds.push(bird);
  })
  return newBirds;
  // return an array containing all of the strings in the input array except those that match strings in geese
};

//[8 kyu] Swap Values
const swapValues = array => array.reverse()

//[8 kyu] Price of Mangoes
const mango = (quantity, price) => (quantity - Math.floor(quantity / 3)) * price

//[8 kyu] Pre-FizzBuzz Workout #1
const preFizz = n => [...Array(n)].map((_, i) => i+1)

//[8 kyu] Holiday VIII - Duty Free
const dutyFree = (normPrice, discount, hol) => Math.floor(hol / normPrice / discount * 100)

//[8 kyu] Drink about
function peopleWithAgeDrink(old) {
  switch(true){
      case(old<14): return 'drink toddy';
      case(old<18): return 'drink coke';
      case(old<21): return 'drink beer';
      default: return 'drink whisky';
  }
};

//[8 kyu] Powers of 2
function powersOfTwo(n){
  powers = []
  for(i=0; i<=n; i++){
    powers.push(2**i)
  }
  return powers
}

//[8 kyu] Will there be enough space?
const enough = (cap, on, wait) => cap-on >= wait ? 0 : wait-cap+on

//[8 kyu] Thinkful - Logic Drills: Traffic light
const colors = ['green','yellow','red'];
const updateLight = current => colors[(colors.indexOf(current)+1)%colors.length]

//[8 kyu] MakeUpperCase
const makeUpperCase = str => str.toUpperCase()

//[8 kyu] Beginner Series #1 School Paperwork
const paperwork = (n, m) =>  (n < 0 || m < 0) ? 0 : n * m

//[8 kyu] Keep up the hoop
const hoopCount = n => n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it'

//[8 kyu] pick a set of first elements
const first = (arr, n=1) => arr.slice(0,n)

//[8 kyu] Calculate average
const find_average = arr => arr.reduce((a, b) => a + b, 0) / arr.length

//[8 kyu] Do you speak "English"?
const spEng = sentence => sentence.toLowerCase().includes("english")

//[8 kyu] Remove First and Last Character
const removeChar = str => str.slice(1,-1)

//[8 kyu] Abbreviate a Two Word Name
const abbrevName = name => name.split(' ').map(n => n[0].toUpperCase()).join('.')

//[8 kyu] Returning Strings
const greet = name => `Hello, ${name} how are you doing today?`;

//[8 kyu] Twice as old
function twiceAsOld(dad, son) {
  return Math.abs(dad - son*2)
}

//[8 kyu] Enumerable Magic #25 - Take the First N Elements
let take = (arr,n) => arr.slice(0,n);

//[8 kyu] Calculate BMI
function bmi(weight, height) {
  let bmi = weight/height**2;
  switch(true){
      case (bmi<=18.5): return "Underweight";
      case (bmi<=25): return "Normal";
      case (bmi<=30): return "Overweight";
      default: return "Obese";
  }
}

//[8 kyu] Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump
};

//[8 kyu] String repeat
function repeatStr (n, s) {
  return s.repeat(n);
}

//[8 kyu] Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

//[8 kyu] Area or Perimeter
const areaOrPerimeter = function(l , w) {
  return (l==w) ? l*w : (l+w)*2
};

//[8 kyu] How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0
}

//[8 kyu] Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  return ["No","Yes"][bool*1]
}

//[8 kyu] Alan Partridge II - Apple Turnover
function apple(x){
 if(x**2 > 1000) return 'It\'s hotter than the sun!!';
  return 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

//[7 kyu] List Filtering
let filter_list = (l) => {
  return l.filter((n) => n === parseInt(n) && n >= 0);
};

//[8 kyu] Get the mean of an array
function getAverage(marks){
  return (Math.floor(marks.reduce((a, b) => a + b) / marks.length));
}