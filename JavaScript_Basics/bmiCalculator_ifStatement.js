function bmiCalculator (weight, height) {
    let bmi = weight/Math.pow(height,2);
    
    if (bmi>24.9){
        return "Your BMI is " + bmi + ", so you are overweight."
    } else if(bmi>18.5){
        return "Your BMI is " + bmi + ", so you have a normal weight."
    } else {
        return "Your BMI is " + bmi + ", so you are underweight."
    }
}