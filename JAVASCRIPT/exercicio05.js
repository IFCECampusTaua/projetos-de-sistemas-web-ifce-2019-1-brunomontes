var btnCalc = document.getElementById("btnResto");

function calcResto (val1, val2){
	var val1 = document.getElementById("number1").value;
	var val2 = document.getElementById("number2").value;
	return (val1 % val2);
}

btnCalc.addEventListener('click', function() {
	alert(calcResto())
})
