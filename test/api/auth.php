<?php

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == 'admin' && $password == 'admin') {
        ?>
{
    "success": true,
    "secret": "this is the secret no one knows but the admin"
}
    <?php
    } else {
        ?>
{
    "success": false,
    "message": "invalid credentials "
}
    <?php
    }
} else {
    //var_dump($_POST)
    ?>
{
    "success": false,
    "message": "only POST access accepted "
}
    <?php
}

?>