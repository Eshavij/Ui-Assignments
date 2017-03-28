function checkboxcheck() {
	if ($("#checkbox").is(':checked')) {
		$("#c_address").val($("#p_address").val());
		$("#c_address").attr('disabled', true);
	} else {
		$("#c_address").attr('disabled', false);
		$("#c_address").val("");
	}
}

function modifycolor(id) {
	document.getElementById(id).style.backgroundColor = "#43db53";
}

function revert(id) {
	document.getElementById(id).style.backgroundColor = "#1bd8e2";
}

$('#psswrd').click(function() {
	modifycolor('psswrd');
});

$('#psswrd').blur(function() {
	revert('psswrd');
});

$('#lastname').click(function() {
	modifycolor('lastname');
});

$('#lastname').blur(function() {
	revert('lastname');
});


$('#c_address').click(function() {
	modifycolor('c_address');
});

$('#c_address').blur(function() {
	revert('c_address');
});


$('#firstname').click(function() {
	modifycolor('firstname');
});

$('#firstname').blur(function() {
	revert('firstname');
});


$('#e_mail').click(function() {
	modifycolor('e_mail');
});

$('#e_mail').blur(function() {
	revert('e_mail');
});

$('#p_address').click(function() {
	modifycolor('p_address');
});

$('#p_address').click(function() {
	revert('p_address');
});


$('#ph').click(function() {
	modifycolor('ph');
});

$('#ph').click(function() {
	revert('ph');
});

function resetfunction() {
	$("#firstname").val("");
	$("#lastname").val("");
	$("#p_address").val("");
	$("#checkbox").prop('checked', false);
	$("#c_address").val("");
	$("#ph").val("");
	$("#e_mail").val("");
	$("#cpsswrd").val("");
	$("#psswrd").val("");
}

function checkemail() {

	var variable = $("#e_mail").val();
	var regex = new RegExp("^[a-z0-9.+-]+@[a-z]+\.[a-z]{3}$");
	var result = regex.test(variable);
	return result;
}

function checkpaddress() {
	if ($('#p_address').val() === "") {
		return true;
	} else
		return false;
}

function checkcaddress() {
	if ($('#c_address').val() == "")
		return true;
	else
		return false;
}

function checkfirstname() {
	var val = $("#firstname").val();
	var regex = new RegExp("[a-zA-Z]+$");
	var result = regex.test(val);
	return result;
}

function checkpassword() {
	var variable = $("#psswrd").val();
	var regex = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$");
	var result = regex.test(variable);
	return result;
}

function checkconfirmpassword() {
	var original = $("#psswrd").val();
	var confirm = $("#cpsswrd").val();
	if (original === confirm)
		return false;
	else
		return true;

}

function phonevalidation = function() {
	var val = $("#phone").val();
	var regex = new RegExp("^[0-9]{4,10}$");
	var result = regex.test(val);
	return result;
}

function valid() {
	if (!checkfirstname()) {
		alert("Please enter firstname correctly");
	} else if (checkpaddress()) {
		alert("Permanent Address field is left blank");
	} else if (!document.getElementById('checkbox').checked) {
		if (checkcaddress()) {
			alert("Company Address field is left blank");
		}
	} else if (!checkemail()) {
		alert("Please enter valid email address");
	} else if (!phonevalidation()) {
		alert("Please enter valid phone no");
	} else if (!checkpassword()) {
		alert("Password  Length: 8-15 and must contain Special Chars,Number ");
	} else if (checkconfirmpassword()) {
		alert("Password matching is false");
	}
}

$('#register').click(function() {
	valid();
});

$('#cpsswrd').click(function() {
	end();
});

$('#checkbox').click(function() {
	checkboxcheck();
});
$('#reset').click(function() {
	resetfunction();
});

$('#register').click(function() {
	child_append();
});

function child_append() {
	var ul = $("#dashboard");
	var firstName = $('#firstname').val();
	var lastName = $('#lastname').val();
	var email = $('#e_mail').val();

	var li = $("<li></li>", {
		class: "text"
	});

	var a = $("<a></a>", {
		class: "abc",
		href: "#"
	}).text(firstName + " " + lastName);

	var div = $("<div></div>", {
		class: "def"
	}).text(email);

	li.append(a);
	li.append(div);
	ul.append(li);
}