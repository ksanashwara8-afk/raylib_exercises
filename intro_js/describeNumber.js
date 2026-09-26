function describeNumber(number){
    let description = "zero";
    if (number > 0){
        description = "positive";
    }else if(number < 0){
        description = "neagative";
    }
    return description;
}
console.log(describeNumber(-2));