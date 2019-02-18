var docHead = document.head;
var docBody = document.body;

var newWindow = window.open();
newWindow.document.write(docHead);
newWindow.document.write(docBody);