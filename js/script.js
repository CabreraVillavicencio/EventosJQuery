$(document).ready(function (){
    /*evento del cohete*/
    $(".boton1").click(function(){
        $(".abajo").animate({"top": "0"})
    })
    /*evento del carro*/
    $(".boton2").dblclick(function(){
        var movimiento=$(".arriba").position()
        if (movimiento.left>0){
            $(".arriba").animate({"left":"0"})
            var movimiento=$(".arriba").position()
        }else{
            $(".arriba").css("left","1290")
        }
    })
})