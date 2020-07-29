<?php

session_start();

$user = $_SESSION['user'];

if($user === 'admin'){
    echo '{
        "message":"this is a secret message only the admin can see",
        "success": true
    }';
}else{
    echo '{
        "message": "who the f are you",
        "success": false
    }';
}

?>