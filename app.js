const sum = (a,b)=>{
    return a + b;
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * 140.21;
    return valueInYen;
 }
 
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0062;
    return valueInPound;
} 

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};