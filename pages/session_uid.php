<?php
SESSION_START();
if( $_POST[ 'my_btn' ] ) 
{
$_SESSION['uid_session'] = $_POST['uid'];
header('location:product_upload.php');
}
?>

<html>
<form name="myform" action="session_uid.php" method="post">
<input type="number" name="uid" />
<input type="submit" name="my_btn" value="pass_user_id">
</form>

</html>