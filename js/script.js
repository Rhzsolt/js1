var quantity = 0;
var qua = 0;

var quantity = prompt('Add meg a darabszámot ha diák vagy');

var qua = prompt('Add meg a darabszámot ha felnőtt vagy');


var diak = quantity * 300;
var k = diak * 0.1;

var feln = qua * 350;
var n = feln * 0.1;5

var diaki = quantity > 10 ? diak - k : diak;
var felnki = qua > 10 ? feln - n :feln;
alert( diaki > 0 ? diaki : felnki);