//[8 kyu] I love you, a little , a lot, passionately ... not at all
t = ['I love you','a little','a lot','passionately','madly','not at all']
howMuchILoveYou = n => t[--n%t.length]