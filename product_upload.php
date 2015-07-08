<?php
//product uploading

session_start(); 

if(isset($_SESSION['emailid']))
{                            
    $emailid=$_SESSION['emailid'];
    $_SESSION['emailid']=$emailid;



$con=mysql_connect("localhost","root","");

$selectdb = mysql_select_db('bhaada',$con);
if(isset($_POST['submit']))
{
    if($_FILES['pimage']['name']==' '||$_FILES['pimage']['tmp_name']=='')
    {
        echo " ";
    }
    else
   {
//basename= gives name as well as extension(jpeg or png etc)
     $imagename=basename($_FILES['pimage']['name']);
     $image=addslashes($_FILES['pimage']['tmp_name']);
    $image= file_get_contents($image);
    $image=base64_encode($image);
}


$date=date("Y/m/d");
$pname=$_POST['pname'];
$pcategory=$_POST['pcategory'];
$pprice=$_POST['pprice'];
$pduration=$_POST['pduration'];
$psubcategory=$_POST['psubcategory'];
$prentalfor=$_POST['prentalfor'];
$pdescription=$_POST['pdescription'];
$pconditions=$_POST['pconditions'];


if($emailid==''||$pname==''||$pcategory==''||$psubcategory==''||$pdescription==''||$prentalfor==''||$pprice==''||$pduration==''||$date=='')
{
    echo " ";
}
else
{

$qry= "INSERT INTO product VALUES('$emailid','$pname','$pcategory','$psubcategory','$pdescription','$pconditions','$prentalfor','$pprice','$pduration','$date','$image','$imagename')";
$result = mysql_query($qry,$con);
if($result)
 { 
   header('location:myproduct.php');
 }
else
    echo "failed";

}
}
}
/*echo "EMAILID".$emailid;
*/


/*$sql="SELECT  * FROM product WHERE emailid='".$emailid."'";

if ($result=mysql_query($sql,$con))
  {
while($row = mysql_fetch_array($result) )
{
    echo "<br>product name".$row['pname']."<br>product price".$row['pprice']."<br>renting duration".$row['pduration']." <br>";
    echo '<img height="300" width="300" src="data:image;base64,'.$row['pimage'].' "> '  ;
}
}
else
echo "fiailed to fetch <br>";
 // print_r($_FILES['pimage']);
}*/
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
                                    $emailid=$_SESSION['emailid'];
                                    $_SESSION['emailid']=$emailid;

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





<link rel="stylesheet" type="text/css" href="./font.css">
<div id="featured">
      <div class="container">
        <div class="row">
          <section class="4u1" >
            <div class="box1" >


<h1><b>Product Rental Form</b></h1>
                <p >Any individual can now earn extra money by putting up their stuff for rent. Fill up this form and your product would be listed on <b>Bhaada.com</b> for FREE.</p>
           <form method="post" name="contact" action="product_upload.php" enctype="multipart/form-data">
<?php

if(isset($_POST['submit']))
{
    if(isset($_SESSION['emailid']))
    {
                            
if($emailid==''||$pname==''||$pcategory==''||$psubcategory==''||$pdescription==''||$prentalfor==''||$pprice==''||$pduration==''||$date=='')
{
    echo "<h2><font color='red'>Enter all the required fields! * are mandatory!</font></h2>";
}
}
else
    echo "<h2><font color='red' size='5'>Please Login to Add Your Item!</font></h2>";
}
?>                    	

                <p><h2><b>Product Name  <font color="red">*</font></b></h2></p>
                <input type="text" name="pname" value=""> <br/><br/>
                
                        <p><h2><b>Category   <font color="red">*</font></b></h2></p>
                        <select name="pcategory" id="category">
                    <option value="">Select</option>
                    <option value="Adventure Gear">Adventure Gear</option>
                    <option value="Audio Visual Equipments">Audio Visual Equipments</option>
                    <option value="Baby Accessories and Toys">Baby Accessories and Toys</option>
                    <option value="Bikes and Scooters">Bikes and Scooters</option>
                    <option value="Cameras">Cameras</option>
                    <option value="Computers">Computers</option>
                    <option value="Costumes, Dresses and Accessories">Costumes, Dresses and Accessories</option>
                    <option value="Electronics and Appliances">Electronics and Appliances</option>
                    <option value="Event and Wedding Supplies">Event and Wedding Supplies</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Medical Supplies">Medical Supplies</option>
                    <option value="Musical Instruments">Musical Instruments</option>
                    <option value="Office Furniture">Office Furniture</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Other">Other</option>  
                          </select>
                          <input type="text" placeholder="Other Category Name" name="category_other" id="category_other" value="" style="display: none;">
                <br/><br/>
                        <p><h2><b>Sub Category   <font color="red">*</font></b></h2></p>
                        <select name="psubcategory" id="subcategory"><option value="">Select</option>
                            <option value="Television">Television</option>
                            <option value="Radio">Radio</option>
                            <option value="Washing Machine">Washing Machine</option>
                            <option value="DVD Player">DVD Player</option>
                            <option value="Sofa">Sofa</option>
                            <option value="Chair">Chair</option>
                            <option value="Dinning Table">Dinning Table</option>
                            <option value="Bed">Bed</option>
                <option value="Camping Tents">Camping Tents</option>
                <option value="Tools">Tools</option>
                <option value="Sleeping Bags and Mats">Sleeping Bags and Mats</option>
                <option value="Rain Ponchos">Rain Ponchos</option>
                <option value="Bicycles">Bicycles</option>
                <option value="Scooters">Scooters</option>
                <option value="Motor Bikes">Motor Bikes</option>
                <option value="Computers">Computers</option>
                <option value="Cameras">Cameras</option>
                <option value="Musical Intruments">Musical Intruments</option>
                <option value="Costumes and Dresses">Costumes and Dresses</option></select>
                <input type="text" placeholder="Other Subcategory Name" name="subcategory_other" id="subcategory_other" value="" style="display: none;">
                
                <br/><br/>
                        
                        <p><h2><b>Description   <font color="red">*</font></b></h2></p>
                
                <textarea name="pdescription" cols="100" rows="5"  style="" ></textarea>
				<br/><br/>
                        
                        <p><h2><b>Terms &amp; Conditions   </b></h2></p>
                <textarea name="pconditions" cols="40" rows="5"  style=""></textarea>
                <br/><br/>
                        <p><h2><b>Product Image</b></h2></p><input type="file"  name="pimage"  size="15" />
                
                <br/><br/>
                        
                        <p><h2><b>Rental for   <font color="red">*</font></b></h2></p>
                
                <select name="prentalfor">
                	<option value="">Select</option>
                	<option value="individual">Individual</option>
                    <option value="business">Business</option>
                    <option value="both">Both</option>
                </select>
                 
                <br/><br/>
                        
                        <p><h2><b>Rental frequency   <font color="red">*</font></b></h2></p>
                
                <select name="pduration">
                	<option value="">Select</option>
                	<option value="per hour">Per Hour</option>
                    <option value="per day">Per Day</option>
                    <option value="per week">Per Week</option>
                    <option value="per month">Per Month</option>
                </select>
                 
                <br/><br/>
                        
                        <p><h2><b>Rental Charges   <font color="red">*</font></b></h2></p>
                
                <input type="text" name="pprice" style="width:100px;" value=""> Rs
                 
                
       <br/><br/>          
                        
								<input type="submit" name="submit" value="Submit" class="button"></input>
                    </form>
                
</div>
          </section>

            </div>
          </div>
          </div>

       <div id="copyright" class="container">
      Copy Rights @Bhaada.com 
    </div>    
        
</html>