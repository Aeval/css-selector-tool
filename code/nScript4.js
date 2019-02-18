var documentHTML = $('<div>');
$(documentHTML).html($('html').html());
$('.pre-scrollable', documentHTML).each(function () {
  $(this).removeClass('pre-scrollable');
});
$(documentHTML).find('script').remove();
$(documentHTML).find('#frsidemenu').remove();
$(documentHTML).find('.navbar').remove()
//
$('div.tab-content', documentHTML).removeClass('tab-content');
$('#details_table', documentHTML).unwrap("<div class='details_table'></div>");
$('#details_table', documentHTML).wrap("<div class='imgTab'></div>");
$('[id^=tab-]', documentHTML).wrap("<div class='imgTab'></div>");
$('[id$=errors]', documentHTML).unwrap("<div class='imgTab'></div>");
$('[id$=errors]', documentHTML).wrap("<div class='textTab'></div>");
//

var docHead = $('<div>');
//$(docHead).html($(documentHTML).find('<head>'));

$(docHead).html(documentHTML.find('.head').html());
console.log(docHead);



//var docBody = $('<div>');
//$(docBody).html($(documentHTML).find('<body>'));



//
var newWindow = window.open();
newWindow.document.write(docHead);
//newWindow.document.write(docBody);
newWindow.document.write("test text");


/* old code
var docHead = document.head.innerHTML;
var mainBody = ($('#tab-main').html());
var newWindow = window.open();
newWindow.document.write(docHead);
newWindow.document.write(mainBody);

html2canvas(newWindow.body).then(function(canvas) {
    newWindow.write(canvas);
});
*/