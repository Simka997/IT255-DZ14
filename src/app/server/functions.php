<?php
include("konektujMe.php");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    die();
}

function checkIfLoggedIn(){
    global $conn;
    if(isset($_SERVER['HTTP_TOKEN'])){
        $token = $_SERVER['HTTP_TOKEN'];
        $result = $conn->prepare("SELECT * FROM users WHERE token=?");
        $result->bind_param("s",$token);
        $result->execute();
        $result->store_result();
        $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
        return true;
    }
    else{
        return false;
    }
    }
    else{
        return false;
    }
}
function login($username, $password){
    global $conn;
    $rarray = array();
    if(checkLogin($username,$password)){
        $id = sha1(uniqid());
        $result2 = $conn->prepare("UPDATE users SET token=? WHERE username=?");
        $result2->bind_param("ss",$id,$username);
        $result2->execute();
        $rarray['token'] = $id;
    } else{
        header('HTTP/1.1 401 Unauthorized');
        $rarray['error'] = "Invalid username/password";
    }
    return json_encode($rarray);
}

function checkLogin($username, $password){
    global $conn;
    $password = md5($password);
    $result = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?");
    $result->bind_param("ss",$username,$password);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
        return true;
    }
    else{
        return false;
    }
}

function register($username, $password, $firstname, $lastname){
    global $conn;
    $rarray = array();
    $errors = "";
    if(checkIfUserExists($username)){
    $errors .= "Username already exists\r\n";
    }
    if(strlen($username) < 5){
    $errors .= "Username must have at least 5 characters\r\n";
    }
    if(strlen($password) < 5){
    $errors .= "Password must have at least 5 characters\r\n";
    }
    if(strlen($firstname) < 3){
    $errors .= "First name must have at least 3 characters\r\n";
    }
    if(strlen($lastname) < 3){
    $errors .= "Last name must have at least 3 characters\r\n";
    }
    if($errors == ""){
        $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, username,
        password) VALUES (?, ?, ?, ?)");
        $pass =md5($password);
        $stmt->bind_param("ssss", $firstname, $lastname, $username, $pass);
        if($stmt->execute()){
            $id = sha1(uniqid());
            $result2 = $conn->prepare("UPDATE users SET token=? WHERE username=?");
            $result2->bind_param("ss",$id,$username);
            $result2->execute();
            $rarray['token'] = $id;
        }else{
            header('HTTP/1.1 400 Bad request');
            $rarray['error'] = "Database connection error";
        }
    } else{
        header('HTTP/1.1 400 Bad request');
        $rarray['error'] = json_encode($errors);
    }
    return json_encode($rarray);
}

function checkIfUserExists($username){
    global $conn;
    $result = $conn->prepare("SELECT * FROM users WHERE username=?");
    $result->bind_param("s",$username);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
        return true;
    }
    else{
        return false;
    }
}

function addCvet($sifra, $naziv, $cena, $opis,$cvet_tip_id){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $stmt = $conn->prepare("INSERT INTO cvece (sifra, naziv, cena, opis, cvet_tip_id) VALUES (?,?,?,?,?)");
        $stmt->bind_param("jupi", $sifra, $cena, $naziv, $opis,$cvet_tip_id);
       if($stmt->execute()){
            $rarray['success'] = "Uspelo";
        }else{
            $rarray['error'] = "Database connection error";
        }
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}

function getCvece(){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
      $result = $conn->query("SELECT cvece.id,sifra,naziv,cens,opis,tip from cvece,cvet_tip where cvece.cvet_tip_id=cvet_tip.id");
      $num_rows = $result->num_rows;
      $cvece = array();
        if($num_rows > 0)
        {                         
            $result2 = $conn->query("SELECT cvece.id,sifra,naziv,cens,opis,tip from cvece,cvet_tip where cvece.cvet_tip_id=cvet_tip.id");
            
            while($row = $result2->fetch_assoc()) {
                $cvet = array();
                $cvet['id'] = $row['id'];
                $cvet['sifra'] = $row['sifra'];
                $cvet['naziv'] = $row['naziv'];
                $cvet['cena'] = $row['cena'];
                $cvet['opis'] = $row['opis'];
                $cvet['tip'] = $row['tip'];
                array_push($cvece,$cvet);
            }
        }
        $rarray['cvece'] = $cvece;
        return json_encode($rarray);
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}

function getCvet($id){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $result = $conn->query("SELECT cvece.id,sifra,naziv,cens,opis, (SELECT tip FROM cvet_tip WHERE id=cvece.cvet_tip_id) as tip FROM cvece WHERE cvece.id=".$id);
        $num_rows = $result->num_rows;
        $cvece = array();
        if($num_rows > 0)
        {
            $result2 = $conn->query("SELECT cvece.id,sifra,naziv,cens,opis, (SELECT tip FROM cvet_tip WHERE id=cvece.cvet_tip_id) as tip FROM cvece WHERE cvece.id=".$id);
            while($row = $result2->fetch_assoc()) {
                $cvet = array();
                $cvet['id'] = $row['id'];
                $cvet['sifra'] = $row['sifra'];
                $cvet['naziv'] = $row['naziv'];
                $cvet['cena'] = $row['cena'];
                $cvet['opis'] = $row['opis'];
                $cvet['tip'] = $row['tip'];
                $cvece = $cvet;
            }
        }
        $rarray['data'] = $cvece;
        return json_encode($rarray);
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}
function deleteCvet($id){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $result = $conn->prepare("DELETE FROM cvece WHERE id=?");
        $result->bind_param("i",$id);
        $result->execute();
        $rarray['success'] = "Deleted successfully";
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}

function addCvetTip($tip){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $stmt = $conn->prepare("INSERT INTO cvet_tip (tip) VALUES (?)");
        $stmt->bind_param("s", $tip);
        if($stmt->execute()){
            $rarray['success'] = "ok";
        }else{
            $rarray['error'] = "Database connection error";
        }
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}

function getTipoveCveca(){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $result = $conn->query("SELECT * FROM cvet_tip");
        $num_rows = $result->num_rows;
        $cvet_tipovi = array();
        if($num_rows > 0)
        {
            $result2 = $conn->query("SELECT * FROM cvet_tip");
            while($row = $result2->fetch_assoc()) {
                $cvet = array();
                $cvet['id'] = $row['id'];
                $cvet['tip'] = $row['tip'];
                array_push($cvet_tipovi,$cvet);
            }
        }
        $rarray['cvet_tipovi'] = $cvet_tipovi;
        return json_encode($rarray);
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
        return json_encode($rarray);
    }
}
function deleteCvetTip($id){
    global $conn;
    $rarray = array();
    if(checkIfLoggedIn()){
        $result = $conn->prepare("DELETE FROM cvet_tip WHERE id=?");
        $result->bind_param("i",$id);
        $result->execute();
        $rarray['success'] = "Deleted successfully";
    } else{
        $rarray['error'] = "Please log in";
        header('HTTP/1.1 401 Unauthorized');
    }
    return json_encode($rarray);
}
?>
