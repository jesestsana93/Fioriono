<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;  
    use PHPMailer\PHPMailer\Exception; 

    require 'PHPMailer/Exception.php'; 
    require 'PHPMailer/PHPMailer.php'; 
    require 'PHPMailer/SMTP.php'; 
    
    

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 0;                    
        $mail->isSMTP(); 
        $mail->Host = 'smtp.gmail.com'; //smtp.gmail.com para gmail                   
        $mail->SMTPAuth = true;  
        $mail->Username = 'ayelen@gustavofiorino.com';  
        $mail->Password = 'nnmkdbgziglkghhs';  //contraseña para aplicacion                                                     
        $mail->SMTPSecure = 'ssl';  
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465; 

        //var_dump($_POST);
        $name = $_POST['nombres'];
        $apellidos = $_POST['apellidos'];
        $email = $_POST['correo'];
        $telefono = $_POST['telefono'];
        $mensaje =  $_POST['mensaje'];
        $fecha_fiesta = $_POST['fecha_fiesta'];
        $tipo_fiesta =  $_POST['tipo_fiesta'];
        $num_invitados = $_POST['invitados'];
        $como_nos_conociste =  $_POST['como_nos_conociste'];

        $asunto = 'Mensaje de ' . $name . ' ' .$apellidos;

        $message = "Este mensaje fue enviado por: " . $name. " <br>";
        $message .= "Su correo es: " . $email . " <br>";
        $message .= "Tel: " . $telefono . " <br>";
        $message .= "Mensaje: " . utf8_decode($_POST['mensaje']) . " <br>";
        $message .= "Fecha del evento: " . $fecha_fiesta . " <br>";
        $message .= "Tipo de evento: " . $tipo_fiesta . " <br>";
        $message .= "Num. de invitados: " . $num_invitados . " <br>";
        $message .= "Como nos conociste: " . $como_nos_conociste . " <br>";
        $message .= "Enviado el: " . date('d/m/Y', time());

        $mail->setFrom('ayelen@gustavofiorino.com', 'Gustavo Fiorino'); //desde donde se va a enviar
        $mail->addAddress('ayelen@gustavofiorino.com'); //a quien se va a enviar  
        $mail->addBCC('bubuxclan@gmail.com'); //a quien se va a enviar  
        $mail->addBCC('chuyunam93@gmail.com'); 

        //Content
        $mail->isHTML(true);                                
        $mail->Subject = $asunto;
        $mail->Body = $message;

        $mail->send();

        echo "<script>
                alert('Datos enviados con éxito');
            </script>";
        
        echo 'El mensaje se envio correctamente';
        $mensaje = "El mensaje se envio correctamente";
        header('Location: index.html');
        echo('
            <script>
            window.location="index.html";
            </script>');
        //$msj = '200';
    } catch (Exception $e) {
        $msj = "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
    }

 ?>