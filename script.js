$(document).ready(function () {
    let baseDelay = 400
    let delay = 250
    let index = 1
    $( "section article" ).each(function() {
        $( this ).css({"animation-delay" : delay*index+baseDelay + "ms"});
        index++;
    });
    
    $('footer').on("click", "#impressum", function () {
        loadModal("impressum.txt")
    });

    $('#section_contact').on("click", ".contact_button", function () {
        loadModal("email.txt")
        $('.contact_button').css({"animation-name" : "none"});
    });

    $('.modal-container').click(function (e) {
        if (e.target !== e.currentTarget) return;
        $('.modal-container').removeClass("modal-container-show");
        $('html,body').css({ "overflow": "auto", "overflow-x": "hidden" });
    });
});

function loadModal(filename){
    $.get(filename, function (data) {
        let rawImpressum = data.split('\n');
        let htmlImpressum = "<ul>"
        
        $(".modal-head").html(rawImpressum[0]);
        
        for (let index = 1; index < rawImpressum.length; index++) {
            if (rawImpressum[index].length > 1) {
                htmlImpressum += "<li>" + rawImpressum[index] + "</li>"
            }
        }
        htmlImpressum += "<ul>"
        $(".modal-content").html(htmlImpressum);
        
    });
    $('.modal-container').addClass("modal-container-show");
    $('html,body').css({ "overflow": "hidden" });
}