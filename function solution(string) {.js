function lastDigit(as){
    let res = 0;
    for(let i = as.length-1; 0<=i; i--){
        if(i !=0){
            res = Math.pow(as[i-1],as[i])
            console.log(res)
        }
        console.log(as[i])
    }
}

lastDigit([7,6,21])

console.log(Math.pow(2,34))
console.log(Math.pow(7, 21936950640377856))

  