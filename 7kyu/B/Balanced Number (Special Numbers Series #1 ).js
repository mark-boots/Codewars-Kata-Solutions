//[7 kyu] Balanced Number (Special Numbers Series #1 )
const balancedNum = number => {
    const stringNumber = String(number)
    const numbers = Array.from(
      { length: (stringNumber.length - 1) / 2 },
      (_, index) => stringNumber[index] - stringNumber[stringNumber.length - 1 - index]
    )
    return numbers.reduce((total, number) => total + number, 0) === 0 ? 'Balanced' : 'Not Balanced'
  }