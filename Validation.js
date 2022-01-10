function ValidationforPhone(executionContext) {
	//var formContext = executionContext.getFormContext();
	//var Mobilephone = "mobilephone";
	//var MobilephoneField = formContext.getAttribute(mobilephone);
	//MobilephoneFieldValue=MobilephoneField.getValue();
	var formContext = executionContext.getFormContext();
    var MobilephoneField = formContext.getAttribute("mobilephone").getValue();
	alert(MobilephoneField);
	if (MobilephoneField != null && MobilephoneField != undefined) {
	var pattern = /^\+65(6|8|9)\d{7}$/;
	if (MobilephoneField.match(pattern)) {
	return true;
	}
	else {
	alert("Please Enter Valid Mobile Number appended with +65");
	formContext.getAttribute("mobilephone").setValue(null);
	}
	}
}


function ValidationforEmail(executionContext) {
	//var formContext = executionContext.getFormContext();
	//var Mobilephone = "mobilephone";
	//var MobilephoneField = formContext.getAttribute(mobilephone);
	//MobilephoneFieldValue=MobilephoneField.getValue();
	var formContext = executionContext.getFormContext();
    var EmailField = formContext.getAttribute("emailaddress1").getValue();
	alert(EmailField);
	if (EmailField != null && EmailField != undefined) {
	var pattern = /^([A-Z0-9_\.\-\+])+\@(([A-Z0-9\-])+\.)+([A-Z0-9]{2,4})+$/i;
	if (EmailField.match(pattern)) {
	return true;
	}
	else {
	alert("Please Enter Valid Email ID");
	formContext.getAttribute("emailaddress1").setValue(null);
	}
	}
}

function ValidationforNRIC(executionContext) {
	var formContext = executionContext.getFormContext();
    var IdentifierTypeField = formContext.getAttribute("identifiertype").getValue();
	var IdentifierField = formContext.getAttribute("nricfinpassport").getValue();
	//alert(IdentifierTypeField);
	if (IdentifierTypeField != null && IdentifierTypeField != undefined && IdentifierTypeField == 1000001 ) {
	if (IdentifierField != null && IdentifierField != undefined) {
	var pattern = /^[FGST]{1}\d{7}[A-Z]{1}$/i;
	if (IdentifierField.match(pattern)) {
	return true;
	}
	else {
	alert("Please Enter Valid NRIC or FIN Number");
	formContext.getAttribute("nricfinpassport").setValue(null);
	}
		}
	}
}