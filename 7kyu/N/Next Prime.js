//[7 kyu] Next Prime
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
const nextPrime = num => {
   while(!isPrime(++num)){};
   return num;
};