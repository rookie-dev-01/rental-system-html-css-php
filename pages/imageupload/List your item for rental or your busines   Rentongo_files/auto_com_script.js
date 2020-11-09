//jQuery.noConflict();
$(function(){
    $('#search_box').autocomplete('./ajaxcall/getSearch.php?mode=sql', {
        width: 272,
        max: 10,
		selectFirst: false
    });
	
	$('.advance-search-form #search_for').autocomplete('./ajaxcall/getSearchProduct.php?mode=sql', {
        width: 272,
        max: 10,
		selectFirst: false
    });
	
	
	$('.advance-search-form #vendor').autocomplete('./ajaxcall/getVendor.php?mode=sql', {
        width: 272,
        max: 10,
		selectFirst: false
    });
		
});