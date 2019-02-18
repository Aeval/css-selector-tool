var docHead = document.head;
var docBody = document.body;

var newWindow = window.open();
newWindow.document.write(docHead).html();
newWindow.document.write(docBody).html();