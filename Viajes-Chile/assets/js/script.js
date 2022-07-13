// propiedad smooth scroll
$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var secciones = $(this.hash);
      if (secciones.length == 0) {
        secciones = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (secciones.length == 0) {
        secciones = $('html');
      }
      $('html, body').animate({ scrollTop: secciones .offset().top }, 500);
      return false;
    });
  });