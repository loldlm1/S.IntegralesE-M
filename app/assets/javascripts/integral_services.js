integralServicesJS = {
  
  productos: function() {
    $("#productos").append(
      '<br>',
      '<span class="glyphicon glyphicon-wrench nav-icon" aria-hidden="true"></span>'
    );
  },
  sistema: function() {
    $("#sistema").append(
      '<br>',
      '<span class="glyphicon glyphicon-phone nav-icon" aria-hidden="true"></span>'
    );
  },
  telecomunicacion: function() {
    $("#telecomunicacion").append(
      '<br>',
      '<span class="glyphicon glyphicon-signal nav-icon" aria-hidden="true"></span>'
    );
  },
  nosotros: function() {
    $("#nosotros").append(
      '<br>',
      '<span class="glyphicon glyphicon-user nav-icon" aria-hidden="true"></span>'
    );
  },
  iconRemove: function() {
    $("#productos").children().remove();
    $("#sistema").children().remove();
    $("#telecomunicacion").children().remove();
    $("#nosotros").children().remove();
  }

}