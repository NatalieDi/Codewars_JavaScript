const reverseSeq = n => {
    let mas = [];
    for(let i = n; i>0; i--){
        mas.push(i)
    }
    return mas;
  };
  console.log(reverseSeq(5));
  console.log(reverseSeq(2));