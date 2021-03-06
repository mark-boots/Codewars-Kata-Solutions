/*
Bob's Jump
https://www.codewars.com/kata/5eea52f43ed68e00016701f3

Bob has ladder. He wants to climb this ladder, but being a precocious child, he wonders about exactly how many ways he could to climb this n size ladder using jumps of up to distance k.

Consider this example...

n = 5
k = 3

Here, Bob has ladder of length 5, and with each jump, he can ascend up to 3 steps (he can either jump step 1 or 2 or 3). This gives the below possibilities

1 1 1 1 1
1 1 1 2
1 1 2 1 
1 2 1 1
2 1 1 1
1 2 2
2 2 1
2 1 2
1 1 3
1 3 1
3 1 1
2 3
3 2

Your task to calculate number of ways to climb ladder of length n with upto k steps for Bob. (13 in above case)

Constraints:

    1 <= n <= 50
    1 <= k <= 15
*/

const countWays = (n, k) => {
    const ladder = Array.from({length:k},(_,i)=>2**i);
    for(let i = 0; i < n-k; i++) ladder.push(ladder.slice(-k).reduce((sum,val)=>sum+val))
    return ladder[n-1]
}