
<html>

<form action='#' method='post' >
<table cellspacing='5' align='center'>
<tr><td>Email id:</td><td><input type='text' name='emailid'/></td></tr>
<tr><td>Password:</td><td><input type='password' name='password'/></td></tr>
<tr><td>Confirm Password:</td><td><input type='password' name='re-password'/></td></tr>
<tr><td></td><td><input type='submit' name='Signup' value='Signup'/></td></tr>
</table>
</form>
<?php
session_start();
if(isset($_POST['submit']))
{
 mysql_connect('localhost','root','') or die(mysql_error());
 mysql_select_db('bhaada') or die(mysql_error());
 $emailid=$_POST['emailid'];
 $pwd=$_POST['password'];
 $repwd=$_POST['re-password'];
 if($pwd != $repwd)
 {
 	echo "Re-enter the password";
 }
 if($emailid!=''&&$pwd!='')
 {
   $query=mysql_query("select * from user where emailid='".$emailid.") or die(mysql_error());
   $res=mysql_fetch_row($query);
   if($res)
   {
    $_SESSION['emailid']=$emailid;
    header('location:index.php');
   }
   else
   {
    echo'You entered emailid or password is incorrect';
   }
 }
 else
 {
  echo'Enter both emailid and password';
 }
}
?>

</html>