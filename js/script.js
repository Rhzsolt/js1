var db =prompt ( 'Add meg a darabszámot!')
var tip = prompt('Milyen típus?')


var tipus = { student : 300,
            adult :350,
             retard : 280}[tip];

var eng = db > 10 ? 0.9 : 1 ;

var ar = db * tipus * eng ;




alert (ar);