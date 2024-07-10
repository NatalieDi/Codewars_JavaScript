function blackAndWhite(arr){
    if (!Array.isArray(arr)) return 'It\'s a fake array'
        else if (arr.includes(5) && arr.includes(13)) return 'It\'s a black array'
        else return 'It\'s a white array'
  }
  

console.log(blackAndWhite(5,13)) //should return "It's a fake array"
console.log(blackAndWhite([5,13])) //should return "It's a black array"
console.log(blackAndWhite([5,12])) //should return "It's a white array" 