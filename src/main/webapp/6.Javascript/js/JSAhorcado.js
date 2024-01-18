
let letraIntroducida = ""
let palabra = "CALLE"
let contadorIntentos = 6;


function toUpperCase(){
	letra = document.getElementById("campoLetra").value
	document.getElementById("campoLetra").value = letra.toUpperCase()
}

function reiniciar(){
	for(i=1 ; i<=5 ; i++){
		console.log("entra en el bucle, esta es la vuelta " + i)
		document.getElementById("espacio" + i).value = ""
		console.log("termina la vuelta " + i + " del bucle")
	}
}

function setLetter(){
	var letraEncontrada = false
	letraIntroducida = document.getElementById("campoLetra").value
	for(j=0;j<palabra.length;j++){
		if(letraIntroducida == palabra[j]){
			document.getElementById("espacio" + (j+1)).value = letraIntroducida
			letraEncontrada = true		
		}	
	}	
	
	document.getElementById("campoLetra").value = ""
	document.getElementById("campoLetra").focus()
		
		
	if(letraEncontrada){
		document.getElementById("mensaje").style.color ="green"
		document.getElementById("mensaje").innerHTML = "Correcto"
	}else{
		contadorIntentos = document.getElementById("intentos").textContent
		document.getElementById("mensaje").style.color ="red"
		document.getElementById("mensaje").innerHTML = "Incorrecto"
		if(contadorIntentos>1){
			document.getElementById("intentos").textContent = contadorIntentos-1
		}else{
			document.getElementById("intentos").textContent = contadorIntentos-1
			document.getElementById("mensaje").style.color ="red"
			document.getElementById("mensaje").innerHTML = "Has perdido, la palabra era " + palabra
		}
	}
}
	
