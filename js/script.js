var age = prompt('Add meg az életkorod!');

switch (true) {
   case age <= 20:
      { alert('Fiatal') }
      break;

   case age >20 && age < 60:
      { alert('Középkorú') }
      break;
   default: { alert('Öreg') }
}

