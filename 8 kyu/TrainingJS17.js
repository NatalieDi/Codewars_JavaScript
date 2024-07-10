function firstToLast(str,c){
    str = str.toLowerCase();
    if (str.indexOf(c) == -1) return -1
    else return str.lastIndexOf(c) - str.indexOf(c)
  }
console.log(firstToLast("ababc",'a'))// 2
console.log(firstToLast("ababc","c"))// , 0
console.log(firstToLast("ababc","d"))// -1