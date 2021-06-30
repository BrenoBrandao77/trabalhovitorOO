$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/cadastrocliente/getTotal',
        dataType: 'json',
        success: function (result) {
            $("#div-cadastrocliente").html(result);
        }
    })
})