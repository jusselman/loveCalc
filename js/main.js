function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  if (bmi < 18.5) {
    return 'Your BMI is ' + bmi + ', your underweight.';
  } else if (bmi < 18.5 && bmi >= 24.9) {
    return 'Your BMI is ' + bmi + ', your weight is average.';
  } else if (bmi > 24.0) {
    return 'Your BMI is ' + bmi + ' you fat fuck.';
  } else {
    return "I don't even know what to say";
  }
}

// var weight = prompt('Please type your weight');
// var height = prompt('Please type your height');

// function calcBMI(bmi) {

// }

bmiCalculator();

// calcBMI();
