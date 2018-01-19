$(function() {

    $("#nav").before(function() {

        nav = '<div class="container">';
        nav += '<div class="navbar-header">';
        nav += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">';
        nav += '<i class="fa fa-bars"></i>';
        nav += '</button>';
        nav += '<a class="navbar-brand page-scroll" href="index.html">';
        nav += '<i class="icon icon-ipbeja fa-lg"></i> IPBeja';
        nav += '</a>';
        nav += '</div>';
        nav += '<div class="collapse navbar-collapse navbar-right navbar-main-collapse">';
        nav += '<ul class="nav navbar-nav">';
        nav += '<li class="hidden">';
        nav += '<a href="#page-top"></a>';
        nav += '</li>';
        nav += '<li>';
        nav += '<a class="page-scroll" href="noticias.html">Notícias</a>';
        nav += '</li>';
        nav += '<li>';
        nav += '<a class="page-scroll" href="empregos.html">Empregos</a>';
        nav += '</li>';

        nav += '<li>';
        nav += '<a class="page-scroll" href="cursos.html">Cursos</a>';
        nav += '</li>';

    
        nav +=  '<li class="dropdown">';
       
        nav += ' <a href="#" data-toggle="dropdown" class="dropdown-toggle">contactos <b class="caret"></b></a>';
      
        nav += '<ul class="dropdown-menu">';
        nav += '<li><a href="#">Contactos</a></li>';
        nav += '<li><a href="Formulario.html">Formulario</a></li>';
        nav += '</ul>';

        nav +=  '<li class="dropdown">';
       
        nav += ' <a href="#" data-toggle="dropdown" class="dropdown-toggle">Serviços<b class="caret"></b></a>';
      
        nav += '<ul class="dropdown-menu">';
        nav += '<li><a href="#">Serviços academicos</a></li>';
        nav += '<li><a href="Servicos.html">Serviços de acção social</a></li>';


        nav += '</ul>';
        nav += '</div>';
        nav += '</div>';
        nav += '</nav>';

        $(this).append(nav);
    });  

}); 

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});