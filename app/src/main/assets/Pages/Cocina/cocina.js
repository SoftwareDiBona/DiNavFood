window.addEventListener("load",  function(event) {

LoadHeader();
LoadEventos();

}
);

function LoadHeader()
{
    //#region FOOTER
    // Obtener la referencia al elemento HTML donde se cargará el footer
    const footerContainer = document.getElementById("footer");

    // Crear una nueva instancia del objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Especificar la URL del archivo HTML que contiene el footer
    const url = "file:///android_asset/Templates/Footer/footer.html";

    // Asignar la función de respuesta al evento onreadystatechange
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        // Si la solicitud se completó con éxito, insertar el contenido del archivo en el elemento HTML
        footerContainer.innerHTML = this.responseText;

        // Seleccionar el botón del footer por su ID
            const btnCooking = document.getElementById('btnCooking');
            const btnLista = document.getElementById('btnLista');
            const btnPerfil = document.getElementById('btnPerfil');

            btnCooking.addEventListener("click", function() {
            window.location.href = "file:///android_asset/Pages/Cocina/cocina.html";
          });

            btnLista.addEventListener("click", function() {
            window.location.href = "file:///android_asset/Pages/Login/login.html";
          });

          btnPerfil.addEventListener("click", function() {
          //Android.OpenLoginActivity();
          window.location.href = "file:///android_asset/Pages/Login/login.html";
          });



      }
    };

    // Enviar la solicitud para cargar el archivo HTML
    xhr.open("GET", url, true);
    xhr.send();
    //#endregion

}

function LoadEventos()
    {
      var mainScreen= document.getElementById("mainScreen");
      var searchScreen= document.getElementById("searchScreen");
      var footer= document.getElementById("footer");
      var body= document.getElementById("body");


      ShowSearchScreen(mainScreen,searchScreen,footer,body);
      CloseSearchScreen(mainScreen,searchScreen,footer,body);
    }

    function ShowSearchScreen(mainScreen,searchScreen,footer,body)
    {

      var boton = document.getElementById("buttonRecetas");
      boton.addEventListener("click", function() {

        mainScreen.style.display ="none";
        searchScreen.style.display ="block"
        footer.style.display ="none";
        body.style.paddingBottom="0vh"
      });
    }

    function CloseSearchScreen(mainScreen,searchScreen,footer,body)
    {
      var boton = document.getElementById("searchScreen__header__button");
      boton.addEventListener("click", function() {

        mainScreen.style.display ="block";
        searchScreen.style.display ="none"
        footer.style.display ="block";
        body.style.paddingBottom="5vh"
      });

    }






