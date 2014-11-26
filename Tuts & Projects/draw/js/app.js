//Problem:  User interaction causes no change to application
//Solution:  When user interacts cause changes
var color = $(".selected").css("background-color");

//When clickon on control list items 
$(".controls li").click(function() {
	//Deselect sibling elements 
	$(this).siblings().removeClass("selected");
	//Select clicked element
	$(this).addClass("selected");
});
	
//When new color is pressed
	//Show color select or hide the select

//When color sliders change
	//Update the new color span

//When add color is pressed
	//Append color to the controls ul

//On mouse events on the canvas
	//Draw lines
