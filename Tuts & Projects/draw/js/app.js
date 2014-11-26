//Problem:  User interaction causes no change to application
//Solution:  When user interacts cause changes
var color = $(".selected").css("background-color");

//When clickon on control list items 
$(".controls").on("click", "li", function() {
	//Deselect sibling elements 
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
	//cache current color
	color = $(this).css("background-color");
});

//When new color is pressed
$("#revealColorSelect").click(function() {
	//Show color select or hide the select
	$("#colorSelect").toggle();
});

	//Update the new color span
function changeColor () {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();

	$("#newColor").css("background-color", "rgb(" + r  + "," + g + "," + b + ")"); 

}


//When color sliders change
$("input[type=range]").change(changeColor);


//When add color is pressed
$("#addNewColor").click(function(){
	//Append color to the controls ul
	var $newColor = $("<li></li>");
	$newColor.css('background-color', $("#newColor").css('background-color'))
	$(".controls ul").append($newColor)
})
	

//On mouse events on the canvas
	//Draw lines
