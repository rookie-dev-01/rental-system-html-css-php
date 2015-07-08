<?php
session_start(); 
$emailid=$_SESSION['emailid'];
$_SESSION['emailid']=$emailid;

$category=$_GET['category'];

$con=mysql_connect("localhost","root","");

$selectdb = mysql_select_db('bhaada',$con);

$sql="SELECT  * FROM product WHERE pcategory='".$category."'";

if ($result=mysql_query($sql,$con))
 {
	while($row = mysql_fetch_array($result) )	
	{
		echo "<br>product name".$row['pname']."<br>user id".$row['emailid']."<br>product price".$row['pprice']."<br>renting duration".$row['pduration']." <br>";
		echo '<img height="300" width="300" src="data:image;base64,'.$row['pimage'].' "> '  ;
	}
 }
else
echo "fiailed to fetch <br>";
 // print_r($_FILES['pimage']);

?>

<html>
<a href="index.php">index</a>
</html>
