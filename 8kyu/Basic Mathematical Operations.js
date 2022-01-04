//[8 kyu] Basic Mathematical Operations
const ops = {
    '+': (v1,v2) => v1+v2,
    '-': (v1,v2) => v1-v2,
    '*': (v1,v2) => v1*v2,
    '/': (v1,v2) => v1/v2,
  }
  const basicOp = (o, v1, v2) => ops[o](v1,v2)