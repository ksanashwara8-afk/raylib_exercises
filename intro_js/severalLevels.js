function h(number){
    return number * 2;
}

function g(number){
    return h(number);
}
function f(number){
    return g(number);
}

console.log(f(5));