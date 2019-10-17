$(function () {
    $.ajax({
        type: "GET",
        url: "./resources/restaurants.xml",
        dataType: "xml",
        success: function (data) {
            $(data).find("restaurant").each(function () {
                // procurar dados em cada restaurante

                let cor = "list-group-item-light"
                if ($(this).attr('type') == 'bar') {
                    // o "this" refere-se ao restaurant
                    cor = 'list-group-item-dark'
                }
                // a cor para o restaurante é "light", mas se for do tipo "bar" recebe a cor "dark"

                // a variável abaixo cria uma linha
                let linha = '<li class="list-group-item ' + cor + '">' +
                    '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + $(this).attr("name") + '</h5>' +
                    '</div>' +
                    '<p class="mb-1">' + $(this).attr("address") + '</p>' +
                    '<small><a href="http://maps.google.com/maps?q=' + $(this).attr("lat") + "," +
                    $(this).attr("lng") + '" target="_blank">Ver no mapa</a></small>' +
                    '</li>'

                // a linha criada acima precisa ser adotada por um elemento html "ul"

                $("ul").append(linha);

            })






        },
        error: function () {
            alert("Ocorreu um erro!")
        }
    })
})