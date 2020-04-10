
$(document).ready(function () 
{
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });


    $("#carga").click(function() 
    {
        $.ajax({
          url: "chartkkk.html" ,

          success: function(data){
            setTimeout(function(){
              $("#mostrador").html(data);
            }
          );
        }

        });

      });

});