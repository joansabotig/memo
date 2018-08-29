

var carta=document.querySelectorAll(".cartas");
var intentos=0;
var tablero = document.getElementById("tablero");


carta.forEach(function(card) {
    card.addEventListener("click", function(){
        
        //escuchar clicks de las tarjetas
        chequear(card)
    })
});

var carta1open = false;
var carta2open = false;
var carta1;
var carta2;

function chequear(card)
{
    card.children[1].classList.add("op0");
    card.children[0].classList.remove("op0");
    card.classList.add("bloqueado");
    card.children[0].classList.add("op1");

    if(!carta1open)
    {
        carta1 = card;
        carta1open = true;
        console.log(carta1);
    }
    else
    {
        tablero.style.pointerEvents= "none";
        if(!carta2open)
        {   
            carta2open = true;
            carta2 = card;

            setTimeout(() => 
            {
                
                if(carta1.children[0].dataset.img == carta2.children[0].dataset.img)
                {
                console.log("son iguales")
                }
                else
                {
                console.log("no son iguales")
                carta1.children[1].classList.remove("op0");
                carta1.children[1].classList.add("op1");
                carta1.classList.remove("bloqueado");
                carta1.children[0].classList.remove("op1");
                carta1.children[0].classList.add("op0");

                carta2.children[1].classList.remove("op0");
                carta2.children[1].classList.add("op1");
                carta2.classList.remove("bloqueado");
                carta2.children[0].classList.remove("op1");
                carta2.children[0].classList.add("op0");
                }


                intentos ++;
                var pint = document.getElementById("pintentos");
                pint.innerHTML=intentos;
                carta1open = false;
                carta2open = false;
                tablero.style.pointerEvents= "all";
            }, 2000);
            
        }
        
    }
}

function reset()
{
    carta.forEach(function(card) {            
                card.children[1].classList.remove("op0");
                card.children[1].classList.add("op1");
                card.classList.remove("bloqueado");
                card.children[0].classList.remove("op1");
                card.children[0].classList.add("op0");
        })
}