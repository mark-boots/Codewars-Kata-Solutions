/*
Money Match: Double or Nothing
https://www.codewars.com/kata/5d378318e04cd7001ad72a27/train/javascript

My roommate and I occasionally make wagers on if we can beat each other in Super Smash Bros. Being the competitor I am, I can't take a loss without getting a chance at redemption. Often times, this manifests in the form of a "Double or nothing" bet. Rather than paying up, the wager will instead be doubled, and an additional round will be played.

...This consistently results in me losing more money than I initially wagered.

Given the amount of cash on hand, the initial wager, and the number of rounds played, return the amount of money that I'll have left after our gam(bl)ing session has concluded.

If I can't afford to pay up, return "I'll pay you back later" instead ;)

*/

const doubleOrNothing = (cash, wager, losses) => {
  const loss = wager * 2 ** (losses - 1);
  return cash >= loss ? cash - loss : "I'll pay you back later";
};