function isZero(number){
    ans = number === 0 ? true:false
    return ans;
}

function isNonzero(number){
    if (!isZero(number)){
        return true
    }else{
        return false
    }
}
console.log(isNonzero(2));