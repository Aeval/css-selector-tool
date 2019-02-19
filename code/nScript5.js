var documentHTML = $('<div>');
$(documentHTML).html($('html').html());
$('.pre-scrollable', documentHTML).each(function () {
  $(this).removeClass('pre-scrollable');
});


//$(documentHTML).find('script').remove();
$(documentHTML).find('#frsidemenu').remove();
$(documentHTML).find('.navbar').remove()
//$('div.tab-content', documentHTML).removeClass('tab-content');
$('#details_table', documentHTML).unwrap("<div class='details_table'></div>");
$('#details_table', documentHTML).wrap("<div class='detailsTab'></div>");
$('[id^=tab-]', documentHTML).wrap("<div class='imgTab'></div>");
$('[id$=errors]', documentHTML).unwrap("<div class='imgTab'></div>");
$('[id$=errors]', documentHTML).wrap("<div class='textTab'></div>");
var newWindow = window.open();
var newWindowTwo = window.open();

newWindow.document.write($(documentHTML).html());


$('#details_table', newWindow.document).hide();
$('#controls_top', newWindow.document).hide();



$('.tab-pane', newWindow.document).hide();

$('.tab-pane', documentHTML).each(function () {
  $(this).click();
  html2canvas(newWindow.document.body).then(function(canvas) {
    newWindowTwo.document.body.appendChild(canvas);
  });
    $('.tab-pane', newWindow.document).hide();
});




/*
$('.tab-pane', newWindow.document).hide();
$('.tab-pane', documentHTML).each(function () {
  $(this).show();
  html2canvas(newWindow.document.body).then(function(canvas) {
    newWindowTwo.document.body.appendChild(canvas);
  });
    $('.tab-pane', newWindow.document).hide();
});
*/

