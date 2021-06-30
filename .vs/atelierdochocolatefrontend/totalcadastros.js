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


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getUTCMonth() + 1),
        day = '' + d.getUTCDate(),
        year = d.getUTCFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [day, month, year].join('/');
}


$(document).ready(function () {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/cadastrocliente/listar',
        dataType: 'json',
        success: function (result) {
            var html = '';
            $.each(result, function (i, data) {
                html += `<tr><td>` + data.nome + `</td>` + `<td>` + data.email + `</td>` + `<td>` + data.rg + `</td>` + `<td>` + data.cpf + `</td>` + `<td>` + data.telefone + `</td>` + `<td>` + data.endereco + `</td>` + `<td>` + formatDate(new Date(data.dataNascimento)) + `</td>`


                    + `<td>` + data.nomefc + `</td>`+ `<td><a class="btn btn-outline-primary" href="editarCliente.html?id=` + data.id + `  "> Editar &nbsp; </a>`  + `<a href="#" class="btn btn-outline-danger  role="button" onclick="removerCliente(` + data.id + `) "> Excluir </a></td></tr>`;


                $("#tblistar").html(html);
            });
        }
    })


});



function removerCliente(id_cliente) {
    var r = confirm("Deseja excluir o cliente?");
    if (r == true) {

        var formData = {
            'id': id_cliente,

        };

        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            type: 'POST',
            url: 'http://localhost:8080/api/cadastrocliente/remover',
            data: JSON.stringify(formData),
            dataType: 'json',
            encode: true,
            success: function (result) {
                location.reload();

            }


        })
    }
};