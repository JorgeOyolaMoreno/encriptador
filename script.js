var input = document.getElementById('input');
var output = document.getElementById('output');
input.focus();
output.style.display = "none";




// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let encriptada = ""
function encriptar(){

    var mensaje = input.value;
    encriptada = mensaje.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/ai/g, "a");
     output.value = encriptada;
     document.getElementById("imagen").style.display = "none";
     output.style.display = "";

}

function desencriptar(){

    var mensaje = input.value;
    encriptada = mensaje.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
     output.value = encriptada;

     
}


function copiar() {
    var textarea = document.getElementById("output");
    var input = document.getElementById('input');
    textarea.select();
    document.execCommand("copy");
    textarea.value="";
    input.value ="";
    input.focus();
  }

