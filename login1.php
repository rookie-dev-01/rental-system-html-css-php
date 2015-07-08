<?php

if(isset($_POST['submit']))
{
mysql_connect('localhost','root','') or die(mysql_error());
mysql_select_db('bhaada') or die(mysql_error());
$emailid=$_POST['emailid'];
$pwd=$_POST['password'];
if($emailid!=''&&$pwd!='')
{
$query=mysql_query("select * from user where emailid='".$emailid."' and password='".$pwd."'") or die(mysql_error());
$res=mysql_fetch_row($query);
if($res)
{
$_SESSION['emailid']=$emailid;
header('location:index.php');
}
else{echo'<h2>Your entered emailid or password is incorrect</h2>';}
}
else
{echo'<h2>Enter both emailid and password</h2>';}
}
?>
