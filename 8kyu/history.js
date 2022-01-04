//[8 kyu] Return Two Highest Values in List
const twoHighest = arr => [...new Set(arr)].sort((a,b)=>b-a).splice(0,2)

//[8 kyu] Fundamentals: Return
const add = (a,b) => a+b
const divide = (a,b) => a/b
const multiply = (a,b)=> a*b
const mod = (a,b) => a%b
const exponent = (a,b) => a**b
const subt = (a,b) => a-b

//[8 kyu] Ensure question
const ensureQuestion = s => s.replace('?','')+'?'

//[8 kyu] Mr. Freeze
Object.freeze(MrFreeze)

//[8 kyu] Shifty Closures
const greet_abe = () => greet('Abe')
const greet_ben = () => greet('Ben')
const greet = name => `Hello, ${name}!`

//[8 kyu] Basic Training: Add item to an Array
websites.push("codewars")

//[8 kyu] Return to Sanity
const mystery = () => ({sanity: 'Hello'})

//[8 kyu] Semi-Optional
const wrap = value => ({value})

//[8 kyu] Max Headroom and JavaScript style
const obj = {name: 'Max Headroom'}
const getMax1 = () => obj;
const getMax2 = () => obj;

//[8 kyu] Color Ghost
class Ghost {
  constructor(){
    this.color = ['white','yellow','purple','red'][Math.floor(Math.random()*4)]
  }
}

//[8 kyu] Hello Happy Codevarrior!
function Warrior(n){
let name = n;  
  this.name = function(n){
    if(n) name = n;
    return name;
  }
}
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}

//[8 kyu] "this" is a problem
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

//[8 kyu] Barking mad
function Dog (breed) {
  this.breed = breed;
  this.bark = () => "Woof"
}
var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");

//[8 kyu] Vowel remover
const shortcut = str => str.replace(/[aeiou]/g,'')

//[8 kyu] Online RPG: player to qualifying stage?
function playerRankUp (points) {
  let str = 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
  return points >= 100 ? str : false
}

//[8 kyu] Take an Arrow to the knee, Functionally
const ArrowFunc = arr => arr.map(nr => String.fromCharCode(nr)).join('')

//[8 kyu] Are there any arrows left?
const anyArrows = arrows => arrows.some(arrow => !arrow.damaged)

//[8 kyu] Lexical this
const Person = () => {
  const person = {
    _name: 'Leroy',
    _friends: [],
    fillFriends: function(f) {
      this._friends.push(...f)
    },
  }
  return person
}

//[8 kyu] Switch/Case - Bug Fixing #6
const evalObject = ({a, b, operation}) => eval(a+operation.replace('^','**')+b)

//[8 kyu] Grasshopper - Array Mean
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length

//[8 kyu] Invalid Login - Bug Fixing #11
const validate = (un, pw) => new Database().login(un, encodeURI(pw))

//[8 kyu] Find variable which breaks strict comparison!
const findStrangeValue = () => -"a"

//[8 kyu] Grasshopper - Order of operations
const orderOperations = () => (2 + 2) * (2 + 2) * 2

//[8 kyu] Unexpected parsing
const getStatus = isBusy => {
  return {status: (isBusy ? "busy" : "available")}
}

//[8 kyu] A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
const yourFutureCareer = (career = Math.random()) => 
  career <= .32 ? 'FrontEnd Developer' : career <= 0.65 ? 'BackEnd Developer' : 'Full-Stack Developer'
yourFutureCareer();

//[8 kyu] Regex count lowercase letters
const lowercaseCount = str => (str.match(/[a-z]/g) || []).length

//[8 kyu] Job Matching #1
const match = ({minSalary}, {maxSalary}) => minSalary && maxSalary ? minSalary * .9 <= maxSalary : error()

//[8 kyu] Improving Math.round(x)
Math.roundTo = (n, dec)  => Math.round(n * 10**dec) / 10**dec

//[8 kyu] Grasshopper - Object syntax debug
var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}

//[8 kyu] Double Char
const doubleChar = str => [...str].map(c=>c+c).join('')

//[8 kyu] Do something "n.times" (Simplifying "for" loops)
Number.prototype.times = function (f) {
  let i=0;
  while(i<this) {
    f(i);
    i++
  }
}

//[8 kyu] Be Concise III - Sum Squares
const sumSquares = arr => arr.reduce((sum, val) => val**2 + sum, 0)

//[8 kyu] Remove First and Last Character Part Two
function array(arr){
  let _arr =  arr.split(",").slice(1,-1).join(" ")
  return _arr.length > 0 ? _arr : null
}

//[8 kyu] Generate user links
const generateLink = user => `http://www.codewars.com/users/${encodeURIComponent(user)}`

//[8 kyu] Count words
const countWords = str => str.split(/\s/g).filter(Boolean).length

//[8 kyu] Fix your code before the garden dies!
const rainAmount = mm =>
    mm < 40
      ? "You need to give your plant " + (40 - mm) + "mm of water"
      : "Your plant has had more than enough water for today!"

//[8 kyu] Freudian translator
const toFreud = str => str.replace(/[^ ]+/g,'sex')

//[8 kyu] Implement Array.prototype.filter()
Array.prototype.filter = function (func) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) newArray.push(this[i])
  }
  return newArray
}

//[8 kyu] Name on billboard
const billboard = (name, price = 30) => [...name].reduce(sum=>sum+price,0)

//[8 kyu] Training JS #4: Basic data types--Array
const getLength = arr => arr.length
const getFirst = arr => arr[0]
const getLast = arr => arr.pop()
const pushElement = arr => {
  arr.push(1)
  return arr
}
const popElement = arr => {
  arr.pop()
  return arr
}
  
//[8 kyu] Training JS #3: Basic data types--String
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
const overAbundant = ([...fnName]) => fnName.map(v=>eval(v.toLowerCase()+(v===v.toUpperCase()?'1':'2'))).join('')
function Dad(){ return overAbundant(arguments.callee.name) }
function Bee(){ return overAbundant(arguments.callee.name) }
function banana(){ return overAbundant(arguments.callee.name) }
const answer1 = () => 'no';
const answer2 = () => 'no';
const answer3 = () => 'yes';

//[8 kyu] Training JS #2: Basic data types--Number
let v1=50, v2=100, v3=150, v4=200, v5=2, v6=250
const equal1 = () => v1+v1
const equal2 = () => v3-v1
const equal3 = () => v1*v5
const equal4 = () => v4/v5
const equal5 = () => v2%v4

//[8 kyu] Training JS #1: create your first JS function and print "Helloworld!"
const helloWorld = ()=> {
  var str = 'Hello World!'
  console.log(str)
}

//[8 kyu] Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj){
  fives = []
  for(key in obj){
    key.length == 5 ? fives.push(key) : ''
    obj[key].length == 5? fives.push(obj[key]): ''
  }
  return fives
}

//[8 kyu] Training JS #10: loop statement --for
function pickIt(arr){
  //for(...)
  return [arr.filter(v=>v%2==1),arr.filter(v=>v%2==0)];
}

//[8 kyu] Training JS #13: Number object and its properties
function whatNumberIsIt(n){
  str = 'Input number is '
  n = eval(n)
  switch(true){
      case (n == Number.MAX_VALUE): return str+'Number.MAX_VALUE'
      case (n == Number.MIN_VALUE): return str+'Number.MIN_VALUE'
      case (Number.isNaN(n)): return str+'Number.NaN'
      case (n == Number.NEGATIVE_INFINITY): return str+'Number.NEGATIVE_INFINITY'
      case (n == Number.POSITIVE_INFINITY): return str+'Number.POSITIVE_INFINITY'
      default: return str+n 
  }
}

//[8 kyu] Training JS #14: Methods of Number object--toString() and toLocaleString()
const colorOf = (...rgb) => "#"+rgb.map(v=>('0'+v.toString(16)).substr(-2)).join("")

//[8 kyu] Training JS #9: loop statement --while and do..while
const padIt = (str,n) => {
  return '*'.repeat(Math.ceil(n/2)) + str + '*'.repeat(Math.floor(n/2)) 
}

//[8 kyu] Training JS #21: Methods of String object--trim() and the string template
const fiveLine = s => Array.from({length:5},(_,i)=>s.trim().repeat(i+1)).join("\n")

//[8 kyu] Training JS #11: loop statement --break,continue
const grabDoll= dolls => {
  return dolls.filter(doll=>doll == "Hello Kitty" || doll == "Barbie doll").slice(0,3)
}

//[8 kyu] Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
const howManySmaller = (arr,n) => arr.filter(v=> Math.round(v * 100) / 100 < n).length
  
//[8 kyu] Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(str,c){
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

//[8 kyu] Training JS #16: Methods of String object--slice(), substring() and substr()
function cutIt(arr){
  minLength = [...arr].sort((a,b)=>a.length-b.length)[0].length
  return arr.map(v=>v.substring(0,minLength))
}

//[8 kyu] Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(arr){
  return !Array.isArray(arr)
    ? "It's a fake array"
    : arr.includes(5) && arr.includes(13)
      ? "It's a black array"
      : "It's a white array"
}

//[8 kyu] Not so black box
console.log(blackBox.toString());
JSopenSesame();

//[8 kyu] Blood-Alcohol Content
function bloodAlcoholContent(drinks, weight, sex, time){
  A = drinks.ounces*drinks.abv;
  W = weight;
  r = sex == 'male' ? 0.73 : 0.66;
  H = time
  BAC = (A * 5.14 / W * r) - .015 * H;
  return Math.round(BAC*10000)/10000
}

//[8 kyu] Configure package json for a node application
const configuration = {
  license: 'MIT',
  name: 'bla',
  description: 'bla',
  version: '0.0.1'
}

//[8 kyu] Be Concise IV - Index of an element in an array
const find=(a,e)=>a.indexOf(e)<0?"Not found":a.indexOf(e)

//[8 kyu] SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
class Labrador extends Dog{
  constructor(n,a,g,m){
    super(n,a,g,"Labrador","Large",m,!0);
  }
}
  
//[8 kyu] Be Concise II - I Need Squares
const squaresOnly = arr => arr.filter(v=>Number.isInteger(Math.sqrt(v)))

//[8 kyu] Training JS #29: methods of arrayObject---concat() and join()
const bigToSmall = arr => [].concat(...arr).sort((a,b)=>b-a).join(">")

//[8 kyu] Training JS #34: methods of Math---pow() sqrt() and cbrt()
const isIntCube = n => Number.isInteger(Math.cbrt(n))
const cutCube = (volume, n) => isIntCube(n) && isIntCube(volume / n)

//[8 kyu] Simple Change Machine
const changeMe = moneyIn => {
  if (moneyIn === '£5') return `${'20p '.repeat(5 * 5).trim()}`
  if (moneyIn === '£2') return `${'20p '.repeat(5 * 2).trim()}`
  if (moneyIn === '£1') return `${'20p '.repeat(5 * 1).trim()}`
  if (moneyIn === '50p') return `${'20p '.repeat(2).trim()} 10p`
  if (moneyIn === '20p') return `${'10p '.repeat(2).trim()}`
  return moneyIn
}

//[8 kyu] noobCode 02: TRICKY QUESTIONS ( primitives and operator precedence)
const greaterThanLessThan = (a,b,c) => a<b<c

//[8 kyu] Arguments to Binary addition
const arr2bin = arr => arr.reduce((a,b) => a + (typeof b=='number' ? b : 0), 0).toString(2)

//[8 kyu] Circular Objects #1 - Running around in circles
const circular = { value: 'Hello World' }
circular.self = circular

//[8 kyu] Playing with cubes II
class Cube{
  constructor(n=0){
    this.setSide(n);
  }
  setSide(n=0){
    this.side = Math.abs(n);
  }
  getSide(){
    return this.side
  }
}

//[8 kyu] Localize The Barycenter of a Triangle
const barTriang = ([xA, yA], [xB, yB], [xC, yC]) =>
  [[xA, xB, xC], [yA, yB, yC]].map(points =>
    Number((points.reduce((total, point) => total + point, 0) / 3).toFixed(4))
  )

//[8 kyu] Find the Slope
function slope(points){
  const [x1,y1,x2,y2] = [...points] 
  return x1 == x2 ? 'undefined' : String((y2 - y1) / (x2 - x1))
}

//[8 kyu] Crash Override
function aliasGen(a, b){
  [a,b] = [a[0].toUpperCase(), b[0].toUpperCase()]
  if(!(/^[A-Z]+$/.test(a+b))) return "Your name must start with a letter from A - Z."
  return `${firstName[a]} ${surname[b]}`
}

//[8 kyu] Remove the time
function shortenToDate(longDate) {
  return longDate.split(",")[0]
}

//[8 kyu] Is your period late?
const periodIsLate = (last, today, cycleLength) => (today-last)/(1000*60*60*24) > cycleLength

//[8 kyu] Leonardo Dicaprio and Oscars
function leo(oscar){
  switch(true){
      case (oscar==88): return "Leo finally won the oscar! Leo is happy"
      case (oscar==86): return "Not even for Wolf of wallstreet?!"
      case (oscar<88): return "When will you give Leo an Oscar?"
      default: return "Leo got one already!"
  }
}

//[8 kyu] Days in the year
const yearDays = year => `${year} has ${(year%4===0 && year%100!==0) || year==0? 366:365} days`

//[8 kyu] Fuel Calculator
function fuelPrice(litres, pricePerLitre) {
  let discount = Math.min(Math.floor(litres/2) * 0.05,0.25)
  return Math.round(litres*(pricePerLitre-discount)*100)/100
}

//[8 kyu] Printing Array elements with Comma delimiters
function printArray(array){
  return array.join(',')
}

//[8 kyu] Formatting decimal places #0
function twoDecimalPlaces(n) {
  return Math.round(n*100)/100
}

//[8 kyu] Grasshopper - Combine strings
const combineNames = (...args) => args.join(" ")

//[8 kyu] String Templates - Bug Fixing #5
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//[8 kyu] Training JS #6: Basic data types--Boolean and conditional statements if..else
const trueOrFalse = val => String(Boolean(val))

//[8 kyu] Simple Comparison?
function add(a, b){
  return a==b
}

//[8 kyu] Did she say hallo?
function validateHello(greetings) {
  return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)
}

//[8 kyu] validate code with simple regex
const validateCode = code => /^[123]/.test(code)

//[8 kyu] Get number from string
function getNumberFromString(s) {
  return +s.replace(/\D/g,'')
}

//[8 kyu] Plural
function plural(n) {
  return n !== 1 
}

//[8 kyu] Chuck Norris VII - True or False? (Beginner)
const ifChuckSaysSo = () => 1==2

//[8 kyu] Compare within margin
const closeCompare = (a, b, margin = 0) => Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1

//[8 kyu] Fix the Bugs (Syntax) - My First Kata
const myFirstKata = (a,b) => typeof a !=='number' || typeof b !=='number' ? false : a%b + b%a

//[8 kyu] ES6 string addition
function joinStrings(string1, string2){
   return `${string1} ${string2}`
}

//[8 kyu] Reversing Words in a String
function reverse(string){
  return string.split(" ").reverse().join(" ")
}

//[8 kyu] Sum without highest and lowest number
function sumArray(array) {
  if(array == null || array.length < 2) return 0
  min = Math.min(...array);
  max = Math.max(...array);
  return array.reduce((a,b)=>a+b,0) - min - max
}

//[8 kyu] Push a hash/an object into array
items = []
items.push({a: "b", c: "d"})

//[8 kyu] To square(root) or not to square(root)
const squareOrSquareRoot = array => array.map(v=> Number.isInteger(Math.sqrt(v)) ? Math.sqrt(v) : v**2)

//[8 kyu] Enumerable Magic #1 - True for All?
const all = (array, fun) => array.every(fun)

//[8 kyu] Finish Guess the Number Game
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  guess(n) {
    if(this.lives == 0) return error();
    if(n == this.number){
      return true
    } else {
      this.lives -= 1;
      return false
    }
  }
}

//[8 kyu] Pole Vault Starting Marks
const startingMark = bodyHeight => {
  const m = (10.67 - 9.45) / (1.83 - 1.52)
  return Math.round((m * bodyHeight + 10.67 - m * 1.83) * 100) / 100
}

//[8 kyu] How old will I be in 2099?
function  calculateAge(then,now) {
  age = now-then
  switch(true){
      case (age < -1): return `You will be born in ${Math.abs(age)} years.`
      case (age == -1): return `You will be born in 1 year.`
      case (age == 0): return `You were born this very year!`
      case (age == 1): return `You are 1 year old.`
      default: return `You are ${age} years old.`
  }
}

//[8 kyu] Duck Duck Goose
const duckDuckGoose = (players, goose) =>
  players[(goose - 1) % players.length].name

//[8 kyu] Unfinished Loop - Bug Fixing #1
const createArray = n => Array.from({length:n},(_,i)=>i+1)

//[8 kyu] Simple Fun #261: Whose Move
const whoseMove = (lastPlayer, win) => win ? lastPlayer : {white: "black",black: "white"}[lastPlayer]

//[8 kyu] Contamination #1 -String-
function contamination(text, char){
  return char.repeat(text.length)
}

//[8 kyu] Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove(s){
  return s.replace(/!+$/,'')
}

//[8 kyu] Power
const numberToPower = (number, power) => Array.from(Array(power)).reduce((s, _) => s * number, 1)

//[8 kyu] Add new item (collections are passed by reference)
function addExtra( listOfNumbers ){
    return [...listOfNumbers,123]
}

//[8 kyu] Evil or Odious
const evil = n => [...n.toString(2)].filter(v=>v==1).length % 2 === 0 ? "It's Evil!" : "It's Odious!"

//[8 kyu] Multiply the number
function multiply(number){
  return number * (5**(Math.abs(number)+'').length)
}

//[8 kyu] repeatIt
const repeatIt = (str, n) => typeof str== 'string' ? str.repeat(n) : "Not a string"

//[8 kyu] Name Shuffler
function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}

//[8 kyu] Rock Paper Scissors!
const wins = {
  "scissors": "paper",
  "paper": "rock",
  "rock": "scissors"
}
const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!'
  } else if (p2 == wins[p1]){
    return 'Player 1 won!'
  } else {
    return 'Player 2 won!'
  }
};

//[8 kyu] Grasshopper - Terminal Game Turn Function
function doTurn () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

//[8 kyu] Welcome to the City
function sayHello( name, city, state ) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`
}

//[8 kyu] Broken Counter
class Counter {
  constructor() {
    this.value = 0
  }
  increase() {
    this.value++
  }
  getValue() {
    return this.value
  }
  reset() {
    this.value = 0
  }
}

//[8 kyu] Grader
function grader(score) {
  switch(true){
      case (score < 0.6 || score > 1):  return "F";
      case (score >= 0.9): return "A";
      case (score >= 0.8): return "B";
      case (score >= 0.7): return "C";
      case (score >= 0.6): return "D";
  }
}

//[8 kyu] Object Oriented Piracy
class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  isWorthIt() {
    return this.draft - this.crew * 1.5 > 20
  }
}

//[8 kyu] Character Frequency
function charFreq(message) {
  return [...message].reduce(function(acc,e){acc[e] = (e in acc ? acc[e]+1 : 1); return acc}, {});
}

//[8 kyu] Add Length
function addLength(str) {
  return str.split(" ").map(v=>v+= ' '+v.length)
}

//[8 kyu] BASIC: Making Six Toast.
function sixToast(num) {
  return Math.abs(6-num)
}

//[8 kyu] Age Range Compatibility Equation
function datingRange(age){
  range = age<14 ? [age - 0.10 * age, age + 0.10 * age]: [age/2+7, (age-7)*2]
  return range.map(v=>Math.floor(v)).join("-")
}

//[8 kyu] Classy Extentions
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

//[8 kyu] Classy Classes
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
    this.info = `${this.name}s age is ${this.age}`
  }
}

//[8 kyu] ASCII Total
const uniTotal = c => [...c].reduce((s,v)=>s+v.charCodeAt(),0)

//[8 kyu] Points of Reflection
function symmetricPoint(p, q) {
  x = q[0] - (p[0]-q[0])
  y = q[1] - (p[1]-q[1])
  return [x,y]
}

//[8 kyu] Collatz Conjecture (3n+1)
const hotpo = (n, counter = 0) => 
  n == 1 
    ? counter 
    : hotpo(n%2 === 0 ? n/2 : 3*n+1, counter+1)

//[8 kyu] Grasshopper - Terminal Game #1
function Hero (name='Hero') {
  this.name = name;
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0
}

//[8 kyu] Find the Remainder
const remainder = (a, b) => a>b? a%b : b%a

//[8 kyu] simple calculator
function calculator(a,b,sign){
  result = 'unknown value'
  if(typeof(a*b) == "number" && '+-*/'.includes(sign)){
  result = eval(a+sign+b);  
  }
  return result
}

//[8 kyu] Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove(s){
  return s.replace(/\!$/,'')
}

//[8 kyu] Training JS #7: if..else and ternary operator
function saleHotdogs(n){
  switch(true){
      case (n<5) : return n*100;
      case (n<10) : return n*95;
      default: return n*90
  }
}

//[8 kyu] Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
const remove = s => s.replace(/\!/g,'')+"!"

//[8 kyu] Grasshopper - Bug Squashing
var health = 100
var position = 0
var coins = 0
function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}

//[8 kyu] For Twins: 1. Types
const typeValidation = (v, t) => typeof v === t

//[8 kyu] Pirates!! Are the Cannons ready!??
const cannonsReady = (gunners) => {
   return Object.values(gunners).filter(v => v=="nay").length > 0 ? 'Shiver me timbers!' : 'Fire!'
}

//[8 kyu] isReallyNaN
const isReallyNaN = Number.isNaN

//[8 kyu] Safen User Input Part I - htmlspecialchars
const chars = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;',
}
const htmlspecialchars = formData => formData.replace(/[<>"&]/g, c => { return chars[c] });

//[8 kyu] Heads and Legs
function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;
  return (legs & 1 || chickens > heads || cows > heads) ? 'No solutions' : [chickens, cows]
}

//[8 kyu] Fun with ES6 Classes #1 - People, people, people
class Person {
  constructor(firstName="John",lastName="Doe", age=0, gender="Male"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  sayFullName(){
    return `${this.firstName} ${this.lastName}`
  }
  static greetExtraTerrestrials(raceName){
    return `Welcome to Planet Earth ${raceName}`
  }
}

//[8 kyu] Calculate Price Excluding VAT
//return price without vat
function excludingVatPrice(price){
  console.log(price)
  if (price == null) return -1
  return Math.round(price / 1.15 *100)/100
}

//[8 kyu] Is integer safe to use?
const SafeInteger = n => n < Number.MAX_SAFE_INTEGER

//[8 kyu] Jenny's secret message
function greet(name){
  if(name == "Johnny") name = 'my love'
  return "Hello, " + name + "!";
}

//[8 kyu] !a == a ?!
const a = '0'

//[8 kyu] Potenciation
const power = (x,y) => x**y

//[8 kyu] Geometry Basics: Circle Area in 2D
const circleArea =({radius}) => radius**2 * Math.PI

//[8 kyu] Type of sum
function typeOfSum(a, b) {
  return typeof (a+b);
}

//[8 kyu] Who ate the cookie?
function cookie(x){
  let name = 'the dog';
  if (typeof x == 'string') name = "Zach";
  if (typeof x == 'number') name = "Monica";
  return `Who ate the last cookie? It was ${name}!`
}

//[8 kyu] Define a card suit
const suits = {
  '♣': 'clubs',
  '♦': 'diamonds',
  '♥': 'hearts',
  '♠': 'spades'
}
const defineSuit = card => suits[card.substr(-1)]

//[8 kyu] Man in the west
function checkTheBucket(bucket){
  return bucket.includes("gold")
}

//[8 kyu] Kata Example Twist
// add the value "codewars" to the websites array 1,000 times
var websites = Array(1000).fill('codewars')

//[8 kyu] String cleaning
function stringClean(s){
  return s.replace(/\d/g,"")
}

//[8 kyu] Sum of Multiples
const sumMul = (n,m) => m<=n ? "INVALID" : Math.floor(m/n)*(Math.floor(m/n)+1)*(n/2);

function sumMul(n,m){
  console.log(arguments)
  if(m<1 || n<1) return "INVALID";
  return Array.from({length:Math.floor(m/n)},(_,i)=>n+n*i).reduce((sum,val)=>sum+val,0)  
}

//[8 kyu] Sleigh Authentication
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return [...arguments].join('|') == 'Santa Claus|Ho Ho Ho!'
};

//[8 kyu] Coding 3min : Jumping Dutch act
function sc(floor){
  let string = '';
  if(floor > 1){
    string+= 'Aa~ '.repeat(floor-1) + 'Pa!'
    if(floor < 7) string+=" Aa!"
  }
  return string
}

//[8 kyu] Remove duplicates from list
const distinct = a => [...new Set(a)]

//[8 kyu] Basic subclasses - Adam and Eve
class God{
  static create(){
    return [new Man, new Woman];
  }
}
class Human{}
class Man extends Human{}
class Woman extends Human{}

//[8 kyu] Training JS #18: Methods of String object--concat() split() and its good friend join()
const splitAndMerge=(str,sep)=>str.split(' ').map(w=>w.split('').join(sep)).join(' ')

//[8 kyu] Geometry Basics: Circle Circumference in 2D
const circleCircumference = ({radius}) => Math.PI*(radius*2)

//[8 kyu] Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
  let child = "daughter"
  if(sperm.endsWith("Y")) child= "son"
  return `Congratulations! You're going to have a ${child}.`
}

//[8 kyu] Is it a number?
const isDigit = s => s==parseFloat(s);

//[8 kyu] Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
const replace = s => s.replace(/[aeiou]/gi, '!');

//[8 kyu] easy logs
const logs = (x, a, b) => Math.log(a * b) / Math.log(x)

//[8 kyu] Thinkful - Number Drills: Pixelart planning
const isDivisible = (a, b) => !(a%b)

//[8 kyu] Pillars
function pillars(num_pill, dist, width) {
  return num_pill < 2
    ? 0
    : num_pill * ((dist * 100) + width) - (width * 2) - (dist * 100);
}

//[8 kyu] Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n){
  let [int,dec] = (n+'').split(".")
  if(int.length>dec.length) return Math.floor(n);
  if(dec.length>int.length) return Math.ceil(n);
  return Math.round(n)
}

//[8 kyu] Enumerable Magic #3 - Does My List Include This?
function include(arr, item){
  return arr.includes(item)
}

//[8 kyu] Enumerable Magic #2 - True for Any?
function any(arr, fun){
  return arr.some(fun)
}

//[8 kyu] Enumerable Magic #4 - True for None?
const none = (array, fun) => !array.some(fun)

//[8 kyu] Reverse List Order
const reverseList = list => list.reverse()

//[8 kyu] Training JS #5: Basic data types--Object
function animal({name,legs,color}){
  return `This ${color} ${name} has ${legs} legs.`
}

//[8 kyu] Training JS #8: Conditional statement--switch
function howManydays(month){
  var days;
  switch (true){
    case (month == 2):return 28
    case ([1,3,5,7,8,10,12].includes(month)): return 31;
    default: return 30;
  }
}

//[8 kyu] Is the date today
const isToday = date => new Date().toDateString() === date.toDateString()

//[8 kyu] They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
function isOpposite(s1,s2){
  return [...s1]
    .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
    .join('') === s2 && s1 !== '';
  
}

function isOpposite(s1,s2){
  let str = '';
  if(s1.length != s2.length || s1.length == 0 || s2.length == 0) return false;
  for(let i = 0; i < s1.length; i++){
    s1[i] === s1[i].toUpperCase() ? str += s1[i].toLowerCase() : str += s1[i].toUpperCase(); 
  }
  return str === s2;
}

//[8 kyu] Return the day
const whatday = num => ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][num-1]||"Wrong, please enter a number between 1 and 7"

//[8 kyu] What's up next?
const nextItem = (xs, item) => {
  let found = false
  let finalValue
  for (const i of xs) {
    if (found) {
      finalValue = i
      break
    }
    if (i === item) found = true
  }
  return finalValue
}

//[8 kyu] Find the force of gravity between two objects
function solution([m1,m2,d],[um1,um2,ud]) {
  const G = 6.67e-11 ;
  const conversion = { kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:.453592
                     , m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:.3048
                     } ;
  return G * m1 * conversion[um1] * m2 * conversion[um2] / ( d * conversion[ud] ) ** 2 ;
}

//[8 kyu] Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
  let input = s;
  while (n) {
    input = input.replace(/!/, "");
    n-=1;
  }
  return input;
}

//[8 kyu] Who is going to pay for the wall?
function whoIsPaying(name){
  return name.length > 2 ? [name, name.substring(0,2)] : [name]
}

//[8 kyu] Count the number of cubes with paint on
const countSquares = cuts => (cuts ? 6 * cuts**2 + 2 : 1)

//[8 kyu] Find out whether the shape is a cube
const cubeChecker = (volume, side) => side < 1 ? false : Math.pow(side,3) == volume
  
//[8 kyu] Hex to Decimal
const hexToDec = hexString => parseInt(hexString, 16);

//[8 kyu] Sentence Smash
const smash = words => words.join(' ')

//[8 kyu] Find Nearest square number
const nearestSq = n => Math.round(Math.sqrt(n))**2

//[8 kyu] Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

//[8 kyu] If you can't sleep, just count sheep!!
const countSheep = num => Array.from({length:num},(_,i)=>`${i+1} sheep...`).join('')

//[8 kyu] Palindrome Strings
function isPalindrome(line) {
  l = line+''
  return l == [...l].reverse().join('')
}

//[8 kyu] How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
  return s.reduce((s1, v1) => s1 + v1.reduce((s2, v2) => s2 + v2, 0), 0) * 20
}

//[8 kyu] Bin to Decimal
const binToDec = bin => parseInt(bin, 2);

//[8 kyu] Decibel Scale
const dBScale = intensity => 10 * Math.log10(intensity / 10 ** -12)

//[8 kyu] Count Odd Numbers below n
const oddCount = n => Math.floor(n/2) ;

//[8 kyu] Count by X
function countBy(x, n) {
  return Array.from({length:n},(_,i)=>x+x*i)
}

//[8 kyu] Simple multiplication
function simpleMultiplication(n) {
    return n%2 ? n*9 : n*8
}

//[8 kyu] Is it a palindrome?
function isPalindrome(x) {
  x=x.toLowerCase()
  return x === [...x].reverse().join('')
}

//[8 kyu] Basic Mathematical Operations
const ops = {
  '+': (v1,v2) => v1+v2,
  '-': (v1,v2) => v1-v2,
  '*': (v1,v2) => v1*v2,
  '/': (v1,v2) => v1/v2,
}
const basicOp = (o, v1, v2) => ops[o](v1,v2)

//[8 kyu] Closest elevator
const elevator = (left, right, call) => Math.abs(call-left) < Math.abs(call-right) ? 'left' : 'right'

//[8 kyu] Grasshopper - Terminal game combat function
const combat = (health, damage) => damage>health? 0: health-damage

//[8 kyu] Student's Final Grade
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75;
  return 0
}

//[8 kyu] Correct the mistakes of the character recognition software

function correct(str){
  str = str.replace(/5/g,'S')
  str = str.replace(/0/g,'O')
  return str.replace(/1/g,'I')
}

//[8 kyu] Wilson primes
const factorial = number => {
  if (number < 0) return -1
  if (number === 0) return 1
  return number * factorial(number - 1)
}
const amIWilson = p => Number.isInteger((factorial(p - 1) + 1) / (p * p))

//[8 kyu] A Needle in the Haystack
const findNeedle = haystack => "found the needle at position "+haystack.indexOf('needle')

//[8 kyu] Even or Odd
const even_or_odd = n => n%2?"Odd":"Even"

//[8 kyu] Simple Fun #1: Seats in Theater
const seatsInTheater = (nCols, nRows, col, row) => (nCols-col+1)*(nRows-row)

//[8 kyu] Convert a String to a Number!
const stringToNumber = str => +str

//[8 kyu] Third Angle of a Triangle
function otherAngle(a, b) {
  return 180-a-b;
}

//[8 kyu] 8kyu interpreters: HQ9+
function HQ9(code) {
  const t = {
  'H': 'Hello World!',
  'Q': code,
  '9': "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
  }
  return t[code] || undefined
}

//[8 kyu] A Strange Trip to the Market
const t = ['tree fiddy','3.50','three fifty']
const isLockNessMonster = s => new RegExp(t.join("|")).test(s)

//[8 kyu] Surface Area and Volume of a Box
const getSize = (l,w,h) => [2*l*w+2*l*h+2*w*h, l*w*h]

//[8 kyu] Find the Integral
const integrate = (c, e) => `${c/++e}x^${e}`

//[8 kyu] Be Concise I - The Ternary Operator
describeAge=a=>"You're a(n) "+(a<=12?"kid":a<18?"teenager":a<65?"adult":"elderly")

//[8 kyu] Simple validation of a username with regex
function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/.test(username)
}

//[8 kyu] Multiple of index
function multipleOfIndex(array) {
  return array.filter((v,i)=>v%i==0)
}

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