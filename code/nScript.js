



var documentHTML = $('<div>');
$(documentHTML).html($('html').html());


$('.pre-scrollable', documentHTML).each(function(){
  console.log(this)
  $(this).removeClass('pre-scrollable');
});

$(documentHTML).find('script').remove();
$(documentHTML).find('#frsidemenu').remove();
$(documentHTML).find('.navbar').remove()
$('div.tab-content', documentHTML).removeClass('tab-content');

var newWindow = window.open();

newWindow.document.write($(documentHTML).html());


/*
//var headContent = document.getElementsByTagName('head')[0].innerHTML;



var headContent = document.getElementsByTagName('head')[0].innerHTML;
var desiredText = document.getElementsByClassName('tab-content')[0].innerHTML;

var newWindow = window.open();

newWindow.document.write('<head>' + headContent + '</head');
newWindow.document.write('<body>' + '<div id="data">' + desiredText + '</div>' + '</body>');

//document = newWindow.document;
$(newWindow.document).ready(function(){
  var _that = this;
  $('.pre-scrollable', _that).each(function(){console.log(this)
    $(this).removeClass('pre-scrollable');
  });
})



/*
//html2canvas OGcode
html2canvas(newWindow.document.getElementById('data')).then(function(canvas) {
  newWindow.appendChild(canvas);
})
*/