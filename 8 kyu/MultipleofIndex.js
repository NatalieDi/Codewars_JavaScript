/*[[22, -6, 32, 82, 9, 25], [-6, 32, 25]],
[[68, -1, 1, -7, 10, 10], [-1, 10]],
[[11, -11], [-11]],
[[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68], [-85, 72, 0, 68]],
[[28,38,-44,-99,-13,-54,77,-51], [38, -44, -99]],
[[-1,-49,-1,67,8,-60,39,35], [-49, 8, -60, 35]],
[[0, 2, 3, 6, 9], [0, 2, 6]]
*/

function multipleOfIndex(array) {
    let result = [];
    
    for(let i=0; i<array.length;i++){
        if (array[i] % i==0){
            result.push(array[i]);
        }
        else if (array[i] == 0) {
			result.push(array[i]);
		}
	}
        return result;
     }
	
  console.log(multipleOfIndex([0,2,3,6,9]));