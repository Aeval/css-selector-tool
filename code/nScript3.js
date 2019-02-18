//more testing script. please continue to ignore.

/*
var documentHTML = $('<div>');
$(documentHTML).html($('html').html());

$('.pre-scrollable', documentHTML).each(function(){
  $(this).removeClass('pre-scrollable');
});

$(documentHTML).find('script').remove();
$(documentHTML).find('#frsidemenu').remove();
$(documentHTML).find('.navbar').remove()
$('div.tab-content', documentHTML).removeClass('tab-content');
/*
$('#details_table', documentHTML).unwrap("<div class='details_table'></div>");
$('#details_table', documentHTML).wrap("<div class='imgTab'></div>");
$('[id^=tab-]', documentHTML).wrap("<div class='imgTab'></div>");
$('[id$=errors]', documentHTML).unwrap("<div class='imgTab'></div>");
$('[id$=errors]', documentHTML).wrap("<div class='textTab'></div>");
*/

/*

var desiredTextHead = documentHTML.document.getElementsByTagName('HEAD')[0];
var desiredTextOne = document.getElementById('tab-main').innerHTML;
var desiredTextTwo = document.getElementById('tab-headers').innerHTML;
var desiredTextThree = document.getElementById('tab-cookies').innerHTML;
var desiredTextFour = document.getElementById('tab-jdbc').innerHTML;
var desiredTextFive = document.getElementById('tab-properties').innerHTML;
var desiredTextSix = document.getElementById('tab-relations').innerHTML;
var desiredTextSeven = document.getElementById('tab-errors').innerHTML;
console.log(desiredTextHead);
var newWindow = window.open();

var html = desiredTextHead;
html += "<div id='chart1'>" + desiredTextOne + "</div>";
html += "<div id='chart2'>" + desiredTextTwo + "</div>";
html += "<div id='chart3'>" + desiredTextThree + "</div>";
html += "<div id='chart4'>" + desiredTextFour + "</div>";
html += "<div id='chart5'>" + desiredTextFive + "</div>";
html += "<div id='chart6'>" + desiredTextSix + "</div>";
html += "<div id='chart7'>" + desiredTextSeven + "</div>";

newWindow.document.write(html);

html2canvas(newWindow.document.getElementById('tab-main')).then(function(canvas) {
    newWindow.document.body.appendChild(canvas);
  });

/*

var newWindow = window.open();

newWindow.document.write($(documentHTML).html());


html2canvas(document.body).then(function(canvas) {
  document.body.appendChild(canvas);
});

*/

/*

var documentHTML = $('<div>');
$(documentHTML).html($('html').html());
$('.pre-scrollable', documentHTML).each(function () {
  $(this).removeClass('pre-scrollable');
});
$(documentHTML).find('script').remove();
$(documentHTML).find('#frsidemenu').remove();
$(documentHTML).find('.navbar').remove()
$('div.tab-content', documentHTML).removeClass('tab-content');
$('#details_table', documentHTML).unwrap("<div class='details_table'></div>");
$('#details_table', documentHTML).wrap("<div class='imgTab'></div>");
$('[id^=tab-]', documentHTML).wrap("<div class='imgTab'></div>");
$('[id$=errors]', documentHTML).unwrap("<div class='imgTab'></div>");
$('[id$=errors]', documentHTML).wrap("<div class='textTab'></div>");

var docHead = documentHTML.head.innerHTML();
var newWindow = window.open();
newWindow.document.write(docHead);

*/


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



/*
//html2canvas OGcode
html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});
*/
