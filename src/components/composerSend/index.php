<?php
echo "Sayfa Yüklendi!";
header("Access-Control-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//location of Html Template
$template_file="./MailTemplate.html";
//customer Template  To go
$template_customer="./MailTemple2.html";


//time zone
date_default_timezone_set('Europe/Istanbul');

$date = date('d-m-y h:i:s');


//variable to be given  here
$talepDate= $date;
$tcNumara= isset($_GET['kimlitc']) ? $_GET['kimlitc'] : null;
$adSoyad= isset($_GET['adSoyad']) ? $_GET['adSoyad'] : null;
$eposta= isset($_GET['sendto']) ? $_GET['sendto'] : null;
$phoneNumara= isset($_GET['phoneNumber']) ? $_GET['phoneNumber'] : null;



//$_SERVER['HTTP_REFERER']==="http://localhost:3000/";



// get refferer server

if(true){
    

    if($adSoyad && $tcNumara  && $eposta && $phoneNumara){

        //Load composer's autoloader
        require '../vendor/autoload.php';

        $mail = new PHPMailer(true);
        $mailcust= new PHPMailer(true);

        try{

            // SMTP server configuration

            $mail->SMTPDebug = 3;
            $mail->isSMTP();                                      // Send using SMTP  
            $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
             $mail->Username   = 'controlza2021@gmail.com';           // SMTP username
            $mail->Password   = 'rshxkbmxrzuchszc';  
           $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;
            $mail->CharSet = 'utf-8';
    $mail->isHTML(true);
            $mail->setlanguage('tr');

            // Recipients
            $mail->setFrom('controlza2021@gmail.com', 'UygunuSec Talep Form');
            $mail->addAddress("abdoulkowiyy2020@gmail.com");     // Add a recipient
            $mail->addReplyTo('controlza2021@gmail.com', 'UygunuSec');



            // customer part

    $mailcust->SMTPDebug = 3;                      //Enable verbose debug output
    $mailcust->isSMTP();                                            //Send using SMTP
    $mailcust->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mailcust->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mailcust->Username   = 'controlza2021@gmail.com';                     //SMTP username
    $mailcust->Password   = 'rshxkbmxrzuchszc';                               //SMTP password
    $mailcust->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;             //Enable implicit TLS encryption
    $mailcust->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
    $mailcust->isHTML(true);
    $mailcust->CharSet = 'utf-8';
    $mailcust->setlanguage('tr');

    //Recipients customer
    $mailcust->setFrom('controlza2021@gmail.com', 'UygunuSec Talep Form');
    $mailcust->addAddress($eposta);     //Add a recipient
    $mailcust->addReplyTo('controlza2021@gmail.com', 'UygunuSec');

            //variable to template form here
            $spaw_var =array(
                "{talepDate}"=>$talepDate,
                "{tcNumara}"=>$tcNumara,
                "{adSoyad}"=>$adSoyad,
                "{eposta}"=>$eposta,
                "{phoneNumara}"=>$phoneNumara

             );

             //changes for customer part
             $swap_varu =array(
                "{kimliktc}"=>$tcNumara,
                "{adSoyad}"=>$adSoyad,
                "{eposta}"=>$eposta,
                "{phoneNumara}"=>$phoneNumara,
                "{talepDate}"=>$talepDate
             );


            // Content Talep
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = "$adSoyad -  Talebi Formu";

            // $mail->Body    = 'Name: ' . $name . '<br /> Email:' . $email . '<br /><br /><b>Message:</b>'
            // . $message;

            //customer part from here
            $mailcust->isHTML(true);                                  //Set email format to HTML
    $mailcust->Subject = "$adSoyad - Talebi Formu";


    if(file_exists($template_file))
          $mail->Body = file_get_contents($template_file);
    else
        die("Template bulunamadı");

    //customer template

    if(file_exists($template_customer)){
          $mailcust ->Body = file_get_contents($template_customer);
    }
    else{
        die("Template customer bulunamadı");
    }



    //dsiplay swap for the user
    foreach(array_keys($spaw_var) as $key){

        if(strlen($key) > 2 && trim($key) != "")
        $mail->Body=str_replace($key,$spaw_var[$key], $mail->Body);
    
    }

    //arrow control part

foreach(array_keys($swap_varu) as $key){
    if(strlen($key) > 2 && trim($key) != "");
    $mailcust->Body=str_replace($key,$swap_varu[$key], $mailcust->Body);

}

            if($mail->send() && $mailcust->send())
                echo "Message has been sent!";

        }catch (Exception $e){

            echo "Message couldn't be here sent. Error: ", $mail->ErrorInfo;

          echo $e-> errorMessage();

        }
    }else{

        echo "All the fileds are required!";

    }
}else{

    echo "You can't use this server!";

}
?>