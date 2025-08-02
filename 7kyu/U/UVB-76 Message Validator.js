/*
UVB-76 Message Validator
https://www.codewars.com/kata/56445cc2e5747d513c000033/train/javascript

In Russia, there is an army-purposed station named UVB-76 or "Buzzer".

Most of time specific "buzz" noise is being broadcasted, but on very rare occasions, the buzzer signal is interrupted and a voice transmission in Russian takes place.

Transmitted messages have always the same format like this:

MDZHB 01 213 SKIF 38 87 23 95
or

MDZHB 80 516 GANOMATIT 21 23 86 25
Message format consists of following parts:

Initial keyword "MDZHB";
Two groups of digits, 2 digits in first and 3 in second ones;
Some keyword of arbitrary length consisting only of uppercase letters;
Final 4 groups of digits with 2 digits in each group.
Your task is to write a function that can validate the correct UVB-76 message. Function should return true if message is in correct format and false otherwise.

*/

validate=m=>/^MDZHB \d{2} \d{3} [A-Z]+(\s\d{2}){4}$/.test(m)