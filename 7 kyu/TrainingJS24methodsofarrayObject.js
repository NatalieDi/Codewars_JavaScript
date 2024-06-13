function threeInOne(arr){
   let result = [];
   for(let i = 0;i<arr.length; i+=3){
    let sum = 0;
     for(let j=0; j<3; j++){
        sum+=arr[i+j];}
          result.push(sum)}
        return result
    }
   
  console.log(threeInOne( [1,2,3])) //[6]
  console.log(threeInOne( [1,2,3,4,5,6])) //[6,15]
  console.log(threeInOne( [1,2,3,4,5,6,7,8,9])) //[6,15,24]
  console.log(threeInOne( [1,3,5,2,4,6,7,7,7])) //[9,12,21])