$(function(){
    $("#btnSuccessFadeIn").click(function(){
        // seleciono o botão e no evento de click dou um alert e o tempo
        $(".alert-success").fadeIn(5000)
    })
    $("#btnDangerFadeOut").click(function(){
        $(".alert-danger").fadeOut(3000)
    })

})