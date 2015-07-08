<?php
session_start();
echo ",,".$emailid."";
?>
<!DOCTYPE html>
<html>
<body>

<?php
// remove all session variables
session_unset(); 

// destroy the session 
session_destroy(); 
header('location:index1.php');
?>

</body>
</html>