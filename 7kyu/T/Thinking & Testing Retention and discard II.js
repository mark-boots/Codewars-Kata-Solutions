/*
Thinking & Testing : Retention and discard II
https://www.codewars.com/kata/56eee006ff32e1b5b0000c32/train/javascript

*/
//Discard the false and retain the true
Test.assertSimilar(testit("",0), "", "");
Test.assertSimilar(testit("1",0), "", "");
Test.assertSimilar(testit("1",1), "1", "");
Test.assertSimilar(testit("11",0), "", "");
Test.assertSimilar(testit("11",1), "1", "");
Test.assertSimilar(testit("11",2), "1", "");
Test.assertSimilar(testit("11",3), "11", "");
Test.assertSimilar(testit("11",4), "1", "");
Test.assertSimilar(testit("1234",0),"", "");
Test.assertSimilar(testit("1234",1),"1", "");
Test.assertSimilar(testit("1234",2),"1", "");
Test.assertSimilar(testit("1234",3),"12", "");
Test.assertSimilar(testit("1234",4),"1", "");
Test.assertSimilar(testit("1234",5),"13", "");
Test.assertSimilar(testit("1234",6),"12", "");
//click "Submit" try more testcase...

const testit = (s, n) => s.split('').filter((_, i) => n.toString(2)[i] === '1').join('');
