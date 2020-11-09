/*
	author: istockphp.com
*/
jQuery(function($) {
	$(".page-link a, a#login-top-menu").click(function(){
		$('.error-password').html("");
		$('.error-user').html("");
		$('.error-both').html("");
		$('#login-for input#username, #login-for input#password').val("");
		$('#login-for .error-box').hide();
		// scroll body to 0px on click
		$('body,html').animate({
			scrollTop: 90
		}, 800);
		$("#toPopup").css("position","absolute");
	});

	$("#get-alert, #guest_enquiry, #rate-vendor,.getquot_submit_click, #rate-vendor-form, #view_vendor_review,.login-detail-wishlist-cat,.login-detail-wishlist-cat-form").click(function() {
		// scroll body to 0px on click
		$('body,html').animate({
			scrollTop: 90
		}, 800);
		$("#toPopup").css("position","absolute");
	});

	$(".view-vendor-contact").click(function(){
		$("#toPopup").css("position","fixed");
	});

$(".login-detail-wishlist-cat-form").click(function(){
		$("#toPopup").css("position","absolute");
	});
	$(".wishlist_vari").click(function(){
				$("#toPopup").css("position","absolute");
	});

	$(".wishlist_submit_form").click(function(){
					$("#toPopup").css("position","absolute");
	});


	$("#login-top-menu").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second
		// Reset Form to login form
		$('#login-for .error-box').hide();
		$("#toPopup .form-box").show();
		$("#toPopup .ajax_data").html('');

		$('#login-for form').removeAttr("id");
		$('#login-for form').attr("id","login-form-top-menu");
		$('#login-for form .form-login').removeAttr("onclick");
		$('#login-for form .form-login').attr("onclick","login_form_call('top_menu')");
		return false;
	});

	$("#get-alert").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second
		// Reset Form to login form
		$("#toPopup .form-box").hide();
		//$("#toPopup .ajax_data").html('');
		$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

		$.post('./ajaxcall/getAlertForm.php','',function(data){
				if(data != null) {
					//$("#osx-modal-content form").hide();
					$(".ajax_data").html(data);
				}
			}); // end post
		return false;
	});


	$("#login-list-wishlist").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second
		// Reset Form to login form
		$("#toPopup .form-box").show();
		$("#toPopup .ajax_data").html('');

		$('#login-for form').attr("id","login-form-list-wishlist");
		$('#login-for form .form-login').attr("onclick","login_form_call('list_wishlist')");
		return false;
	});


	$("#login-list-enquiry").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

		$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

		var field =$(".product-result input[type='checkbox']");
		var selectedProducts = new Array();
		var j = 0; // for selected products
		for (i = 0; i < field.length; i++){
			if($(field[i]).is(':checked')){
				selectedProducts[j] = $(field[i]).val();
				j++;
			}
		} // end for loop
		if(selectedProducts.length>0){
			// Show Guest Enquiry button
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');
			$('#login-for form #guest_enquiry').css("display","inline-block");
			$('#login-for form #guest_enquiry').attr("onclick","guest_enquiry_function('list_enquiry')");

			$('#login-for form').attr("id","login-form-list-enquiry");
			$('#login-for form .form-login').attr("onclick","login_form_call('list_enquiry')");
		}
		else {
			$('.form-box').hide();
			$(".ajax_data").html("<div class='error-box'>Select atleast one product.</div>");
		}
		return false;
	});



	$("#login-list-enquiry-form").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			$(".form-box").html("");

			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");
			// Reset Form to login form
			$("#toPopup .form-box").show();
			//$("#toPopup .ajax_data").html('');


			var field =$(".product-result input[type='checkbox']");
				var selectedProducts = new Array();
			var j = 0; // for selected products
			for (i = 0; i < field.length; i++){
			if($(field[i]).is(':checked')){
			selectedProducts[j] = $(field[i]).val();
			j++;
			}
			} // end for loop

			// selected product name
			var fieldName =$(".product-result input[type='hidden']");
			var selectedProductsName = new Array();
			var count = 0;
			var j = 0;
			for (i = 0; i < field.length; i++){
			if($(field[i]).is(':checked')){
			count = count+1;
			selectedProductsName[j] = $(fieldName[i]).val();
			j++;
			}
			}

			// Send Enquiry Form
			$.post('./ajaxcall/sendEnquiryForm.php',{"prod_id":selectedProducts,"selected_prod":selectedProductsName},function(data){
			if(data != null) {
			$(".form-box").hide();
			$(".ajax_data").html(data);
			//$("#toPopup").css("top", "20px");
			}
			}); // end post
		//$('#login-for form').attr("id","login-form-list-enquiry");
		//$('#login-for form .form-login').attr("onclick","login_form_call('list_enquiry')");
		return false;
	});




	$("#wo-login-list-enquiry").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			//$(".form-box").html("");

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$(".form-box .left").hide();
			$(".form-box .right").hide();
			$("#toPopup .ajax_data").show();

			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");


			var field =$(".product-result input[type='checkbox']");
				var selectedProducts = new Array();
			var j = 0; // for selected products
			for (i = 0; i < field.length; i++){
			if($(field[i]).is(':checked')){
			selectedProducts[j] = $(field[i]).val();
			j++;
			}
			} // end for loop

			// selected product name
			var fieldName =$(".product-result input[type='hidden']");
			var selectedProductsName = new Array();
			var count = 0;
			var j = 0;
			for (i = 0; i < field.length; i++){
			if($(field[i]).is(':checked')){
			count = count+1;
			selectedProductsName[j] = $(fieldName[i]).val();
			j++;
			}
			}

			$(".ajax_data").html('');

			// Send Enquiry Form
			$.post('./ajaxcall/sendEnquiryForm.php',{"prod_id":selectedProducts,"selected_prod":selectedProductsName,"wo_login":'wo_login',"page_type":'detail'},function(data){
			if(data != null) {
			$(".form-box").hide();
			$(".ajax_data").html(data);
			//$("#toPopup").css("top", "20px");
			}
			}); // end post
		//$('#login-for form').attr("id","login-form-list-enquiry");
		//$('#login-for form .form-login').attr("onclick","login_form_call('list_enquiry')");
		return false;
	});



	$("#login-list-wishlist-form").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');


			var field =$(".product-result input[type='checkbox']");
				var selectedProducts = new Array();
			var j = 0; // for selected products
			for (i = 0; i < field.length; i++){
			if($(field[i]).is(':checked')){
			selectedProducts[j] = $(field[i]).val();
			j++;
			}
			} // end for loop

			// selected product name
			var fieldName =$(".product-result input[type='hidden']");
			var selectedProductsName = new Array();
			var count = 0;
			var j = 0;
			for (i = 0; i < field.length; i++){
			if($(field[i]).is(':checked')){
			count = count+1;
			selectedProductsName[j] = $(fieldName[i]).val();
			j++;
			}
			}

			//hide login form
			$(".form-box").hide();

			if(count!=0) {

			// Send Enquiry Form
			$.post('./ajaxcall/addWishlist.php',{"prod_id":selectedProducts},function(data){
				if(data != null) {
					//$("#osx-modal-content form").hide();
					$(".ajax_data").html(data);
				}
			}); // end post
			} // end if(count!=0)
			else {
				$(".ajax_data").html("<div class='error-box'>Select atleast one product.</div>");
			}
		//$('#login-for form').attr("id","login-form-list-enquiry");
		//$('#login-for form .form-login').attr("onclick","login_form_call('list_enquiry')");
		return false;
	});


	//################### Detail Page ###############################

	$("#login-detail-wishlist").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');


		$('#login-for form').attr("id","login-form-detail-wishlist");
		$('#login-for form .form-login').attr("onclick","login_form_call('detail_wishlist')");
		return false;
	});


$(".login-detail-wishlist-cat").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');

			var whole = $(this).attr("class");
						//alert(whole);
						var classArray = whole.split(' ');
						//alert(classArray);
						document.wish_prod = classArray[1];

		//$('#login-for form').attr("class","login-form-detail-wishlist-cat");
		$('#login-for form .form-login').attr("onclick","login_form_call('detail_wishlist-cat')");
		return false;
	});


	$("#login-detail-enquiry").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
		$("#toPopup .form-box").show();
		//$("#toPopup .ajax_data").html('');
		$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");


		// Show Guest Enquiry button
		$("#toPopup .form-box").show();
		$("#toPopup .ajax_data").html('');
		$('#login-for form #guest_enquiry').css("display","inline-block");
		$('#login-for form #guest_enquiry').attr("onclick","guest_enquiry_function('detail_enquiry')");

		$('#login-for form').attr("id","login-form-detail-enquiry");
		$('#login-for form .form-login').attr("onclick","login_form_call('detail_enquiry')");
		return false;
	});



	$("#login-detail-enquiry-form").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			$(".form-box").html("");

			// Reset Form to login form
			$("#toPopup .form-box").show();
			//$("#toPopup .ajax_data").html('');
			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");


			//var selectedProducts = new Array();
			//var selectedProductsName = new Array();
			var selectedProducts = $(".product-detail #prodno").val();
			var selectedProductsName = $(".product-detail #prod_name").val();

			// Send Enquiry Form
			$.post('./ajaxcall/sendEnquiryForm.php',{"prod_id":selectedProducts,"selected_prod":selectedProductsName},function(data){
			if(data != null) {
			$(".form-box").hide();
			$(".ajax_data").html(data);
			//$("#toPopup").css("top", "20px");
			}
			}); // end post
		//$('#login-for form').attr("id","login-form-list-enquiry");
		//$('#login-for form .form-login').attr("onclick","login_form_call('list_enquiry')");
		return false;
	});




	$("#wo-login-detail-enquiry").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			//$(".form-box").html("");

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$(".form-box .left").hide();
			$(".form-box .right").hide();
			$("#toPopup .ajax_data").show();

			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");


			//var selectedProducts = new Array();
			//var selectedProductsName = new Array();
			var selectedProducts = $(".product-detail #prodno").val();
			var selectedProductsName = $(".product-detail #prod_name").val();

			//$(".ajax_data").html('');

			// Send Enquiry Form
			$.post('./ajaxcall/sendEnquiryForm.php',{"prod_id":selectedProducts,"selected_prod":selectedProductsName,"wo_login":'wo_login',"page_type":'detail'},function(data){
			if(data != null) {
			$(".form-box").hide();
			$(".ajax_data").html(data);
			//$("#toPopup").css("top", "20px");
			}
			}); // end post
		//$('#login-for form').attr("id","login-form-detail-enquiry");
		//$('#login-for form .form-login').attr("onclick","login_form_call('detail_enquiry')");
		return false;
	});


	$("#login-detail-wishlist-form").unbind("click");
	$("#login-detail-wishlist-form").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second


			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');


			var selectedProducts = new Array();
			var selectedProducts = $(".product-detail #prodno").val();
				//alert(selectedProducts);
			//hide login form
			$(".form-box").hide();


			// Send Enquiry Form
			$.post('./ajaxcall/addWishlist.php',{"prod_id":selectedProducts},function(data){
				if(data != null) {
					//$("#osx-modal-content form").hide();
					$(".ajax_data").html(data);
				}
			}); // end post
		//$('#login-for form').attr("id","login-form-list-enquiry");
		//$('#login-for form .form-login').attr("onclick","login_form_call('list_enquiry')");
		return false;
	});
	$(".login-detail-wishlist-cat-form").unbind("click");
	$(".login-detail-wishlist-cat-form").click(function() {
				loading(); // loading
				setTimeout(function(){ // then show popup, deley in .5 second
					loadPopup(); // function show popup
				}, 100); // .5 second


				// Reset Form to login form
				$("#toPopup .form-box").show();
				$("#toPopup .ajax_data").html('');


				var selectedProducts = new Array();


				var whole = $(this).attr("class");
							//alert(whole);
							var classArray = whole.split(' ');
							//alert(classArray);
							 var selectedProducts = classArray[1];
			//alert(selectedProducts);


				//hide login form
				$(".form-box").hide();


				// Send Enquiry Form
				$.post('./ajaxcall/addWishlist.php',{"prod_id":selectedProducts},function(data){
					if(data != null) {
						//$("#osx-modal-content form").hide();
						$(".ajax_data").html(data);
					}
				}); // end post
			//$('#login-for form').attr("id","login-form-list-enquiry");
			//$('#login-for form .form-login').attr("onclick","login_form_call('list_enquiry')");
			return false;
	});


	//######################## End Detail Page #######################################################


	$("#login-prod-review").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');


			$('#login-for form').attr("id","login-form-prod-review");
			$('#login-for form .form-login').attr("onclick","login_form_call('prod_review')");

			/*$.post('./ajaxcall/prodReviewForm.php',{"prod_id":prod_id,"selected_prod":selectedProductsName},function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);

				//### Hide page link ########
				$(".review .page-link").hide();
				$(".review .ajax-result").html(data);
				$("#toPopup").css("top", "20px");
				}
				}); // end post*/
		//$('#login-for form').attr("id","login-form-list-enquiry");
		//$('#login-for form .form-login').attr("onclick","login_form_call('list_enquiry')");
		return false;
	});


	$("#rate-vendor").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');


			$('#login-for form').attr("id","login-form-rate-vendor");
			$('#login-for form .form-login').attr("onclick","login_form_call('rate_vendor')");

		return false;
	});


	$("#rate-vendor-form").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			$(".form-box").html("");

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');


			var supplierno = $("#supplierno").val();
			var supplier_name = $("#supplier_name").val();

			$.post('./ajaxcall/vendorReviewForm.php',{"supplierno":supplierno, "supplier_name":supplier_name},function(data){
			if(data != null) {
			$(".form-box").hide();
			$(".ajax_data").html(data);

			//### Hide page link ########
			$(".form-box").hide();
			$(".ajax_data").html(data);
			//$("#toPopup").css("top", "20px");
			}
			}); // end post

		return false;
	});

	//#################### Vendor reviews ##################
		$("#view_vendor_review").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			$(".form-box").hide();
			//$(".form-box").html("");

			// Reset Form to login form
			//$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');


			var supplierno = $("#supplierno").val();
			var supplier_name = $("#supplier_name").val();

			$.post('./ajaxcall/vendorReviewShow.php',{"supplierno":supplierno, "supplier_name":supplier_name},function(data){
			if(data != null) {
			$(".form-box").hide();
			$(".ajax_data").html(data);

			//### Hide page link ########
			$(".form-box").hide();
			$(".ajax_data").html(data);
			//$("#toPopup").css("top", "20px");
			}
			}); // end post

		return false;
	});


	//############### Testimonial Login #######################
	$("#testimonial-login").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');

			$('#login-for form').attr("id","testimonial-login-form");
			$('#login-for form .form-login').attr("onclick","login_form_call('testimonial')");

		return false;
	});


	//############### Testimonial Login #######################
	$("#blog-comment-login").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").show();
			$("#toPopup .ajax_data").html('');

			$('#login-for form').attr("id","blog-comment-login-form");
			$('#login-for form .form-login').attr("onclick","login_form_call('blog-comment')");

		return false;
	});






	//############### View Owners contacts #######################
	$(".view-vendor-contact").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").hide();
			$("#toPopup .ajax_data").html('');
			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

			var whole = $(this).attr("class");
			//alert(whole);
			var classArray = whole.split(' ');
			//alert(classArray);
			var prodno = classArray[1];
			//alert(prodno);

			$.post('./ajaxcall/takeMobileNo.php',{"prodno":prodno},function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;
	});



//############### Varify Mobile in WishlistForm#######################
	$(".wishlist_vari").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").hide();
			$("#toPopup .ajax_data").html('');
			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");


        	$.post('./ajaxcall/wishlist_varification.php',{},function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;
	});


//############### Rentoosh_image_Page #######################
	$(".rentoosh_img").click(function() {

							loading(); // loading
							setTimeout(function(){ // then show popup, deley in .5 second
								loadPopup(); // function show popup
							}, 100); // .5 second

							// Reset Form to login form
							$("#toPopup .form-box").hide();
							$("#toPopup .ajax_data").html('');
							$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

        	$.post('./ajaxcall/rentoosh_image_page.php',{},function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;
	});


//############### Varify Mobile.. Wishlist_manage_datas#######################
	$(".wishlist_manage").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").hide();
			$("#toPopup .ajax_data").html('');
			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");


        	$.post('./ajaxcall/wishlist_manage_varification.php',{},function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;
	});







	//############### Varify Mobile in Wishlist_ScrollingData_click#######################
		$(".wishlist_all").click(function() {
				loading(); // loading
				setTimeout(function(){ // then show popup, deley in .5 second
					loadPopup(); // function show popup
				}, 100); // .5 second

				// Reset Form to login form
				$("#toPopup .form-box").hide();
				$("#toPopup .ajax_data").html('');
				$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");


	        	$.post('./wishlist_showAll.php',{},function(data){
					if(data != null) {
					$(".form-box").hide();
					$(".ajax_data").html(data);
					//$("#toPopup").css("top", "20px");
					}
				}); // end post

			return false;
	});











       //############### wishlist_srolling_click #######################
	$(".wishlist_scrolling_click").click(function() {
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").hide();
			$("#toPopup .ajax_data").html('');
			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

			var whole = $(this).attr("class");
			//alert(whole);
			var classArray = whole.split(' ');
			//alert(classArray);
			var prodno = classArray[1];
			//alert(prodno);

			$.post('./ajaxcall/wishlist_scrolling_click_takemobileno.php',{"prodno":prodno},function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;
	});



       //############### rent_package #######################
	$(".package").click(function() {

			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").hide();
			$("#toPopup .ajax_data").html('');
			$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

			var whole = $(this).attr("class");
			//alert(whole);
			var classArray = whole.split(' ');
			//alert(classArray);
			var pkg_id = classArray[1];
			//alert(pkg_id);
           var pkg_city = $("#pkg_city").val();


			$.post('./ajaxcall/rent_packages_get_info.php',{"pkg_id":pkg_id , "pkg_city":pkg_city  },function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;
	});






//############### Get_quot_submit #######################
$(".getquot_submit_click").unbind("click");
	$(".getquot_submit_click").click(function() {
		$('body,html').animate({
					scrollTop: 90
				}, 800);
		$("#toPopup").css("position","absolute");
			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").hide();
			$("#toPopup .ajax_data").html('');
				$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

//var quot_city = $("#get_quote_city").val();

		//var quot_category = $("#get_quot_category").val();
        //var quot_product = $("#get_quot_product").val();
        //var quot_quantity = $("#get_quote_quantity").val();

		test = $(this).attr('id');
		var store = test.split("+");
		var quot_category =store[0];
		var quot_product = store[1];
		var quot_city = store[2];
		var quot_quantity = "";
		//alert(quot_quantity);
		//test = $(this).attr('id');
		//alert(test);
		//document.write(test);

	$.post('./ajaxcall/get_quot_take_mobile.php',{"quot_category":quot_category,"quot_product":quot_product, "quot_quantity":quot_quantity ,"quot_city":quot_city },function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;
});



//############### Poll_submit #######################
$(".poll_data").unbind("click");
	$(".poll_data").click(function() {

			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").hide();
			$("#toPopup .ajax_data").html('');
				$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

            if(document.getElementById('yes_vote').checked)
				{

	             var poll_vote_result= "yes";

				}else if(document.getElementById('no_vote').checked)
				{
					var poll_vote_result= "no";
				}else if(document.getElementById('maybe_vote').checked)
				{
					var poll_vote_result= "maybe";
				}else
				var poll_vote_result = "";

            var poll_id = $('#poll_idno').val();

            var poll_prod = $('#poll_yes_prod').val();



            $.post('./ajaxcall/poll_getUserVarify.php',{"poll_vote_result":poll_vote_result , "poll_id":poll_id , "poll_prod":poll_prod },function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;

		$(".poll_data").removeClass(".poll_data");
	});



//############### Poll_view_all #######################
	$(".poll_view_all").click(function() {

			loading(); // loading
			setTimeout(function(){ // then show popup, deley in .5 second
				loadPopup(); // function show popup
			}, 100); // .5 second

			// Reset Form to login form
			$("#toPopup .form-box").hide();
			$("#toPopup .ajax_data").html('');
				$("#toPopup .ajax_data").html("<div class='process-bar'><img src='./images/loading-icon.gif'/></div>");

            if(document.getElementById('yes_vote').checked)
				{

	             var poll_vote_result= "yes";

				}else if(document.getElementById('no_vote').checked)
				{
					var poll_vote_result= "no";
				}else if(document.getElementById('maybe_vote').checked)
				{
					var poll_vote_result= "maybe";
				}else
				var poll_vote_result = "";

            var poll_id = $('#poll_idno').val();

            var poll_prod = $('#poll_yes_prod').val();



            $.post('./Poll_show_all.php',{ "poll_id":poll_id },function(data){
				if(data != null) {
				$(".form-box").hide();
				$(".ajax_data").html(data);
				//$("#toPopup").css("top", "20px");
				}
			}); // end post

		return false;
	});











/* event for close the popup */
	$("div.close").hover(
					function() {
						$('span.ecs_tooltip').show();
					},
					function () {
    					$('span.ecs_tooltip').hide();
  					}
				);

	$("div.close").click(function() {
		disablePopup();  // function close pop up
		// hide Guest Enquiry button
		$('#login-for form #guest_enquiry').css("display","none");

	});

	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Ecs' in the keyboard
			// hide Guest Enquiry button
			$('#login-for form #guest_enquiry').css("display","none");
			disablePopup();

			// function close pop up
		}
	});



	 /************** start: functions. **************/
	function loading() {
		$("div.loader").show();
	}
	function closeloading() {
		$("div.loader").fadeOut('normal');
	}

	var popupStatus = 0; // set value

	function loadPopup() {
		if(popupStatus == 0) { // if value is 0, show popup
			closeloading(); // fadeout loading
			$("#toPopup").fadeIn(0100); // fadein popup div
			$("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
			$("#backgroundPopup").fadeIn(0001);
			popupStatus = 1; // and set value to 1
		}
	}

	function disablePopup() {
		if(popupStatus == 1) { // if value is 1, close popup
			$("#toPopup").fadeOut("normal");
			$("#backgroundPopup").fadeOut("normal");
			popupStatus = 0;  // and set value to 0
		}
	}
	/************** end: functions. **************/
}); // jQuery End