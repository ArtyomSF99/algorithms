var arr = [ 1, 2, 3, 4, 5, 6, 4]
console.log(arr.length);
let mid =Math.floor((arr.length)/2);
console.log(mid);
for(let i = 0; i<arr.length/2; i++){
    
    let firstSUM = 0;
    let segundaSUM = 0;
    for(let x = 0; x<mid; x++){
      firstSUM += arr[x];
    }
    for(let y = mid+1; y<arr.length; y++){
        segundaSUM +=arr[y];
    }
    
    if(firstSUM == segundaSUM){
        console.log("the index of the desired element: " + mid)
        break;
    }
    else if(firstSUM > segundaSUM){
        mid -=1;
    }
    else if(firstSUM<segundaSUM){
        mid +=1;
    }
    
    console.log(firstSUM,segundaSUM);
}

