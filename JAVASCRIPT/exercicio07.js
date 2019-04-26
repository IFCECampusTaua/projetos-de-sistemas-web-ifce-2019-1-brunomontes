

function analizador() {
	valor = document.getElementById('cText').value;

	if (valor >= 0 && valor < 10){
		alert("Insuficiente")
	} 
	else if (valor >= 10 && valor <14){
		alert("Bom")
	}
	else if (valor > 14){
		alert("Muito Bom")
	}
}