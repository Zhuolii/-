<?php
if(isset($_POST['submit'])){
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $objet = $_POST['objet'];
    $message = $_POST['message'];

    $mailTo = "davidli271098@gmail.com";
    $headers = "From: ".$email;
    $txt = "Vous avez reçu un email de ".$nom." ".$prenom.",Tel: ".$telephone.",Objet: ".$objet."\n\n"."Message:\n\n".$message;

    mail($mailto, $objet, $txt, $headers);
    header("Location: contact.html?mailsend");

}






?>