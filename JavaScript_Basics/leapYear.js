function isLeap(year) {  
    if ((year%4!==0) || (year%100===0 && year%400!==0)){
       console.log("Not leap year.");
    } else {
        console.log("Leap year.");
    }
}