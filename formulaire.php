<?php
/*
if(isset($_POST['submit'])){
    $nom = $_POST['Nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $objet = $_POST['objet'];
    $message = $_POST['message'];

    $mailTo = "davidli271098@gmail.com";
    $headers = "From: ".$email;
    $txt = "Vous avez reçu un email de ".$nom." ".$prenom.",Tel: ".$telephone.",Objet: ".$objet."\n\n"."Message:\n\n".$message;

    //database connection

    $conn = new mysqli("localhost","root","",'formulaires')
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registration(nom, prenom, email, telephone, objet, message)values(?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssiss",$nom, $prenom, $email, $telephone, $objet, $message);
        $stmt ->execute();
        echo "registration successfull...";
        $stmt ->close();
        $conn -> close();
    }

  

}

*/

if(isset($_POST["submit"])){
    $nom = $_POST['Nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $objet = $_POST['objet'];
    $message = $_POST['message'];


    if(empty($nom) || empty($prenom) || empty($email) || empty($telephone) || empty($objet) || empty($message) ||){

        header("location:contact.html?error");
    }
    else{

        $to ="davidli271098@gmail.com";

        if(mail($to, $objet, $message, $email)){
            header("location:contact.html?success");
        }
    }


}
else{
    header("location:contact.html");
}




?>