<?php
	//подключаем phpmailer
	require_once('class.phpmailer.php');

	if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
	    $name = htmlspecialchars($_POST['name']);
			$email = htmlspecialchars($_POST['email']);
			$phone = htmlspecialchars($_POST["phone"]);
			$message = htmlspecialchars($_POST['message']);
	    $mail = new PHPMailer();
	    $mail->IsSMTP();
	    $mail->Host       = "smtp.gmail.com"; 
	    $mail->SMTPDebug  = 0; 
	    $mail->SMTPAuth   = true;
	    $mail->SMTPSecure = "ssl";
	    $mail->Port       = 465;
	    $mail->Priority    = 3;
	    $mail->CharSet     = 'UTF-8';
	    $mail->Encoding    = '8bit';
	    $mail->Subject     = "Тест php mailer";
	    $mail->ContentType = "text/html; charset=utf-8\r\n";
	    $mail->Username   = "antonsadlov@gmail.com";
	    $mail->Password   = "antoha2003";
	    $mail->isHTML(true); 
	    $mail->Body = "\n\nИмя: ".$name."\n\nТелефон: " .$phone."\n\nE-mail: " .$email."\n\nСообщение: ".$message."\n\n";;
	    $mail->WordWrap = 100;
	    $mail->AddAddress($email);

	    if (!$mail->send()) {
	    	echo "Ошибка отправки сообщения.";
			}
	}
	echo "Сообщение отправленно!";

?>