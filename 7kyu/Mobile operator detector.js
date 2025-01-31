/*
Mobile operator detector
https://www.codewars.com/kata/55f8ba3be8d585b81e000080/train/javascript

When a warrior wants to talk with another one about peace or war he uses a smartphone. In one distinct country warriors who spent all time in training kata not always have enough money. So if they call some number they want to know which operator serves this number.

Write a function which accepts number and return name of operator or string "no info", if operator can't be defined. number always looks like 8yyyxxxxxxx, where yyy corresponds to operator.

Here is short list of operators:

039 xxx xx xx - Golden Telecom
050 xxx xx xx - MTS
063 xxx xx xx - Life:)
066 xxx xx xx - MTS
067 xxx xx xx - Kyivstar
068 xxx xx xx - Beeline
093 xxx xx xx - Life:)
095 xxx xx xx - MTS
096 xxx xx xx - Kyivstar
097 xxx xx xx - Kyivstar
098 xxx xx xx - Kyivstar
099 xxx xx xx - MTS

*/

const ops = {
  8039: "Golden Telecom",
  8050: "MTS",
  8063: "Life:)",
  8066: "MTS",
  8067: "Kyivstar",
  8068: "Beeline",
  8093: "Life:)",
  8095: "MTS",
  8096: "Kyivstar",
  8097: "Kyivstar",
  8098: "Kyivstar",
  8099: "MTS",
};
const detectOperator = (a) => ops[~~(a / 10 ** 7)] || "no info";
