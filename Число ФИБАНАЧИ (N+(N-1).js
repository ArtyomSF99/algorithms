function fibanachi (n){
    if(n < 0){
        return 0;
    }
    if(n <= 2){
        return 1;
    }
    return fibanachi(n-1) + fibanachi(n-2)
}
console.log(fibanachi(7))

function iterationFibanachi(n) {
    if (n <= 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    let prev = 1;
    let result = 1;
    for (let i=0; i< n - 2; i++) {
        let tmp = result;
        result +=prev;
        prev = tmp;
    }
    return result;
}
console.log(iterationFibanachi(7))