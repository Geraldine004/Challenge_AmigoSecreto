// El principal objetivo de este desafío es fortalecer 
//tus habilidades en lógica de programación. 
//Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombreAmigos = [];

function agregarAmigo() {
	let nombreAmigo = document.getElementById('amigo').value;

	if (nombreAmigo) {
        listaNombreAmigos.push(nombreAmigo);
        mostrarAmigos();
    } else{
    	alert("Por favor, inserte un nombre.")
    }

    limpiar();

}

function limpiar(){
	document.querySelector('#amigo').value = "";
}


function mostrarAmigos(){
	let listaAux = document.getElementById('listaAmigos');
	listaAux.innerHTML = '';

	let listaAux2 = document.getElementById('resultado');
	listaAux2.innerHTML = '';

	for (let i = 0; i < listaNombreAmigos.length; i++) {
        let liAux = document.createElement('li');
        liAux.innerHTML = listaNombreAmigos[i]; 
        listaAux.appendChild(liAux);
    }
    console.log(listaNombreAmigos.length);
}


function sortearAmigo(){

	if (listaNombreAmigos.length > 0){
		let indice = Math.floor(Math.random() * listaNombreAmigos.length);
		let nombreAmigoSorteado = listaNombreAmigos[indice];

		mostrarAmigoSorteado(nombreAmigoSorteado);
	} else {
		alert("Por favor, inserte un nombre.")
	}
	
}

function mostrarAmigoSorteado(nombreAmigoSorteado){
	let listaAux = document.getElementById('listaAmigos');
	listaAux.innerHTML = '';

	let sorteado = document.getElementById('resultado');

	sorteado.innerHTML = nombreAmigoSorteado;

	listaNombreAmigos = [];

}
