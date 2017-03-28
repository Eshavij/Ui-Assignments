window.onload = function() {
	document.getElementById("register").disabled = true;

	function end() {
		document.getElementById("register").disabled = false;
	}

	function modifycolor(id) {
		document.getElementById(id).style.backgroundColor = "#43db53";
	}

	function revert(id) {
		document.getElementById(id).style.backgroundColor = "#1bd8e2";
	}

	function checkboxcheck() {
		if (document.getElementById("checkbox").checked == true) {
			document.getElementById("c_address").disabled = true;
			document.getElementById("c_address").value = document.getElementById("p_address").value;
		} else {
			document.getElementById("c_address").disabled = false;
			document.getElementById("c_address").defaultValue = "";
		}
	}

	document.getElementById('register').onclick = function() {
		valid();
	}

	function checkfirstname() {
		var variable = document.getElementById("firstname").value;
		var regex = new RegExp("[a-zA-Z]+$");
		var result = regex.test(variable);
		return result;
	}

	function checkemail() {
		var variable = document.getElementById("e_mail").value;
		var regex = new RegExp("^[a-z0-9.+-]+@[a-z]+\.[a-z]{3}$");
		var result = regex.test(variable);
		return result;
	}

	function checkpaddress() {
		if (document.getElementById('p_address').value == "") {
			return true;
		} else
			return false;
	}

	function checkcaddress() {
		if (document.getElementById('c_address').value == "")
			return true;
		else
			return false;
	}



	function checkpassword() {
		var variable = document.getElementById("psswrd").value;
		var regex = new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$");
		var result = regex.test(variable);
		return result;
	}

	function checkconfirmpassword() {
		var original = document.getElementById("psswrd").value;
		var confirm = document.getElementById("cpsswrd").value;
		if (original === confirm)
			return false;
		else
			return true;

	}

	document.getElementById("cpsswrd").onblur = function() {
		end();
	}


	function resetfunction() {
		document.getElementById("firstname").value = "";
		document.getElementById("lastname").value = "";
		document.getElementById("p_address").value = "";
		document.getElementById("checkbox").checked = false;
		document.getElementById("c_address").value = "";
		document.getElementById("ph").value = "";
		document.getElementById("e_mail").value = "";
		document.getElementById("cpsswrd").value = "";
		document.getElementById("psswrd").value = "";
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
		} else if (!checkpassword()) {
			alert("Password  Length: 8-15 and must contain Special Chars,Number ");
		} else if (checkconfirmpassword()) {
			alert("Password matching is false");
		} else {
			end();
		}
	}

	document.getElementById("reset").onclick = function() {
		resetfunction();
	}

	function child_append() {
		var ul = document.getElementById("dashboard");
		var firstName = document.getElementById('firstname').value;
		var lastName = document.getElementById('lastname').value;
		var email = document.getElementById('e_mail').value;

		var li = document.createElement("li");
		var fullName = firstName + " " + lastName;
		var Name = document.createTextNode(fullName);
		var emailT = document.createTextNode(email);

		var a = document.createElement("a");
		a.setAttribute('class', 'abc');

		var div = document.createElement("div");
		div.setAttribute('class', 'def');

		a.appendChild(Name);
		div.appendChild(emailT);
		li.appendChild(a);
		li.appendChild(div);
		ul.appendChild(li);

	}
	document.getElementById("register").onclick = function() {
		child_append();
	}
	document.getElementById('psswrd').onclick = function() {
		modifycolor('psswrd');
	}

	document.getElementById('psswrd').onblur = function() {
		revert('psswrd');
	}

	document.getElementById('firstname').onclick = function() {
		modifycolor('firstname');
	}

	document.getElementById('firstname').onblur = function() {
		revert('firstname');
	}

	document.getElementById('c_address').onclick = function() {
		modifycolor('c_address');
	}

	document.getElementById('c_address').onblur = function() {
		revert('c_address');
	}

	document.getElementById('lastname').onclick = function() {
		modifycolor('lastname');
	}

	document.getElementById('lastname').onblur = function() {
		revert('lastname');
	}

	document.getElementById('e_mail').onclick = function() {
		modifycolor('e_mail');
	}

	document.getElementById('e_mail').onblur = function() {
		revert('e_mail');
	}

	document.getElementById('p_address').onclick = function() {
		modifycolor('p_address');
	}

	document.getElementById('p_address').onblur = function() {
		revert('p_address');
	}

	document.getElementById('ph').onclick = function() {
		modifycolor('ph');
	}

	document.getElementById('ph').onblur = function() {
		revert('ph');
	}

	document.getElementById('checkbox').onclick = function() {
		checkboxcheck();
	}
}