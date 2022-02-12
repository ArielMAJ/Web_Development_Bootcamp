function fibonacciGenerator(n) {
    if (n<=0){
        return [];
    } else if (n===1){
        return [0];
    } else if (n===2){
        return [0,1];
    } else {
        let fib = [0,1];
        for (let i=3; i<=n; i++){
            fib.push(fib[i-2]+fib[i-3]);
        }
        return fib;
    }
}