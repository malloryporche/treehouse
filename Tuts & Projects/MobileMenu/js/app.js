//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function () {
	var $anchor = $(this);
	//Create an option
	var $option = $("<option></option>");

	//Option's value is the href 
	$option.val($anchor.attr("href"));
	//Option's text is the text of links

	$option.text($anchor.text());

	//Append option select
	$select.append($option);
})

	
	
//Create a button
	//Bind click to button to 
	//go to Select location
//Modify CSS to hide links on small widthds and show button and select
//Also hides select and button on larger widthds and shows links
//Deal with selected options