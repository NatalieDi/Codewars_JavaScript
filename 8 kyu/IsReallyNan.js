const isReallyNaN = (val) => {
        return Number.isNaN(val)
  };


console.log(isReallyNaN(37))
console.log(isReallyNaN('37'))
console.log(isReallyNaN(NaN))
console.log(isReallyNaN(undefined))