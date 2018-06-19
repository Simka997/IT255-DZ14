<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers: X-Requested-With');
header("Content-type: application/json");
$posts = array(
    array('sifra' => 1, 'naziv'=>"Kati", 'cena' => 2521,'opis' => "Lohsjb ahsrwfajk hasjka haskhdf"),
    array('sifra' => 2, 'naziv'=>"Djum",'cena' => 3001, 'opis' => "Lohsjb sgeewasgr regerg sgserg"),
    array('sifra' => 3, 'naziv'=>"LKati",'cena' => 1351, 'opis' => "sgerg regwe rhwe rervedf"),
    array('sifra' => 6, 'naziv'=>"Opi",'cena' => 881, 'opis' => "Lohsjb 3w btrt aerwreecrsw wrekhdf"),
    array('sifra' => 7, 'naziv'=>"Topi",'cena' => 6411, 'opis' => "Lohsjb vrw btrt awr skhdf"),
    array('sifra' => 8,  'naziv'=>"Nopi", 'cena' => 681,'opis' => "Lohsjb thrr btrt aersk rhdf"),
    array('sifra' => 9, 'naziv'=>"Smopi", 'cena' => 8431, 'opis' => "Lohsjb agertgasjkcwatgb btrt askhdf"),
    array('sifra' => 10, 'naziv'=>"RUza", 'cena' => 1511, 'opis' => "Lohsjb s fs btrt rwvee w"),
    array('sifra' => 11, 'naziv'=>"Fika", 'cena' => 3541, 'opis' => "Lohsjb agertefwegasjkarrectgb btef wre t askhdf"),
    array('sifra' => 12, 'naziv'=>"Nenam",'cena' => 1547, 'opis' => "Lohsjb ef stgasjkatgb btrt eskhdf"),
   
);
echo json_encode($posts);