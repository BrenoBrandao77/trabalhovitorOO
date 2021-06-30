$('#form-cadastrar-cliente').submit(function (event) {
    event.preventDefault();
    var nascimento = new Date($('#dataNascimento').val());
    var formData = {
        'nome': $('#nome').val(),
        'rg': $('#rg').val(),
        'cpf': $('#cpf').val(),
        'telefone': $('#telefone').val(),
        'email': $('#email').val(),
        'endereco': $('#endereco').val(),
        'dataNascimento': nascimento.toUTCString(),
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'POST',
        url: 'http://localhost:8080/api/cadastrocliente/incluirfunc',
        data: JSON.stringify(formData),
        dataType: 'json',
        encode: true,
        success: function (data) {
            alert("Funcionário Cadastrado");

            location.href = 'http://localhost:63342/AtelierChocolatefrontend/totalcadastrados.html';
        },
        error: function (data) {
            alert("Preencha todos os campos corretamente");

        }
    });

});