//[8 kyu] Calculate BMI
function bmi(weight, height) {
    let bmi = weight/height**2;
    switch(true){
        case (bmi<=18.5): return "Underweight";
        case (bmi<=25): return "Normal";
        case (bmi<=30): return "Overweight";
        default: return "Obese";
    }
  }