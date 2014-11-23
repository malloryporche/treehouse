//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function () {
	var $anchor = $(this);
	//Create an option
	var $option = $("<option></option>");
//Deal with selected options
if($anchor.parent().hasClass("selected")) {
	$option.prop("selected", true);
}

	//Option's value is the href 
	$option.val($anchor.attr("href"));
	//Option's text is the text of links
	$option.text($anchor.text());
	//Append option select
	$select.append($option);
})

	
	
	//Bind change listener to the select 
	$select.change(function() {
	//go to Select location
	window.location = $select.val();	
	})
	
