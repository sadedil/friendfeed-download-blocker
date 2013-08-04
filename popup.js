// Saves options to localStorage.

function save_options() {
	var chkExtensionDisabled = document.getElementById("chkExtensionDisabled");
	saveOption(OPTION_KEYS.OPT_EXTENSION_DISABLED, chkExtensionDisabled.checked);

	// Update status to let user know options were saved.
	var status = document.getElementById("status");
	status.innerHTML = "Options Saved.";
	setTimeout(function() {
		status.innerHTML = "";
	}, 1000);


	restore_options();
}

// Restores select box state to saved value from localStorage.

function restore_options() {
	refreshPageActionIcon();

	var isDisabled = getOption(OPTION_KEYS.OPT_EXTENSION_DISABLED);

	var chkExtensionDisabled = document.getElementById("chkExtensionDisabled");
	chkExtensionDisabled.checked = isDisabled;

}


function startup() {
	document.getElementById('chkExtensionDisabled')
		.onchange = save_options;
	restore_options();
}


document.addEventListener('DOMContentLoaded', startup);