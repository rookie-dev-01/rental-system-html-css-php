<?php
session_start();

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
header('location:index1.php');
}
else{echo'';}
}
else
{
  echo'';}
}
?>

<html>
  <head>
    <title>bhaada.com</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:700italic,400,300,700' rel='stylesheet' type='text/css'>
    <!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="js/skel.min.js"></script>

    <script src="js/init.js"></script>
    <noscript>
      <link rel="stylesheet" href="css/skel-noscript.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/style-desktop.css" />
    </noscript>
    <!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
    <!--[if lte IE 9]><link rel="stylesheet" href="css/ie/v9.css" /><![endif]-->
  </head>
  <body class="homepage">

  <!-- Header -->
    <div id="header">
      <div class="container">
          
        <!-- Logo -->
          <div id="logo">
            <h1><a href="index1.php">BHAADA.COM</a></h1>
          </div>
        
        <!-- Nav -->
          <nav id="nav" align="centre">
            <ul>
              <li><form action="search.php" method="post">
                <input type="text" class="search_bar_product"  placeholder="" name="search_product">  
                <input type="text" class="search_bar_place"  placeholder="" name="search_place">
                
                </form>
              </li>
              <?php
              if(isset($_SESSION['emailid']))
              {
                  echo "<li><a href='logout.php'>Logout</a></li><li><a href='myprofile.php'>Profile</a></li><li><a href='myproduct.php'>My Products</a></li><li><a href='product_upload.php'>Rent</a></li>";                                    
                  
              }
              else
              {
                  echo "<li ><a href='login.php'>Login</a></li><li><a href='signup.php'>Register</a></li><li><a href='product_upload.php'>List Your Item on rent</a></li>";
                  
              }?>
              
              
            </ul>
          </nav>

      </div>
      <div class="container1">
          
        <!-- Logo -->
        
        <!-- Nav -->
          <nav id="nav1">
            <ul >
              <li><a href="listproduct.php?category=Electronics and Appliances"><img src="images/tv.png" class="img">Electronics and Appliances</a>
                    <ul>
                    <li><a href="listproduct.php?category=Television">Television</a></li>
                    <li><a href="listproduct.php?category=Radio">Radio</a></li>
                    <li><a href="listproduct.php?category=Washing Machine">Washing Machine</a></li>
                    <li><a href="listproduct.php?category=DVD Player">DVD Player</a></li>
                  </ul>
                
              </li>
              <li><a href="listproduct.php?category=Furniture"><img src="images/sofa.png" class="img">Furniture</a>
                  <ul>
                    <li><a href="listproduct.php?category=Sofa">Sofa</a></li>
                    <li><a href="listproduct.php?category=Chair">Chair</a></li>
                    <li><a href="listproduct.php?category=Dinning Table">Dinning Table</a></li>
                    <li><a href="listproduct.php?category=Bed">Bed</a></li>
                  </ul>
                
              </li><li>
                <a href="listproduct.php?category=Adventure Gear"><img src="images/tent.jpg" class="imgbig">Adventure Gear</a>
                  <ul>
                    <li><a href="listproduct.php?category=Camping Tents">Camping Tents</a></li>
                    <li><a href="listproduct.php?category=Tools">Tools</a></li>
                    <li><a href="listproduct.php?category=Sleeping Bags and Mats">Sleeping Bags and Mats</a></li>
                    <li><a href="listproduct.php?category=Rain Ponchos">Rain Ponchos</a></li>
                  </ul>
                
              </li>
                <li>
                <a href="listproduct.php?category=Vehicles"><img src="images/bike.png" class="img">Vehicles</a><br/>
                  <ul>
                    <li><a href="listproduct.php?category=Bicycles">Bicycles</a></li>
                    <li><a href="listproduct.php?category=Scooters">Scooters</a></li>
                    <li><a href="listproduct.php?category=Motor Bikes">Motor Bikes</a></li>
                  </ul>
                </li>
              
              <li>
                  <a href="listproduct.php?category=Other">More Categories</a>
                  <ul class="drop">
                    <li><a href="listproduct.php?category=Computers">Computers</a></li>
                    <li><a href="listproduct.php?category=Cameras">Cameras</a></li>
                    <li><a href="listproduct.php?category=Musical Intruments">Musical Intruments</a></li>
                    <li><a href="listproduct.php?category=Costumes and Dresses">Costumes and Dresses</a></li>
                  </ul> 
              </li>
            </ul> 
          </nav>

      </div>

    </div>



<div id="featured">
      <div class="container">
        <div class="row">
          <section class="4u" >
            <div class="box" >
                <form action='login.php' method='post' onsubmit="return validateform()">
                <h2>Email id:</h2></td><td><input type='text' name='emailid'/></td></tr>
                <h2>Password:</h2><input type='password' name='password'/></td></tr><br/><br/>
                <input type='submit' name='submit' value='Submit' class="button"/></td></tr>
                </form>
<?php
if(isset($_POST['submit']))
{
if($emailid==''&&$pwd=='')
  echo'<h2>Enter both emailid and password</h2>';
  else
  {
$query=mysql_query("select * from user where emailid='".$emailid."' and password='".$pwd."'") or die(mysql_error());
$res=mysql_fetch_row($query);
if(!$res)
  echo'<h2>Your entered emailid or password is incorrect</h2>';
}
}
?>



</div>
          </section>

            </div>
          </div>
          </div>
<div id="copyright" class="container">
      Copy Rights @Bhaada.com 
    </div>    
</body>

</html>






