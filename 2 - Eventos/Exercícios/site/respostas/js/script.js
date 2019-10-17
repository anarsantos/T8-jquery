$(function() {
    $("#eventType").change(function(){
        let selected = $("#eventType :selected").val();

        if (selected == "Teatro") {
            $(".esconde-teatro").hide()
            $(".mostra-teatro").show()
            
            
        } else if (selected == "Cinema") {
            $(".esconde-cinema").hide()

        } else if (selected == "Debate Literário") {
            $(".esconde-debate").hide()

        } else if (selected == "Dança") {
            $(".esconde-danca").hide()

        // } else if (selected == "Artes visuais e exposições") {

        // } else if (selected == "Música") {

        // } else {

        

        
    }
    })
});