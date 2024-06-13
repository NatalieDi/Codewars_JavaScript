
function secondSymbol(s, symbol) {
    let k=0;
    for(let i=0; i<s.length; i++){
        if (s[i]===symbol) k++; 
        if (k===2) return i; 
    }
        if (k!==2)  return -1;

}
console.log(secondSymbol('Hello world!!!','l')) //  3
console.log(secondSymbol('Hello world!!!', 'A'))// -1