/*
Get Zodiac Sign
https://www.codewars.com/kata/5a376259b6cfd77ca000006b

Your task is to get Zodiac Sign using input day and month.

For example:

getZodiacSign(1,5) => 'Taurus'
getZodiacSign(10,10) => 'Libra'
Correct answers are (preloaded):

const signs = ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius']
P.S. Each argument is correct integer number.

WESTERN ASTROLOGY STAR SIGN DATES

Aries (March 21-April 19)
Taurus (April 20-May 20)
Gemini (May 21-June 20)
Cancer (June 21-July 22)
Leo (July 23-August 22)
Virgo (August 23-September 22)
Libra (September 23-October 22)
Scorpio (October 23-November 21)
Sagittarius (November 22-December 21)
Capricorn (December 22-January 19)
Aquarius (January 20 to February 18)
Pisces (February 19 to March 20)

*/

const dates = [
    [ [12, 22], [ 1, 19], 'Capricorn'   ],
    [ [ 1, 20], [ 2, 18], 'Aquarius'    ],
    [ [ 2, 19], [ 3, 20], 'Pisces'      ], 
    [ [ 3, 21], [ 4, 19], 'Aries'       ],
    [ [ 4, 20], [ 5, 20], 'Taurus'      ],
    [ [ 5, 21], [ 6, 20], 'Gemini'      ],
    [ [ 6, 21], [ 7, 22], 'Cancer'      ],
    [ [ 7, 23], [ 8, 22], 'Leo'         ],
    [ [ 8, 23], [ 9, 22], 'Virgo'       ],
    [ [ 9, 23], [10, 22], 'Libra'       ],
    [ [10, 23], [11, 21], 'Scorpio'     ],
    [ [11, 22], [12, 21], 'Sagittarius' ],
  ]
  const getZodiacSign = (day, month) => {
    return dates.find(([ [m1, d1], [m2, d2] ]) => (month == m1 && day >= d1 || (month == m2 && day <= d2)))[2]
  }


/*
dates=[[12,22,1,19],[1,20,2,18],[2,19,3,20],[3,21,4,19],[4,20,5,20],[5,21,6,20],[6,21,7,22],[7,23,8,22],[8,23,9,22],[9,23,10,22],[10,23,11,21],[11,22,12,21]]
getZodiacSign=(d,m)=>signs[dates.findIndex(([m1,d1,m2,d2])=>(m==m1&&d>=d1||(m==m2&&d<= d2)))]
*/