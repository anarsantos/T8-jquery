$(function(){
    $("#eventType").change(function(){
        // seleção de algum elemento do html
        let selected = $("#eventType :selected").val();

        if(selected === 'Teatro'){
            $(".esconde-teatro").hide();
            $(".aparece-teatro").show();

        }else if(selected === 'Cinema'){
            $(".esconde-cinema").hide();
            $(".aparece-cinema").show();

        }else if(selected === 'Debate Literário'){
            $(".esconde-debate").hide();
            $(".aparece-debate").show();

        }else if(selected === 'Dança'){
            $(".esconde-danca").hide();
            $(".aparece-danca").show();

        }else if(selected === 'Artes visuais e exposições'){
            $(".esconde-visuais").hide();
            $(".aparece-visuais").show();

        }else if(selected === 'Música'){
            $(".esconde-musica").hide();
            $(".aparece-musica").show();
        }else {
            $(".esconde-tudo").hide();
            
        }
    });
})

// falta fazer desaparecer todas

// ao se marcar o campo "Entrada gratuita", o valor deve ser zerado

// validação manual