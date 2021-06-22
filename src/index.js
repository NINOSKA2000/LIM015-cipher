import cipher from './cipher.js';

//console.log(cipher);

alert("si funciona");

// boton encriptar

function textoCifrado ()
{
//capturar valor de texto
let palabra=(document.getElementById("texto").value).toUpperCase();

//capturar valor de contraseña texto
let contrasena=document.getElementById("contraseña").value;
//console.log(contrasena);

//ejecuta la funcion con la palabra capturado en cipher.js
let cifrado=cipher.encode(contrasena,palabra);
//console.log(cifrado);

//mostrar en pantalla

document.getElementById("resultado").innerHTML= cifrado;
}

const botonCipher=document.getElementById("cipher");

botonCipher.addEventListener("click",textoCifrado);


//boton desencriptar

function textoDescifrado () 
 {
  //capturar valor de texto
  let palabra=(document.getElementById("texto").value).toUpperCase();
  
  //capturar valor del texto de contraseña
  let contrasena=document.getElementById("contraseña").value;
  //console.log(contrasena);

  //ejecuta la funcion con la palabra capturado en en cipher,js
  let decifrado=cipher.decode(contrasena,palabra);
  //console.log(decifrado);
  
  //mostrar en pantalla
  document.getElementById("resultado").innerHTML= decifrado;
  }

const botonDeCipher=document.getElementById("decipher");
botonDeCipher.addEventListener("click",textoDescifrado);


