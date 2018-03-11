<?php

$userName = $_POST["userName"] ? $_POST["userName"] : "Не указано";
$companyName = $_POST["companyName"] ? $_POST["companyName"] : "Не указано";
$userEmail = $_POST["userEmail"] ? $_POST["userEmail"] : "Не указано";
$userTel = $_POST["userTel"] ? $_POST["userTel"] : "Не указано";
$userComment = $_POST["userComment"] ? $_POST["userComment"] : "Не указано";

$recipient = "info@westpower.ru";
$subject = "Обратная связь: " . $_POST["serviceName"];
$message = "Имя пользователя: " . $userName . "\n" .
"Email пользователя: " . $userEmail . "\n" .
"Телефон пользователя: " . $userTel . "\n" .
"Название компании: " . $companyName . "\n" .
"Сообщение пользователя: " . $comment;

mail($recipient, $subject, $message);
?>