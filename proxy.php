<?php

$text = file_get_contents('https://gitee.com/JingHai-Lab/mc521-website-v2/raw/master/countnumber.txt');
header('Content-Type: text/plain');
echo $text;
