
const no = 35;
let lastDigit = no % 10;
let rounded = no-lastDigit;
if(lastDigit >= 5){
  rounded = rounded + 10;
}
console.log(`Rounded:${rounded}`)

