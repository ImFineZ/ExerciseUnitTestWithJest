const { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound } = require ('./app.js');

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    //const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});
test ("un dolar es igual a 140.21 yen", function(){
    expect(fromDollarToYen(1)).toBe(140.21);
});
test("Un yen es igual a 0.0062 Libras esterlinas",function(){
    expect(fromYenToPound(1)).toBe(0.0062);
});