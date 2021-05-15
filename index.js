// Add your functions here
function map (srcArr, func) {
  let response = []
  for (let i = 0; i < srcArr.length; i++) {
      let element = srcArr[i]
      response.push(func(element))
    }

    return response;
  }
