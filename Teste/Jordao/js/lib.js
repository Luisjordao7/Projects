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
  loadbolsas();
  loadempregos();
}

function loadbolsas(){
    xmlDoc = loadXMLDoc("xml/bolsas.xml"),
    testObj = xmlDoc,
    bolsas = testObj.getElementsByTagName("bolsas");

    for (var i=0; i<bolsas.length; i++) {

      var title1 = (bolsas[i].getElementsByTagName("T1")[0].textContent),
      d1 = (bolsas[i].getElementsByTagName("desc1")[0].textContent),
      title2 = (bolsas[i].getElementsByTagName("T2")[0].textContent),
      d2 = (bolsas[i].getElementsByTagName("desc2")[0].textContent),
      title3 = (bolsas[i].getElementsByTagName("T3")[0].textContent),
      d3 = (bolsas[i].getElementsByTagName("desc3")[0].textContent),
      title4 = (bolsas[i].getElementsByTagName("T4")[0].textContent),
      d4 = (bolsas[i].getElementsByTagName("desc4")[0].textContent),
      title5 = (bolsas[i].getElementsByTagName("T5")[0].textContent),
      d5 = (bolsas[i].getElementsByTagName("desc5")[0].textContent);

      par = '<div class="container">';
      par += '<h1>'+title1+'</h1>';
      par += '<p>'+d1+'</p>';
      par += '<hr>';
      par += '<h1>'+title2+'</h1>';
      par += '<p>'+d2+'</p>';
      par += '<hr>';
      par += '<h1>'+title3+'</h1>';
      par += '<p>'+d3+'</p>';
      par += '<hr>';
      par += '<h1>'+title4+'</h1>';
      par += '<p>'+d4+'</p>';
      par += '<hr>';
      par += '<h1>'+title5+'</h1>';
      par += '<p>'+d5+'</p>';
      par += '</div>';

      document.getElementById("bolsas").innerHTML += par;
    }
}


