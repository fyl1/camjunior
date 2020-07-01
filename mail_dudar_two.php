<?php 

$name_pop = $_POST['name_pop'];
$phone_pop = $_POST['phone_pop'];
$comm_pop = $_POST['comm_pop'];

$text_pop = ' Имя: '.$name_pop.'  Телефон: '.$phone_pop.'  Текст: '.$comm_pop;

$headers_pop = "From: camjunior.ru\r\nReply-to: $phone_pop\r\nContent-type: text; charset=utf-8\r\n";

$success_pop = mail('97fyl97@gmail.com',  $headers_pop, $text_pop);

?>
