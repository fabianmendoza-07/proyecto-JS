const cambioRate = 0.000045;

const input = document.querySelector("#usd");

const convertirBtn = document.querySelector("#convertirBtn");

const resultado = document.querySelector("#resultado");

function convertirDolarABitcoin(usd) {
  return usd * cambioRate;
}

convertirBtn.addEventListener("click", function() {
  const usd = parseFloat(input.value);
  if (!isNaN(usd)) {
    const bitcoins = convertirDolarABitcoin(usd).toFixed(8);
    resultado.textContent = `${usd} dólares son equivalentes a ${bitcoins} bitcoins.`;
  } else {
    resultado.textContent = "Entrada no válida. Por favor ingrese una cantidad de dólares válida.";
  }
});