/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
                                                         id neve
-- element JS reprezentációja ---document.getElementById('element-one')
--esemény kiválasztása--onclick
--funkcionalitás leírása-- function () {.. elővenni a már kiválasztott eleme ID vel 
                            és clssList.add al beírni a blurt.}
Belső állapot-/state/--
*/
var isBlured = false;
// action (esemény)
document.getElementById('element-one').onclick = function () { // state change-- esemény hatására belső állapot változás
  isBlured = !isBlured

  // render
  if (isBlured) { document.getElementById('element-one').classList.add("blur"); }
  else { document.getElementById('element-one').classList.remove("blur"); }
};
/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/
var isHoveredOver = false;

document.getElementById('element-two').onmouseover = function () {
  isHoveredOver = true;
  renderSecondBox();
}

document.getElementById('element-two').onmouseout = function () {
  isHoveredOver = false;
  renderSecondBox();
}

function renderSecondBox() {

  if (isHoveredOver) { document.getElementById('element-two').style.backgroundColor = 'red'; }
  else {
    document.getElementById('element-two').style.backgroundColor = '';
  }
}


/*
3. doboz 3,25:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
document.getElementById('element-three').ondblclick = function () {
  document.getElementById('element-three').firstElementChild.innerHTML = getRandomArbitrary(1, 20)
}







/*

4. doboz:

Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

document.getElementById('element-four').onclick = function () {
  document.getElementById('element-four').classList.add('hidden');

  setTimeout(function () { document.getElementById('element-four').classList.remove('hidden') }, 2000);

}






/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/
/* Kiválasztom a megadott classot és utána gyarekeit
console.log(document.querySelector('.container').children)
                              VAGY 
ki lehet választani azonnal az összes gyereket az ALL lal(ha van id vagy class és ua az a neve)
console.log(document.querySelectorAll('.shape'));*/
document.getElementById('element-five').onclick = function () {
  var dobozok = document.querySelectorAll('.shape');
for (var i of dobozok) {
    i.style.borderRadius = '50%'}
setTimeout(function(){for (var i of dobozok) {
    i.style.borderRadius = ''}},2000)
}
/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/
document.getElementById('box-6').onsubmit = function(event){
  event.preventDefault();
  document.getElementById('element-six').firstElementChild.innerHTML = event.target.elements.boxNumber.value;

}


/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/
document.getElementById('box7-input').onkeypress = function (event){
  document.getElementById("element-seven").firstElementChild.innerHTML = event.key;
 
}

/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/


/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/

console.log(document.all)