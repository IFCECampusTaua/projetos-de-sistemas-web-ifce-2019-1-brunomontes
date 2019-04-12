var botao = document.getElementById("btn");

/*Função criada para gerar um número aleatório entre 2 números aleatórios.*/
function numRand(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

botao.addEventListener('click', function() {
	alert(numRand(0, 50))
})