function toCamelCase(str){
    for(let i=0; i<str.length; i++){
      if(str[i] === '-' || str[i] === '_') {
        str.splice(i);
        str[i+1].toUpperCase(); 
      }
    }
     return str;
    }