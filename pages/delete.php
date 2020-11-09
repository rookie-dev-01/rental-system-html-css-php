	<?php
							session_start();
							$con=mysql_connect("localhost","root","");

							$selectdb = mysql_select_db('bhaada',$con);
				
					$pname= $_GET['pname'];

// sql to delete a record
$sql = "DELETE FROM product WHERE pname='$pname'";
if (mysql_query( $sql,$con)) 
{
    echo "Record deleted successfully";
    header('location:myproduct.php');
} else {
    echo "Error deleting record: " ;
}



?>
