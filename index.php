<?php

session_start();
if (!(isset($_SESSION['emailid'])))
 {
	header ("Location: login.php");
 }

$emailid=$_SESSION['emailid'];
$_SESSION['emailid']=$emailid;







?>

<html>
<a href="myprofile.php">myprofile</a>
<a href="changepassword.php">changepassword</a>
<a href="displayproduct.php?category=77">id77</a>
<a href="logout.php">logout</a>

</html>