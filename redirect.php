<?php
//heads to login if not logged in
session_start();
if (!(isset($_SESSION['emailid'])))
 {
	header ("Location: login.php");
 }

$emailid=$_SESSION['emailid'];
$_SESSION['emailid']=$emailid;
?>
