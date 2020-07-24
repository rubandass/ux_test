$(document).ready(function () {
    console.log("result page loaded");

    var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split('&');
    for (let i = 0; i < queries.length; i++) {
        document.write(queries[i] + '<br>');
        
    }

    queries.forEach(val => {
        var value = val.split('=');
        console.log(value[1]);
    });


    
});