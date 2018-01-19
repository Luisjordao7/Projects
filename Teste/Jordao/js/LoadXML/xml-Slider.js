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
  loadSliderCursos();
  loadSliderNoticias();
}

function loadSliderCursos(){
  
  xmlDoc = loadXMLDoc("xml/Cursos.xml"),
  testObj = xmlDoc,
  cursosSlide = testObj.getElementsByTagName("Curso");

  for (var i=0; i<5; i++) {

    var name = (cursosSlide[i].getElementsByTagName("Nome")[0].textContent),
    url = (cursosSlide[i].getElementsByTagName("URL")[0].textContent),
    page = (cursosSlide[i].getElementsByTagName("Page")[0].textContent),
    tipo = (cursosSlide[i].getElementsByTagName("Tipo")[0].textContent),
    desc = (cursosSlide[i].getElementsByTagName("Descricao")[0].textContent);

    slide = '<div class="item">';
    slide += '<a href="'+page+'"><img src="'+url+'" alt="'+name+'"width="260" height="145"></a>';
    slide += '<div class="carousel-caption">';
    slide += '<h3>'+name+'</h3>';
    slide += '<p style="text-transform: uppercase;">'+tipo+'</p>';
    slide += '</div>';
    slide += '</div>';

    document.getElementById("Slider").innerHTML += slide;
  }
}

function loadSliderNoticias(){
  
  xmlDoc = loadXMLDoc("xml/Noticias.xml"),
  testObj = xmlDoc,
  newsSlide = testObj.getElementsByTagName("Noticia");

  for (var i=0; i<4; i++) {

    var title = (newsSlide[i].getElementsByTagName("Titulo")[0].textContent),
    url = (newsSlide[i].getElementsByTagName("URL")[0].textContent),
    info = (newsSlide[i].getElementsByTagName("Descricao")[0].textContent);

    slidenews = '<div class="item">';
    slidenews += '<img src="'+url+'" alt="'+title+'"width="260" height="145">';
    slidenews += '<div class="carousel-caption">';
    slidenews += '<h3>'+title+'</h3>';
    slidenews += '<a>Ler</a>';
    slidenews += '</div>';
    slidenews += '</div>';

    document.getElementById("SliderNews").innerHTML += slidenews;
  }
}
