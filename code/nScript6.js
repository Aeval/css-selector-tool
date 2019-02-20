var desiredText = document.getElementsByClassName('tab-content')[0].innerHTML;
var newWindow = window.open();
newWindow.document.write('<link rel="stylesheet" href="nStyles.css" type="text/css">' + desiredText);