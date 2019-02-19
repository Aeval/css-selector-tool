var desiredText = document.getElementsByClassName('tab-content')[0].innerHTML;
var newWindow = window.open();
newWindow.document.write('<head><link rel="stylesheet" type="text/css" href="nStyles2.css"></head>');
newWindow.document.write(desiredText);
