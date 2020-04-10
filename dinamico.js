
$(document).ready(function () 
{
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });


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

    $("#competidores").click(function() 
    {
      miOff();
      this.className = "active";
        $.ajax({
          url: "competidores.html" ,

          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }

        });

      });

    $("#entrenadores").click(function() 
    {

      miOff();
      this.className = "active";
        $.ajax({
          url: "entrenadores.html" ,

          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }

        });

      });

    $("#reportes").click(function() 
    {

      miOff();
      this.className = "active";
        $.ajax({
          url: "reportes.html" ,

          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }

        });

      });

    $("#estadisticas").click(function() 
    {

      miOff();
      this.className = "active";
        $.ajax({
          url: "estadisticas.html" ,

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
    });

});

function miOff()
{
  document.getElementById('home').className = " ";
  document.getElementById('competidores').className = " ";
  document.getElementById('entrenadores').className = " ";
  document.getElementById('reportes').className = " ";
  document.getElementById('estadisticas').className = " ";
  document.getElementById('competencias').className = " ";
}


