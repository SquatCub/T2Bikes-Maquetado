
// Variables Globales
var graficaCompetidor = "bar";
var graficaCompetencia = "bar";
var graficaCarrera = "bar";



$(document).ready(function ()
{
    // Funcion para el menu
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Funcion Para mostrar Home
    $("#home").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "home.html" ,

          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
      });

    // Cuando damos click en competidores y se ponga blanco el fondo
    $("#competidores").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "tables/lista-competidores.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
      });


    // Cuando damos click en Entrenadores y se ponga blanco el fondo
    $("#entrenadores").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "tables/lista-entrenadores.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
   });


    // Funcion para mostrar  Reportes
    $("#reportes").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "reportes.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            });
          }
        });
      });


    // Funcion para mostrar  Estadisticas
    $("#estadisticas").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "perfil-competidor.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
      });


    $("#competencias").click(function()
    {
      miOff();
      this.className = "active";
      $.ajax({
        url: "tables/lista-competencias.html" ,
        success: function(data){
          setTimeout(function(){
            $("#mostrador").html(data);
          }
        );
      }
      });
    });

    $("#tab").click(function()
    {
      miOff();
      this.className = "active";
      $.ajax({
        url: "perfil-competidor.html" ,
        success: function(data){
          setTimeout(function(){
            $("#mostrador").html(data);
          }
        );
      }
      });
    });



    // Funcion para mostrar lista de Competidores
    $("#lista-competidores").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "tables/lista-competidores.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
      });



    // Funcion para mostrar  Form de Nuevo Competidor
    $("#registrar-competidor").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "forms/registrar-competidor.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
      });



    // Funcion para mostrar lista de Entrenadores
    $("#lista-entrenadores").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "tables/lista-entrenadores.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
      });

      $("#sistema").click(function()
      {
        miOff();
        this.className = "active";
        $.ajax({
          url: "tables/lista-usuarios.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
      });

    // Funcion para mostrar  Form de Nuevo Entrenador
    $("#registrar-entrenador").click(function()
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "forms/registrar-entrenador.html" ,
          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }
        });
      });

});

function miOff()
{
  document.getElementById('home').className = " ";
  document.getElementById('competidores').className = " ";
  document.getElementById('entrenadores').className = " ";
  /*document.getElementById('reportes').className = " ";
  document.getElementById('estadisticas').className = " ";*/
  document.getElementById('competencias').className = " ";
  document.getElementById('sistema').className = " ";
  /*document.getElementById('registrar-competidor').className = " ";
  document.getElementById('lista-competidores').className = " ";
  document.getElementById('registrar-entrenador').className = " ";
  document.getElementById('lista-entrenadores').className = " ";*/
}


/*------------Funciones genericas------------*/
function getStat(){
  this.className = 'active';
  $.ajax({
    url: 'estadisticas.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}

function getComp(){
  this.className = 'active';
  $.ajax({
    url: 'perfil-competidor.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}
function getEntre(){
  this.className = 'active';
  $.ajax({
    url: 'perfil-entrenador.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}
function getTour(){
  this.className = 'active';
  $.ajax({
    url: 'tour.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}
function getUser(){
  this.className = 'active';
  $.ajax({
    url: 'perfil-usuario.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}
function getCarrera(){
  this.className = 'active';
  $.ajax({
    url: 'perfil-carrera.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}

function newComp(){
  this.className = 'active';
  $.ajax({
    url: 'forms/registrar-competidor.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}

function editComp(){
  this.className = 'active';
  $.ajax({
    url: 'forms/editar-competidor.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}

function editEntre(){
  this.className = 'active';
  $.ajax({
    url: 'forms/editar-entrenador.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}

function newTrain(){
  this.className = 'active';
  $.ajax({
    url: 'forms/registrar-entrenador.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}

function newUser(){
  this.className = 'active';
  $.ajax({
    url: 'forms/registrar-usuario.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}

function newCompet(){
  this.className = 'active';
  $.ajax({
    url: 'forms/registrar-competencia.html' ,
    success: function(data){
      setTimeout(function(){
        $('#mostrador').html(data);
      }
    );
  }
  });
}


/*------------Funciones Para Graficas ------------*/

// Funcion Para convertir Grafica (Competidor Competencia)
function graficaCompetidor()
{
  if(graficaCompetidor == "bar")
  {
    graficaCompetidor = "pie";
    $.ajax({
      url: 'graficas/competidor-competencia-pai.html' ,
      success: function(data){
        setTimeout(function(){
          $('#contenedorGrafica-competidor').html(data);
        }
      );
    }
    });
    document.getElementById('btn-cambiarGrafica-competidor').innerText = "Cambiar a Grafica de Barras";
  }
  else
  {
    graficaCompetidor = "bar";
    $.ajax({
      url: 'graficas/competidor-competencia-bar.html' ,
      success: function(data){
        setTimeout(function(){
          $('#contenedorGrafica-competidor').html(data);
        }
      );
    }
    });
    document.getElementById('btn-cambiarGrafica-competidor').innerText = "Cambiar a Grafica de Pastel";
  }
  $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
}



// Funcion Para convertir Grafica (Competencia)
function graficaCompetencia()
{
  if(graficaCompetencia == "bar")
  {
    graficaCompetencia = "pie";
    $.ajax({
      url: 'graficas/pai.html' ,
      success: function(data){
        setTimeout(function(){
          $('#contenedorGrafica').html(data);
        }
      );
    }
    });
    document.getElementById('btn-cambiarGrafica').innerText = "Cambiar a Grafica de Barras";
  }
  else
  {
    graficaCompetencia = "bar";
    $.ajax({
      url: 'graficas/bar.html' ,
      success: function(data){
        setTimeout(function(){
          $('#contenedorGrafica').html(data);
        }
      );
    }
    });
    document.getElementById('btn-cambiarGrafica').innerText = "Cambiar a Grafica de Pastel";
  }
  $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
}




// Funcion Para convertir Grafica (Carrera)
function graficaCarrera()
{
  if(graficaCarrera == "bar")
  {
    graficaCarrera = "pie";
    $.ajax({
      url: 'graficas/pai.html' ,
      success: function(data){
        setTimeout(function(){
          $('#contenedorGrafica').html(data);
        }
      );
    }
    });
    document.getElementById('btn-cambiarGrafica').innerText = "Cambiar a Grafica de Barras";
  }
  else
  {
    graficaCarrera = "bar";
    $.ajax({
      url: 'graficas/bar.html' ,
      success: function(data){
        setTimeout(function(){
          $('#contenedorGrafica').html(data);
        }
      );
    }
    });
    document.getElementById('btn-cambiarGrafica').innerText = "Cambiar a Grafica de Pastel";
  }
  $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
}