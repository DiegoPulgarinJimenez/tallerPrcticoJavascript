function sumar(){
    var primerNumero = Number(document.getElementById("primerNumero").value);
    var segundoNumero = Number(document.getElementById("segundoNumero").value);
    var resultado;
    resultado = primerNumero + segundoNumero;
    if (resultado >= 0) {
        document.getElementById("PPrintHere").style.color = "green"
        document.getElementById("PPrintHere").innerHTML = resultado; 
    }
    else
        document.getElementById("PPrintHere").style.color = "red"
        document.getElementById("PPrintHere").innerHTML = resultado;
}
function restar(){
    var primerNumero = Number(document.getElementById("primerNumero").value);
    var segundoNumero = Number(document.getElementById("segundoNumero").value);
    var resultado;
    resultado = primerNumero - segundoNumero;
    if (resultado >= 0) {
        document.getElementById("PPrintHere").style.color = "green"
        document.getElementById("PPrintHere").innerHTML = resultado; 
     }
     else
         document.getElementById("PPrintHere").style.color = "red"
         document.getElementById("PPrintHere").innerHTML = resultado;
}
function multiplicar(){
    var primerNumero = Number(document.getElementById("primerNumero").value);
    var segundoNumero = Number(document.getElementById("segundoNumero").value);
    var resultado;
    resultado = primerNumero * segundoNumero;
    if (resultado >= 0) {
        document.getElementById("PPrintHere").style.color = "green"
        document.getElementById("PPrintHere").innerHTML = resultado; 
     }
     else
         document.getElementById("PPrintHere").style.color = "red"
         document.getElementById("PPrintHere").innerHTML = resultado;
}
function dividir(){
    var primerNumero = Number(document.getElementById("primerNumero").value);
    var segundoNumero = Number(document.getElementById("segundoNumero").value);
    var resultado;
    if (segundoNumero != 0) {        
        resultado = primerNumero / segundoNumero;
        if (resultado >= 0) {
            document.getElementById("PPrintHere").style.color = "green"
            document.getElementById("PPrintHere").innerHTML = resultado; 
         }
         else
             document.getElementById("PPrintHere").style.color = "red"
             document.getElementById("PPrintHere").innerHTML = resultado;
    }
    else
        document.getElementById("PPrintHere").innerHTML = "ERROR --> division/0 is undefined";
}