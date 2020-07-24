$(document).ready(function(){

    console.log("loaded");
    $('#submit').click(function () {
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let queryString = '?para1=' + firstName + '&para2=' + lastName + '&para3=' + 'fullName';
        window.location.href = 'result.html' + queryString;
        // window.location.replace('result.html');
        // alert("Submit clicked")
    });
});