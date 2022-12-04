var option1 = [1,2,3];
var option2 = [1,2,3,4];
var option3 = [1,2,3,4,5];
var option4 = [1];

function arrayToBST(list) {
  
  var middle = Math.floor(list.length/2);

  if(list.length < 1) {
    return null;
  }

  else if (list.length > 1) {
    return {
      root: list[middle],
      left: arrayToBST(list.slice(0, middle)),
      right: arrayToBST(list.slice(middle + 1, list.length))
    };
  }

  else {
    return {
      root: list[0],
      left: null,
      right: null
    };
  }
}

console.log(arrayToBST(option3));