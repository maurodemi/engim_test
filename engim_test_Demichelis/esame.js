
// Prendo il testo attuale
var testo=document.getElementById("testo").innerHTML;
var txt=testo;

function trovaEdEvidenzia()
{
  // Prendo i caratteri che vengono inseriti in input
  var parola=" "+document.getElementById("parola").value;
  // Modifico i caratteri ed il testo
  var modifica="<span class='evidenzia'>" + parola + "</span>";
  var sostituisci=testo.replace(new RegExp(parola,'g'),modifica);

  // Cambio il testo in output
  document.getElementById("testo").innerHTML=sostituisci;
  testo=txt;
}
