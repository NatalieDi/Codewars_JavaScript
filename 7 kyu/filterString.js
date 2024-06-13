var filterString = function(value) {
    let result ='';
    for (let i = 0; i<value.length;i++){
        if (value.charAt(i) == isNaN()){
            result= result +value.charAt(i);
            i++;
        };
    }

    return parseInt(result) //int ("".join(re.findall(r'\d',value)))
    }
    console.log(filterString("aa1bb2cc3dd")) //123