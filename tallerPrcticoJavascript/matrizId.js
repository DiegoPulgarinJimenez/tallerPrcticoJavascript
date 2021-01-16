function generarMatriz() {
    var valorN = Number(document.getElementById("numero").value);
    var tabla = "";
  
    tabla = "<table width=100, border=1, cellpadding=1, cellspacing=1>";
    
    for (i = 0; i < valorN; i++) {
      tabla += "<tr>";
      for (j = 0; j < valorN; j++) {
          if (i != j) {
            tabla += "<td>" + "0" + "</td>";
          }
          else
          tabla += "<td>" + "1" + "</td>";        
      }
      tabla += "</tr>";
    }
    document.getElementById("DivPrintHere").innerHTML = "</table>" + tabla;
  }