let total = 149.33, 
product = 'Hiking Boots', 
discounted = true;

a = product.toLowerCase();
b = product.toUpperCase();
total += 324.00;

console.log(a,b);


c = +(1.2+1.1).toFixed(3);
d = (1.2+1.1).toFixed(3);

console.log(c , d);
console.log(typeof c ,typeof d);

showMessage(total);

function priceCalc(value){
    let price = value * 42;
    return price;  // super important to return, otherwise value will be undefined

}

function priceCalc2(value){
    return value * 42;  // super important to return, otherwise value will be undefined

}
let test = priceCalc(2);
console.log(test);

console.log(priceCalc(2));
console.log('Second function ' + priceCalc2(2));

//best practice for the above would look like:

function getSecretCode(value){
    let code = value * 42;
    return code;
}

let secretCode = getSecretCode(2);
showMessage('This is the secret code' + secretCode);

let mySymbol = Symbol();

let person = {
    name: 'John',
    age: 12,
    partTime: false
    [mySymbol]: 'secretInformation' 
};

showMessage(person.age)