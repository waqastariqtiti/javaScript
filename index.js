function typeOfValue(giveValue) {
    return typeof giveValue
}

console.log(typeOfValue("saad"));
function convertTypes(value) {
    let num = Number(value);
    let str = String(value);
    let bool = Boolean(value);
    
    return { num, str, bool };
}

console.log(convertTypes("123")); 
console.log(convertTypes("abc"));