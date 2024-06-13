function processData(data){
    let resultsum = [];
    let result = 1;
    for (let i = 0; i < data.length; i++) {
        resultsum.push((data[i][0] - data[i][1]));
    }
    for (let i = 0; i < resultsum.length; i++) {
        result = result * resultsum[i];
    }
        return result
      }
console.log(processData([[2, 9], [2, 4], [7, 5]])); //28
console.log(processData([[2, 5], [3, 4], [8, 7]])); //3