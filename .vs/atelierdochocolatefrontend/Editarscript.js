function GetURLParameter(sParam) {
    var sPageURl = window.location.search.substring(1);
    var sURLVariables = sPageURl.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
var id_cliente = GetURLParameter("id");
$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:8080/api/cadastrocliente/get/' + id_cliente,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            $("#nome").val(data.nome),
                $("#email").val(data.email),
                    $("#rg").val(data.rg),
                    $("#cpf").val(data.rg),
                    $("#telefone").val(data.telefone),
                    $("#endereco").val(data.endereco),
                    $("#nomefc").val(data.nomefc),
                    $("#dataNascimento").val(data.dataNascimento)
            }

    })
});

$('#form-cadastrar-cliente').submit(function (event) {
    event.preventDefault();
    var nascimento = new Date($('#dataNascimento').val());
    var formData = {
        'id': id_cliente,
        'nome': $('#nome').val(),
        'rg': $('#rg').val(),
        'email': $('#email').val(),
        'cpf': $('#cpf').val(),
        'telefone': $('#telefone').val(),
        'endereco': $('#endereco').val(),
        'nomefc': $ ('#nomefc').val(),
        'dataNascimento': nascimento.toUTCString(),
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'PUT',
        url: 'http://localhost:8080/api/cadastrocliente/editar',
        data: JSON.stringify(formData),
        dataType: 'json',
        encode: true,
        success: function (data) {


            location.href = 'http://localhost:63342/AtelierChocolatefrontend/totalcadastrados.html';


        }
    })

});