var documentHTML = $('<div>');
$(documentHTML).html($('html').html());

$('.pre-scrollable', documentHTML).each(function(){
  $(this).removeClass('pre-scrollable');
});

$(documentHTML).find('script').remove();
$(documentHTML).find('#frsidemenu').remove();
$(documentHTML).find('.navbar').remove()
$('div.tab-content', documentHTML).removeClass('tab-content');

var newWindow = window.open();

newWindow.document.write($(documentHTML).html());
/*
html2canvas(newWindow.document.body).then(function(canvas) {
  newWindow.document.body.appendChild(canvas);
});
*/






/*
//html2canvas OGcode
html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
});
*/