function bmiCalculator(weight, height){
	let bmi = weight / Math.pow(height,2);
	return Math.round(bmi);
}