function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    let result = a / b
    return result
}
function increment(n){
    return n=n+1
}
function decrement(n){
    return
}
function makeInt(n){
    return parseInt(n, 10)
}
function preserveDecimal(n){
    return parseFloat(n)
}
console.log(makeInt("130"))
console.log(preserveDecimal(80))
console.log(makeInt(130))
console.log(preserveDecimal("494"))