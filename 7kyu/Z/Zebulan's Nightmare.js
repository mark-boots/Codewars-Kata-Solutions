/*
Zebulan's Nightmare
https://www.codewars.com/kata/570fd7ad34e6130455001835/train/javascript

Zebulan has worked hard to write all his python code in strict compliance to PEP8 rules. In this kata, you are a mischievous hacker that has set out to sabotage all his good code.

Your job is to take PEP8 compatible function names and convert them to camelCase. For example:

"camel_case" --> "camelCase"
"zebulans_nightmare" --> "zebulansNightmare"
"get_string" --> "getString"
"convert_to_uppercase" --> "convertToUppercase"
"main" --> "main"

*/

zebulansNightmare=s=>s.replace(/_./g,v=>v[1].toUpperCase())