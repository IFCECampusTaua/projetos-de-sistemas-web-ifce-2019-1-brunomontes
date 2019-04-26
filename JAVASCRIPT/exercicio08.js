

function reajustarSalario() {
	var salario = document.getElementById('salario').value;
	var percent;
	var aumento;
	var novoSalario;

	if (salario <= 280){
		percent = "20%";
		aumento = salario * 0.2;
		novoSalario = parseFloat(salario) + parseFloat(aumento);

		document.getElementById('naoReajustado').innerHTML = "R$" + salario;
		document.getElementById('percentAplicado').innerHTML = percent;
		document.getElementById('aumento').innerHTML = "R$" + aumento;
		document.getElementById('novoSalario').innerHTML = "R$" + novoSalario;
	}

	else if (salario > 280 && salario < 700){
		percent = "15%";
		aumento = salario * 0.15;
		novoSalario = parseFloat(salario) + parseFloat(aumento);

		document.getElementById('naoReajustado').innerHTML = "R$" + salario;
		document.getElementById('percentAplicado').innerHTML = percent;
		document.getElementById('aumento').innerHTML = "R$" + aumento;
		document.getElementById('novoSalario').innerHTML = "R$" + novoSalario;
	}

	else if (salario > 700 && salario < 1500){
		percent = "10%";
		aumento = salario * 0.1;
		novoSalario = parseFloat(salario) + parseFloat(aumento);


		document.getElementById('naoReajustado').innerHTML = "R$" + salario;
		document.getElementById('percentAplicado').innerHTML = percent;
		document.getElementById('aumento').innerHTML = "R$" + aumento;
		document.getElementById('novoSalario').innerHTML = "R$" + novoSalario;
	}

	else if (salario >= 1500 ){
		percent = "5%";
		aumento = salario * 0.05;
		novoSalario = parseFloat(salario) + parseFloat(aumento);

		document.getElementById('naoReajustado').innerHTML = "R$" + salario;
		document.getElementById('percentAplicado').innerHTML = percent;
		document.getElementById('aumento').innerHTML = "R$" + aumento;
		document.getElementById('novoSalario').innerHTML = "R$" + novoSalario;
	}
}
