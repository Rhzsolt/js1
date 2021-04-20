var db =prompt ( 'Add meg a darabszámot!')
var tip = prompt('Milyen típus?')


var tipus = tip ==='student' ? 300 : 350;

var eng = db > 10 ? 0.9 : 1 ;

var ar = db * tipus * eng ;




alert (ar);