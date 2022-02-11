function timeLeftInLife(age) {

    let yearsLeft = 90 - age;
    let monthsLeft = yearsLeft * 12;
    let weeksLeft = yearsLeft * 52;
    let daysLeft = yearsLeft * 365;
    
    console.log("You have " + daysLeft + " days, " + weeksLeft +
    " weeks, and " + monthsLeft + " months left.")
}

