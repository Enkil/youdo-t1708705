'use strict';

window.$ = window.jQuery =  require('jquery');
window.WOW = require('wow.js');
window.gmaps = require('gmaps');


$(document).ready(function () {
    
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
        // infoWindow: {
        //     content: '<p>HTML Content</p>'
        // }
    });
    
});