//Add a new link

var linkInput = document.getElementbyId("reference_link"); //ref-link
var addButton = document.getElementbyTagName("button")[0]; //Add-link button
var linkText = document.getElementbyId("link_text"); //text for a href
var refSubject = document.getElementbyId("ref_subj"); //Subject of article
var linkCategory = document.getElementbyTagName("input")


var addLink = function () {
	console.log("Add link...");

	//When button is pressed
		//Create new list item 
				// input (checkbox)
				// link
				// label
				// value
				// button.edit
				// button.delete
				// Each element needs to be modified and appended
}

//Edit an existing link
var editLink = function () {
	console.log("Edit link...")
	// When button is pressed
		//if class of the parent is .edit
			//Switch from .editMode
			//label txt b/c input's value
		//else
			//switch to .editMode
			//input value b/c the label's text
}

//Delete an existing link
var deleteLink = function () {
	console.log("Delete link...")
	// When button is pressed
		// Remove the parent list-item from the ul
}

//Mark a link as read
var linkRead () {
	console.log("Link read...")
	//When checkbox is checked
		//if parent list-item has .html class, append to #html-read list
		//if parent list-item has .css class, append to #css-read list
		//if parent list-item has .js class, append to #java-read list
		//else append parent list-item to #ng-read list
}

//Mark a link as unread
var linkUnread () {
	console.log("Link unread...")
	//When checkbox is unchecked
		//if parent list-item has .html class, append to #html-to-read list
		//if parent list-item has .css class, append to #css-to-read list
		//if parent list-item has .js class, append to #java-to-read list
		//else append parent list-item to #ng-to-read list}
}