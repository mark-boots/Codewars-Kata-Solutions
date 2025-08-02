/*
It is written in the stars
https://www.codewars.com/kata/5888a57cbf87c25c840000c6

Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the star_sign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

    Aquarius ------ 21 January - 19 February
    Pisces --------- 20 February - 20 March
    Aries ---------- 21 March - 20 April
    Taurus -------- 21 April - 21 May
    Gemini -------- 22 May - 21 June
    Cancer -------- 22 June - 22 July
    Leo ------------- 23 July - 23 August
    Virgo ----------- 24 August - 23 September
    Libra ----------- 24 September - 23 October
    Scorpio -------- 24 October - 22 November
    Sagittarius ---- 23 November - 21 December
    Capricorn ----- 22 December - 20 January


Test info: 100 random tests (dates range from January 1st 1940 until now)
*/

const s=[[21,'Aquarius'],[20,'Pisces'],[21,'Aries'],[21,'Taurus'],[22,'Gemini'],[22,'Cancer'],[23,'Leo'],[24,'Virgo'],[24,'Libra'],[24,'Scorpio'],[23,'Sagittarius'],[22,'Capricorn']]

const starSign=x=>(x.getDate()<s[m=x.getMonth()][0]?s[(m+11)%12]:s[m])[1]
