
<?php
session_start();
$emailid=$_SESSION['emailid'];
$_SESSION['emailid'] = $emailid;
?>
<html>
<head>
<title>Login</title>


</head>
<body>

<form action='changepassword.php' method='post' onsubmit="return validateform()">
<table cellspacing='5' align='center'>
<tr><td>Old Password</td><td><input type='password' name='oldpassword'/></td></tr>
<tr><td>New Password:</td><td><input type='password' name='newpassword'/></td></tr>
<tr><td>Re-enter New Password:</td><td><input type='password' name='renewpassword'/></td></tr>
<tr><td></td><td><input type='submit' name='submit' value='Submit'/></td></tr>
<tr><td>
<?php
if(isset($_POST['submit']))
{
 mysql_connect('localhost','root','') or die(mysql_error());
 mysql_select_db('bhaada') or die(mysql_error());
 //$emailid=$_POST['emailid'];

 $opwd=$_POST['oldpassword'];
 $npwd=$_POST['newpassword'];
 $rnpwd=$_POST['renewpassword'];



   $query=mysql_query("SELECT * FROM user WHERE emailid='".$emailid."' and password='".$opwd."'") or die(mysql_error());
   //$result=mysql_query($sql,$con)
   $res=mysql_fetch_array($query);
   
   if($res['password']==$opwd)
   {
      if($npwd==$rnpwd)
        {
          $uquery=mysql_query("UPDATE user SET password='".$npwd."' where emailid='".$emailid."'") or die(mysql_error());
            $ures=mysql_query($uquery);
    
             if(!$ures)
              {
                echo "Updated<br>";
              }
              else
              {
                echo "not Updated";
              }
          }
        else
        {
          echo'You entered password is incorrect(one)';
        }
    }
    else
    {
      echo'You entered password is incorrect(two)';
    }
}
?>



</td></tr>
</table>

</form>
</body>
</html>
