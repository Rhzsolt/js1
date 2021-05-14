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
document.getElementById('element-one').onclick = function () 
{ // state change-- esemény hatására belső állapot változás
  isBlured = !isBlured
 
// render
  if (isBlured)
  {document.getElementById('element-one').classList.add("blur");}
 else
 {document.getElementById('element-one').classList.remove("blur");}
};
/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/
var isHoveredOver = false;

document.getElementById('element-two').onmouseover = function () 
{ isHoveredOver = true;
  renderSecondBox();}

document.getElementById('element-two').onmouseout = function () 
{ isHoveredOver = false;
  renderSecondBox();}

function renderSecondBox() {
 
  if (isHoveredOver) {document.getElementById('element-two').style.backgroundColor = 'red';}
  else {
    document.getElementById('element-two').style.backgroundColor = '';}
  }


/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/


/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/


/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/


/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/


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