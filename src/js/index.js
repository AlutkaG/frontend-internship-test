/* Here goes your JS code */

var popup = document.getElementById("popup");
var buttonOpen = document.getElementById("show-popup-form");
var closeButton = document.getElementById("close");

buttonOpen.onclick = function() {
	popup.style.display = "flex";
};

closeButton.onclick = function() {
	popup.style.display = "none";
};
