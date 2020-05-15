<?php

error_reporting(E_ALL);
$recepient = "my@yandex.ru"; // адрес получателя
$sitename = "УкрСепроЦентр";

$tel = trim($_POST["tel"]);
$text = trim($_POST["text"]);

  date_default_timezone_set("UTC"); // Устанавливаем часовой пояс по Гринвичу
  $time = time(); 
  $offset = 3; 
  $time += 3 * 3600; // Добавляем 3 часа к времени по Гринвичу
  $today = date("H:i:s || d-m-Y", $time); 

$message = "Разрешительные документы: \nТелефон: $tel \nТекст: $text \nДата: $today";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>