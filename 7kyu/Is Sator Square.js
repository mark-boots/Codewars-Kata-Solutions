/*
Is Sator Square?
https://www.codewars.com/kata/5cb7baa989b1c50014a53333

A Discovery

One fine day while ploughing the fields, Farmer Arepo found a stone tablet with symbols carved on it... he knew such artifacts may show a message in four directions, so he wisely kept it and resumed turning the soil. He found more tablets, but with many crops to sow he had no time to decipher each one.
Your Task

Please help Farmer Arepo by inspecting each tablet to discern whether or not it shows a Sator Square!
The Square

    is a two-dimentional palindrome (made from words of equal length)

    observes four symmetries: identity, 180-degree rotation, and two diagonal reflections

    can be read:
        left-to-right (across)
        top-to-bottom (down)
        bottom-to-top (up)
        right-to-left (reverse)

    can be rotated 180 degrees and all words still read in all directions

    is exemplified here in how to read a word ("TUBA") in the four ways:

                         down
                          v
           B A T S    B A T S    B A T S    B A T S
           A B U T    A B U T    A B U T    A B U T < reverse
  across > T U B A    T U B A    T U B A    T U B A
           S T A B    S T A B    S T A B    S T A B
                                   ^
                                   up

Some Details

    tablet (square) dimensions range from 2x2 to 33x33 inclusive
    characters range from ascii ordinals 33 to 127 inclusive
    tablets may contain characters that look similar yet are different
    you are not permitted to mutate the input

Input

tablet  //  a 2D char list (2 <= n <= 33)

Output

true or false  //  whether or not the tablet is a sator square

Enjoy!
*/

const isSatorSquare = (t,s=t.length-1) => t.every((r,y) => r.every((c,x) => c==t[x][y] && c==t[s-x][s-y]))