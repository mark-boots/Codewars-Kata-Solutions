//[8 kyu] Subtract the Sum
const fruits = ['kiwi','pear','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple','cucumber','pineapple','cucumber','orange','grape','orange','grape','apple','grape','cherry','pear','cherry','pear','kiwi','banana','kiwi','apple','melon','banana','melon','pineapple','melon','pineapple','cucumber','orange','apple','orange','grape','orange','grape','cherry','pear','cherry','pear','apple','pear','kiwi','banana','kiwi','banana','melon','pineapple','melon','apple','cucumber','pineapple','cucumber','orange','cucumber','orange','grape','cherry','apple','cherry','pear','cherry','pear','kiwi','pear','kiwi','banana','apple','banana','melon','pineapple','melon','pineapple','cucumber','pineapple','cucumber','apple','grape','orange','grape','cherry','grape','cherry','pear','cherry','apple','kiwi','banana','kiwi','banana','melon','banana','melon','pineapple','apple','pineapple']
const sum = n => n - [...n.toString()].reduce((a,b)=>+a + +b)
function SubtractSum(n){
  let lookup = sum(n)
  result = false;
  while(!result){
    lookup<= fruits.length ? result = fruits[lookup-1] : lookup=sum(lookup)
  }
  return result
}