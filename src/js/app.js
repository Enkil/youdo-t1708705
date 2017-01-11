'use strict';

window.$ = window.jQuery =  require('jquery');
window.WOW =                require('wow.js');
window.gmaps =              require('gmaps');
window.inputmask =          require('jquery.inputmask');
window.validate =           require('jquery-validation');


$(document).ready(function () {

    // Input masking
    $('input[type="tel"]').inputmask({"mask": "+7(999)999-99-99", greedy: false});
    
    // Animate
    var wow = new WOW();
    wow.init();


    // Map
    var map = new gmaps({
        el: '#map',
        lat: 55.646769,
        lng: 37.617157,
        scrollwheel: false
    });
    map.addMarker({
        lat: 55.646769,
        lng: 37.617157,
        title: 'Бизнес Решения',
        infoWindow: {
            content: '<p>"Бизнес решения"</p> <p>Москва <br> Черноморский бульвар, д.4<p>'
        }
    });

    // Modal dialog
    $('a.js-openModal').click(function (e) {
        e.preventDefault();
        $('.modal-block').css({'display': 'flex'});
    });
    $('span.js-modalClose').click(function (e) {
        $('.modal-block').css({'display': 'none'});
    });

    // Form validation
    var form = $("form");
    $.validator.messages.required = '';
    form.each( function() {
        // _this = $(this);
        $(this).validate({
            errorClass: "-error",
            validClass: "-valid"
        });
    });

    // Form Ajax sending
    form.submit (function(event) {
        // _this = $(this);
        if ($(this).valid())
        {
            $.ajax({
                type: $(this).attr("method"),
                url: $(this).attr("action"),
                data: $(this).serialize(),
                success: function(data) {
                    console.log(data);
                    $(this).find("button").text("Успешно");
                    $(this)
                        .find("button")
                        .prop('disabled', true);
                    $(this)[0].reset();
                    $(this).find("div.form").css({'display': 'none'});
                    $(this).find("p.success").css({'display': 'block'});
                }
            });
        }
        event.preventDefault();
    });
    
});