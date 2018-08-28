var primera = false;
var primeracarta = null;
var segundacarta = null;

function cuandohaganclick(cartaquedanvuelta)
{
    if(!primera)
    {
        primera = true;
        primeracarta = cartaquedanvuelta;
    }
    else
    {
        segundacarta = cartaquedanvuelta;
    }
}
function changing()
{
    var ruta = document.getElementById("foto1");
    
}