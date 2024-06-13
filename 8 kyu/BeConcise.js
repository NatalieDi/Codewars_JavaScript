function find(array,element){let a=array.indexOf(element);return a!=-1?a:"Not found"}

  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "Lorem Ipsum"));// 3
  console.log(find([2,3,5,7,11], 5))// 2
  console.log(find([2,3,5,7,11], 11)) // 4
  console.log(find([2,3,5,7,11], 3))// 1
  console.log(find([2,3,5,7,11], 2))// 0
  console.log(find([2,3,5,7,11], 7))// 3
  console.log(find([2,3,5,7,11], 1))// "Not found"
  console.log(find([2,3,5,7,11], 8))// "Not found"
  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "Hello World"))// 1
  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], "lorem ipsum"))// "Not found"
  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], false))// 2
  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], true))// 0
  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], Math.PI))// 5
  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], 3.14))// "Not found"
  console.log(find([true, "Hello World", false, "Lorem Ipsum", 6, Math.PI], 6))//4