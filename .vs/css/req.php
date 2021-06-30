<html>   
    <head>
        <meta charset="UTF-8">
        <title>Cadastro Pessoa</title>
    </head>
    <body>

        <?php
        include './class.php';
        include './conexao.php';
       
        
        $ex = "Erro!";
        $nome = isset($_POST["nome"]) ? $_POST["nome"] : null;
        
        $cpf = isset($_POST["cpf"]) ? $_POST["cpf"] : null;
        $rg = isset($_POST["rg"]) ? $_POST["rg"] : null;
        $dataNascimento = isset($_POST["dataNascimento"]) ? $_POST["dataNascimento"] : null;
        $email = isset($_POST["email"]) ? $_POST["email"] : null;
        $telefone = isset($_POST["telefone"]) ? $_POST["telefone"] : null;
       

        $pessoaResposta = new CadastroCliente($nome, $rg, $cpf, $dataNascimento, $email, $telefone);
       

        $queryInserPessoa = "INSERT INTO pessoa (cpf, nome, rg, data_nascimento, email, telefone) "
                . "VALUES ('"
                . $pessoaResposta->getCpf()
                . "', '"
                . $pessoaResposta->getNome()
                . "', '"               
                . $pessoaResposta->getRg()
                . "', '"
                . $pessoaResposta->getDataNascimento()
                . "', '"
                . $pessoaResposta->getEmail()
                . "', '"
                . $pessoaResposta->getTelefone()
                . "')";

        $resultadoInserirPessoa = mysqli_query($connection, $queryInserPessoa);
        
        if(!$resultadoInserirPessoa){
            echo "Erro";
        }

        
        
        
        
    
       

        $connection->close();
        ?>
    </body>
</html>
