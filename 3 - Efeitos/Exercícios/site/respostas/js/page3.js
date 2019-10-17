$(function () {
    // sempre dentro do parâmetro eu chamo uma função callback()

    function configurateHover() {
        $(".card-title").off("mousseenter").on("mouseenter",
            function () {
                $(this).css("color", "blue");
            }
        )
        $(".card-title").off("mouseleave").on("mouseleave",
            function () {
                $(this).css("color", "black");
            }
        )
    }

    configurateHover();


    $(".btn-toggle").click(function () {
        // toggle faz e desfaz
        $(".card1").toggle(3000)
        $(".card2").toggle(4000)
        $(".card3").toggle(5000)
    })

    $(".btn-criar").click(function () {
        let content = $(".original").html();
        // peguei todo o conteúdo da div original(todos os cards)
        $(".btn-toggle").before(content);
        // $(".original").after("<div class= row>" + content + "</div>")
        // versão da professora
        configurateHover();
    })

})
