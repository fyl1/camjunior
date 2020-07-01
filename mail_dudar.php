<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$comm = $_POST['comm'];

$text = ' Имя: '.$name.'  Телефон: '.$phone.'  Текст: '.$comm;

$headers = "From: camjunior.ru\r\nReply-to: $phone\r\nContent-type: text; charset=utf-8\r\n";

$success = mail('orlovbogdan1998@gmail.com, redhope085@gmail.com', $headers, $text);
// $success = mail('Dizilll@mail.ru, reg_nik@icloud.com, Dizilll1@yandex.ru', $headers, $text);

?>

