/*
Swap items in a dictionary
https://www.codewars.com/kata/5a21e090f28b824def00013c

In this kata, you will take the keys and values of an object and swap them around.

You will be given a dictionary, and then you will want to return a dictionary with the old values as the keys, and list the old keys as values under their original keys.

For example, given the dictionary: {'Ice': 'Cream', 'Age': '21', 'Light': 'Cream', 'Double': 'Cream'},

you should return: {'Cream': ['Ice', 'Double', 'Light'], '21': ['Age']}
Notes:

    The dictionary given will only contain strings
    The dictionary given will not be empty
    You do not have to sort the items in the lists


*/

const switchDict = dic => {
    obj = {};
    for (const [key, value] of Object.entries(dic)){
      obj[value] ? obj[value].push(key) : obj[value] = [key]
    }
    return obj
}