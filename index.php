<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

        $nome = addslashes($_POST['name']);
        $email = addslashes($_POST['email']);
        $mensagem = addslashes($_POST['message']);

        $to = "asguth@outlook.com";
        $subject = "Contato - Site Exemplo";
        $body = "Nome: ".$nome. "\r\n".
                "Email: ".$email. "\r\n".
                "Mensagem: ".$mensagem;
        $header = "From:remetente@exemplo.com". "\r\n"
                    ."Reply-to:".$email."\e\n"
                    ."X=Mailer:PHP/".phpversion();

        if(mail($to,$subject,$body,$header)) {
            echo("Email enviado com Sucesso!");
        }

        else {
            echo("O Email não pode ser enviado");
        }
    }
?>