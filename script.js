const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* la letra e es convertida para "enter"
    la letra i es convertida para "imes"
    la letra a es convertida para "ai"
    la letra o es convertida para "ober"
    la letra u es convertida para "ufat"*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase(); /*tolowercase transforma todo a minusculas*/

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada

}

function copiar(){
    const textoEncriptado = mensaje.value;
    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            alert("¡El texto ha sido copiado!");
        })
        .catch((error) => {
            console.error("Error al copiar el texto:", error);
        });
}

