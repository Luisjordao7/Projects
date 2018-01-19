var loadXMLDoc = function (file) {
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.open("GET",file,false);
  xhttp.send();

  if (xhttp.readyState === 4 && xhttp.status === 200) {
    return xhttp.responseXML;
  }
  return {error : 'no file'};
}

window.onload = function () {
  loadempregos();
}

function loadempregos(){
    xmlDoc = loadXMLDoc("xml/empregos.xml"),
    testObj = xmlDoc,
    empregos = testObj.getElementsByTagName("Emprego");

    for (var i=0; i<empregos.length; i++) {

      var id = (empregos[i].getElementsByTagName("Id")[0].textContent),
      Titulo = (empregos[i].getElementsByTagName("Titulo")[0].textContent),
      area = (empregos[i].getElementsByTagName("Area")[0].textContent),
      data = (empregos[i].getElementsByTagName("data")[0].textContent),
      localidade = (empregos[i].getElementsByTagName("Localidade")[0].textContent),
      vagas = (empregos[i].getElementsByTagName("vagas")[0].textContent),
      desc = (empregos[i].getElementsByTagName("Descricao")[0].textContent);
      

      par = '<div class="panel panel-default">';
      par += '<div class="panel-heading" role="tab" id="'+id+'">';
      par += '<h4 class="panel-title">';
      par += '<a data-toggle="collapse" data-parent="#accordion" href="collapseOne" aria-expanded="true" aria-controls="collapseOne">';
      par += '<h5>'+Titulo+'</h5>';
      par += '</div>';
      par += '</a>';
      par += '</h4>';
      par += '</div>';
      par += '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">';
      par += '<h4 class="panel-title">';
      par += '<p>'+desc+'</p>';
     
         par += '</div>';


      document.getElementById("accordion").innerHTML += par;
    }
}