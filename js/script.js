var age = prompt('Add meg az életkorod4');

switch (true) {
   case age <= 20:
      { alert('Fiatal') }
      break;

   case age >20 && age < 30:
      { alert('Középkorú') }
      break;
   default: { alert('Öreg') }
}

