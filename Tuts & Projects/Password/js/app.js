//Problem: Hints are shown even when form is valid
//Solution:  Hide/show hints at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Hide Hints
$("form span").hide();

function passwordEvent() {
	//Find out if password is valid
	if($(this).val().length > 8) {
		//hide hint if valid
		$(this).next().hide();
	} else {
		//else show hint
		$(this).next().show();
	}
}

function confirmPasswordEvent() {
	//Find out if passowrd is valid
	if($password.val() === $confirmPassword.val()) {
		//Hide hint if match
		$confirmPassword.next().hide();
	}	else {
		//Else show hint
		$confirmPassword.next().show();
	}
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

	
	

