btn = document.getElementById('btnCalcular');
btn.addEventListener('click', calculoIMC);

function calculoIMC() {
  var altura = parseFloat(document.getElementById('txtAltura').value);
  var peso = parseFloat(document.getElementById('txtPeso').value);

  var imc = peso / (altura * altura);
  var div = document.getElementById('divIMC');
  div.innerHTML = `O IMC é: <strong>${imc.toFixed(2)}</strong>`;
}


