/*
Sum of a Beach
https://www.codewars.com/kata/5b37a50642b27ebf2e000010

Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
Examples

sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0

*/

const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/gi)||[]).length