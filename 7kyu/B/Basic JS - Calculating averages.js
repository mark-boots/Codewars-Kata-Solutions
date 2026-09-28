//[7 kyu] Basic JS - Calculating averages
Calculator.average = (...args) => args.reduce((a,b)=>a+b,0) / args.length || 0