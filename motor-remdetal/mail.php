<?php 
  $to = 'antonsadlov@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
  $subject = 'Обратный звонок'; //Загаловок сообщения
  $message = '
    <html>
      <head>
        <title>'.$subject.'</title>
      </head>
      <body>
        <p>Имя: '.$_POST['name'].'</p>
        <p>Телефон: '.$_POST['phone'].'</p>                        
        <p>Email: '.$_POST['email'].'</p>                        
        <p>nСообщение: '.$_POST['message'].'</p>                        
      </body>
    </html>'; //Текст нащего сообщения можно использовать HTML теги
  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
  $headers .= "From: Отправитель <antonsadlo@gmail.com>\r\n"; //Наименование и почта отправителя
  if (mail($to, $subject, $message, $headers)) {//Отправка письма с помощью функции mail
    echo "Сообщение отправленно! <br> Дякую за звернення, ми вам зателефонуємо протягом 12 годин!";
  } else {
    echo "Ошибка отправки сообщения.";
  }
?>
