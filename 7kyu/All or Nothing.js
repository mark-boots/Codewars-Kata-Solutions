/*
All or Nothing
https://www.codewars.com/kata/65112af7056ad6004b5672f8

Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect. Given a potentially incomplete answer key and the student's answers, write a function that determines whether or not a student can still score 100%. Incomplete questions are marked with an underscore, "_".

["A", "_", "C", "_", "B"]   # answer key
["A", "D", "C", "E", "B"]   # student's solution

➞ True

# Possible for student to get all questions correct.

["B", "_", "B"]   # answer key
["B", "D", "C"]   # student's solution

➞ False

# First question is correct but third is wrong, so not possible to score 100%.

["T", "_", "F", "F", "F"]   # answer key
["F", "F", "T", "T", "T"]   # student's solution

➞ True

# Possible for student to get all questions incorrect.
Examples

(["B", "A", "_", "_"], ["B", "A", "C", "C"]) ➞ True

(["A", "B", "A", "_"], ["B", "A", "C", "C"]) ➞ True

(["A", "B", "C", "_"], ["B", "A", "C", "C"]) ➞ False

(["B", "_"], ["C", "A"]) ➞ True

(["B", "A"], ["C", "A"]) ➞ False

(["B"], ["B"]) ➞ True

(["_"], ["B"]) ➞ True
Notes

Test has at least one question.
len(key) == len(answers)

*/

function possiblyPerfect([...key],[...answers]) {
    const correct = key.filter((v,i)=>v==answers[i]);
    const incorrect = key.filter((v,i)=>v!==answers[i] && v!=="_");
    return correct.length && incorrect.length ? false : true;
}

// possiblyPerfect=(k,a)=>!(k.filter((v,i)=>v==a[i]).length&&k.filter((v,i)=>v!==a[i]&&v!=="_").length)