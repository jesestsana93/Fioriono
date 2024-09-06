<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;  
    use PHPMailer\PHPMailer\Exception; 

    require 'PHPMailer/Exception.php'; 
    require 'PHPMailer/PHPMailer.php'; 
    require 'PHPMailer/SMTP.php'; 
    //require('./Captcha.php');

    //$captcha = new Captcha();

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = 2;                    
        $mail->isSMTP(); 
        $mail->Host = 'soluciones.webcorp.com.mx'; //smtp.gmail.com para gmail                   
        $mail->SMTPAuth = true;  
        $mail->Username = 'contacto@soluciones.webcorp.com.mx';  
        $mail->Password = '(97v){4HJDia';                                
        $mail->SMTPSecure = 'ssl';  
        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465; 

        //var_dump($_POST);
        $name = utf8_decode($_POST['name']);
        $email = $_POST['email'];
        $empresa = $_POST['empresa'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

   

        $asunto = 'Mensaje de ' . $name;

        $message = "Este mensaje fue enviado por: " . $name. " <br>";
        $message .= "Su correo es: " . $email . " <br>";
        $message .= "Empresa: " . $empresa . " <br>";
        $message .= "Teléfono: " . $phone . " <br>";
        $message .= "Mensaje: " . utf8_decode($_POST['message']) . " <br>";
        $message .= "Enviado el: " . date('d/m/Y', time());

        $mail->setFrom('contacto@soluciones.webcorp.com.mx', 'Webcorp'); //desde donde se va a enviar
        $mail->addAddress('contacto@soluciones.webcorp.com.mx'); //a quien se va a enviar  
        $mail->addAddress('chuyunam93@gmail.com'); 
        $mail->addAddress('jesusweb.2021@gmail.com'); 
        $mail->addAddress('jesestsana93@hotmail.com');

        //Content
        $mail->isHTML(true);                                
        $mail->Subject = $asunto;
        $mail->Body = $message;

        $mail->send();

        
        //$msj = '200';
    } catch (Exception $e) {
        $msj = "Hubo un error al enviar el mensaje: {$mail->ErrorInfo}";
    }

 ?>