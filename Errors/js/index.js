try {
	adddlert("Bienvenue !");
}

catch(err) {
	document.getElementById('demo').innerHTML = err.message;
}