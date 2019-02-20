var desiredText = document.getElementsByClassName('tab-content')[0].innerHTML;
var newWindow = window.open();
newWindow.document.write('<link rel="stylesheet" href="nStyles2.css" type="text/css">' + desiredText);
//newWindow.document.write('<head><style>body {  background-color: linen;}h1 {  color: maroon;  margin-left: 40px;}</style></head> ' + desiredText);