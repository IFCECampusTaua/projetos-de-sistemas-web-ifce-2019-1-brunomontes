var btnChange = document.getElementById("changeTitle");

function changeTitleBrowser(){
	document.title = 'IFCE2019';
}

btnChange.addEventListener('click', function(){

	changeTitleBrowser()

})