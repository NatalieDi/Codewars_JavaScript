function maps(x){
//     let maps2 = x.map(myFunction);
//     function myFunction(value, index, array) {
//     return value * 2;
//     }
//     return maps2
// }

return x.map(m => 2 * m);
}
console.log(maps([1, 2, 3]))