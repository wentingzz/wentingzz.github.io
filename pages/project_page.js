$(function(){
    $("#contact").load("../contact.html");
});

function checkHistory() {
    if (history.length > 1) {
        // Get the URL of the previous history entry
        var previousUrl = document.referrer;

        // Check if the previous URL is part of your site
        if (previousUrl.includes(window.location.origin)) {
            // Go back if it's part of your site
            history.go(-1);
        } else {
            // Redirect to the index.html of your site
            window.location.href = "../index.html";
        }
    } else {
        // Do something else if there is no previous history
        window.location.href = "../index.html";
//        alert("No previous history");
    }
}

function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{pageLanguage: 'en'},
		'google_translate_element'
	);
}
document.addEventListener('DOMContentLoaded', function() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        console.log(document.getElementById('google_translate_element'))
        document.getElementById('google_translate_element').value = selectedLanguage;
        translateHtml();
    }
});