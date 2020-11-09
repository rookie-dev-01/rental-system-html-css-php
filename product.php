

<?php
//product uploading

$con=mysql_connect("localhost","root","");
// Check connection
if (!$con)
  {
  echo "Failed to connect to MySQL: " ;
  }
  else 
  {
	echo "connected<br>";
  }

  
 //Create database
//$sql = "CREATE DATABASE movies";
//$dbcon = mysql_query($sql , $con);
//if ($dbcon) {
 //  echo "Database created successfully";
//} else {
 //   echo "Error creating database: ";
//}

$selectdb = mysql_select_db('bhaada',$con);


if($selectdb)
	echo "database selected<br>";
else	echo "db not selected";

  /// sql to create table
$tab = "CREATE TABLE IF NOT EXISTS product(uname VARCHAR(50),mail VARCHAR(50), pid INTEGER(11), pname VARCHAR(50),pprice INTEGER,pduration INTEGER, pudate DATE,pimage LONGBLOB)";

$tabletamil = mysql_query($tab,$con);

if ($tabletamil) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " ;
}
/*  
$moviename = $_POST['moviename'];
$budget = $_POST['budget'];
$maleactor = $_POST['maleactor'];
$femaleactor = $_POST['femaleactor'];
$director = $_POST['director'];
$producer = $_POST['producer'];
$musicdirector = $_POST['musicdirector'];
$lyricist = $_POST['lyricist'];
$review = $_POST['review'];

  $insert = "INSERT INTO tamil VALUES ('$moviename','$budget','$maleactor','$femaleactor','$director','$producer','$musicdirector','$lyricist','$review')";

 
 $inserted = mysql_query($insert, $con);
 header('location:index.php');
 	if ($inserted) 
	{
    echo "New record created successfully";
	header('location:index.php');
	}
 else 	
	{
    echo "Error: ";
	}
*/ 
//$sql="SELECT Lastname,Age FROM Persons ORDER BY Lastname";

//if ($result=mysqli_query($con,$sql))
 // {
  // Return the number of rows in result set
  //$rowcount=mysqli_num_rows($result);
 // printf("Result set has %d rows.\n",$rowcount);
  // Free result set
 // mysqli_free_result($result);
  //}

//mysqli_close($con);
?>