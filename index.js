// Add your functions here
function map (srcArr, func) {
  let response = []
  for (let i = 0; i < srcArr.length; i++) {
      let element = srcArr[i]
      response.push(func(srcArr[i]));
    }

    return response;
  }

  function reduce (srcArr, func, startingPoint = 0) {
  	let newValue = startingPoint;
      for (let i = 0; i < srcArr.length; i++ ) {
          if(srcArr[i] === false){
              newValue = false;
              continue
          } else if (srcArr[i] === true){
              newValue = true;
              continue
          }
        newValue = func(srcArr[i],newValue);
      }
      return newValue;
  }


/*
function map (array, func) {
    let r = [];
    for (let i = 0; i < array.length; i++ ) {
      r.push(func(array[i]));
    }
    return r;
}

function reduce (array, func, startingPoint = 0) {
	let newValue = startingPoint;
    for (let i = 0; i < array.length; i++ ) {
        if(array[i] === false){
            newValue = false;
            continue
        } else if (array[i] === true){
            newValue = true;
            continue
        }
      newValue = func(array[i],newValue);
    }
    return newValue;
}

*/
