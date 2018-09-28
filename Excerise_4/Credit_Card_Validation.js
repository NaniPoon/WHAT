function Credit_Card_Validation (numbers){
    var total = 0;
    
    for (i =0; i < numbers.length ; i ++){
        numbers = numbers.replace("-","");
          
    }
       for (i =0; i < numbers.length ; i ++){
        total += parseInt(numbers[i]);  
    }

    if (numbers.length !== 16 || total < 16 || parseInt(numbers.slice(-1))%2 != 0 || numbers.split(numbers[0]).length-1  == 16){
        return false

    }

    
    return true
    
}

console.log(Credit_Card_Validation ("4444-4444-4444-4444"));

