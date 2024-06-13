function spacey(array) {
    let result = [];
    let res = '';
    for (let key of array) {
        res = res + key;
        result.push(res);
    }
    return result
  }


console.log(spacey(['i','have','no','space']));
console.log(spacey(["kevin","has","no","space"]));