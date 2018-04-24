function somme() {   
   var a = parseInt(document.getElementById('number-a').value);
   var b = parseInt(document.getElementById('number-b').value);
   if( isNaN(a) || isNaN(b) ) {
      alert('valeurs incorrectes! Veuillez entrer des nombres!');
      document.getElementById('number-a').value = 0;
      document.getElementById('number-b').value = 0;   
   }
   document.getElementById('result').innerHTML = 'Résultat : ' + (a+b);
}