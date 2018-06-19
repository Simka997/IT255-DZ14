<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');

    include("functions.php");

if (isset($_POST['sifra']) &&  isset($_POST['naziv']) && isset($_POST['cena']) && isset($_POST['opis']) && isset($_POST['id'])){
  $sifra = $_POST['sifra'];
  $naziv = $_POST['naziv'];
  $cena =  $_POST['cena'];
  $opis = $_POST['opis'];
  $id = $_POST['id'];

  if(isset($_POST['cvet_tip_id']) && !empty($_POST['cvet_tip_id'])){
    $cvet_tip_id = intval($_POST['cvet_tip_id']);
} else{
    $cvet_tip_id = null;
}
  echo updateCvet($sifra, $naziv, $cena, $opis,$cvet_tip_id, $id);
}

?>