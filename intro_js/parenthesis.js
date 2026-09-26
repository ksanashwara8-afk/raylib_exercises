function parenthesis(number) {
  if (number === 0) {
    return "";
  }
  result = "(" + parenthesis(number - 1) + ")";
 
  return result;
}
console.log(parenthesis(5));

