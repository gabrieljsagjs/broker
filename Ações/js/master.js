var valores = document.getElementsByClassName("valor");

  for (var i = 0; i < valores.length; i++) {
    valores[i].addEventListener('input', function() {
      var valor = parseFloat(this.textContent);
      var row = this.parentNode;

      if (valor < 1) {
        row.classList.remove('red-row');
        row.classList.add('green-row');
      } else {
        row.classList.remove('green-row');
        row.classList.add('red-row');
      }
    });
  }