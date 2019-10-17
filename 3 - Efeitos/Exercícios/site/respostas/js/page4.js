$(function(){ 
    // obrigatoriamente uma function recebe ()
    $(".btn").click(function(){
        $(".card1").slideDown(1000)
        $(".card2").slideDown(2000)
        $(".card3").slideDown(3000)

        $(".btn").removeClass("btn-primary");
        $(".btn").addClass("btn-secondery");
        $(".btn").attr("disabled", "true");

    })

    $(".card").click(function(){
        $(this).hide();
    })
})