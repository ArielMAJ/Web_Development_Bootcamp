let rnd;
let count=0;
while (rnd!=0) {
    count++;
    rnd = Math.floor(Math.random()*101);
}
console.log("Count: "+count+" Perct: "+rnd+"%");