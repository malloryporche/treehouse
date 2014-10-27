// Problem: User interaction doesn't provide desired results.
// Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first-button
var IncompleteTaskHolder = document.getElementById("incomplete-tasks"); //ul with id incomplete-Tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //ul with id complete tasks


//Add a new task
var addTask = function () {


	// When button is pressed
	// Create new list item with the text from #new-task
		// input (checkbox)
		// label
		// input (text)
		// button.edit [ button with class edit]
		// button.delete [ button with class delete ]
		// Each elements, needs modified and appended
}


// Edit an existing task
var editTask = function () {
		//When edit button is pressed
			//if class of the parent is .edit
				//Switch from .editMode
				//label text b/c the input's value
			//else
				//switch to .editMode
				//input value b/c the label's txt

		//Toggle .editMode	
}

// Delete an existing task
var deleteTask = function () {
	// When DELETE button is pressed
		//Remove parent list-item from ul
}

// Mark a task as complete
var taskCompleted = function () {
	// When the checkbox is checked
		//Append the list item to the #completed-tasks
}

// Mark a task as incomplete
var taskIncomplete = function () {
	// When checkbox is unchecked
		//Append the list item to the #incomplete-tasks
}
