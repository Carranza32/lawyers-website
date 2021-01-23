<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\SMTP;
   use PHPMailer\PHPMailer\Exception;
   
   // Load Composer's autoloader
   require 'vendor/autoload.php';

   header('Access-Control-Allow-Origin: *');
   header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
   header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
   
   $rest_json = file_get_contents("php://input");
   $_POST = json_decode($rest_json, true);

   if (empty($_POST['name']) && empty($_POST['email'])) die();

   if ($_POST){
	   // set response code - 200 OK
      http_response_code(200);

      $mail=new PHPMailer();
      $mail->CharSet = 'UTF-8';
      
      $subject = $_POST['name'];
      $from = $_POST['email'];
      $to = "sportelloconsulenze@gmail.com";
      $body = $_POST['coments'];

      // Headers
      $headers = "MIME-Version: 1.0\r\n";
      $headers.= "Content-type: text/html; charset=UTF-8\r\n";
      $headers.= "From: <" . $from . ">";

      $mail->SetFrom($_POST['email'],  $_POST['name']);
      $mail->Subject = 'Correo de prueba PHPMailer';
      $mail->MsgHTML($body);

      // echo json_encode( $_POST );
      echo json_encode(array(
         "sent" => true
      ));

      try {
         $mail->send();
         echo "Message has been sent successfully";
      } catch (Exception $e) {
            echo "Mailer Error: " . $mail->ErrorInfo;
      }
	}
   else{
	// tell the user about error
	   echo json_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>