//[8 kyu] A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
const yourFutureCareer = (career = Math.random()) => 
  career <= .32 ? 'FrontEnd Developer' : career <= 0.65 ? 'BackEnd Developer' : 'Full-Stack Developer'
yourFutureCareer();
