reverse = function(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result[array.length - i - 1] = array[i]
    }
    return result
    //return array.reverse()
  }
  console.log(reverse([210, 634, 902, 283])) //["two",14,null,1]