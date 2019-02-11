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
var newWindow = window.open();
newWindow.document.write($(documentHTML).html());

/*
So at this point, the original HTML has been edited so that it can all appear on a page at once and still look ok, that code has been augmented to include the custom “imgTab” and “textTab” classes, and all of that has been written to the new document.

What I’d like to do now is have a loop that: 
gets the inner html of the first “imgTab” class, makes a screenshot of it with the html2canvas function, and then puts that image somewhere. It would then proceed to the next “imgTab” before doing the previously outlined function again. Once it has run out of “imgTabs” to take pictures of, I’d then like it to find the “textTab” class and copy the text from within it.

If all goes well, somewhere in the code there should be several screenshots and a string of text. I’d like for each of those elements to end up in my clipboard so I can then paste them wherever, such as a Word document. Once that data has been loaded into my clipboard, I’d like for the new window to close and an alert to pop up saying that the function worked, preferably telling me how many screenshots and text fields it got.

And that would do it, I think.
*/
