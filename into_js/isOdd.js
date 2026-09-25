function isEven(number) {
  return number % 2 === 0;
}
function isOdd(number){
    if (!isEven(number)){
        return true;
    }else{
        return false
    }
}
console.log(isOdd(3));