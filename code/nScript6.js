var desiredText = document.getElementsByClassName('tab-content')[0].outerHTML;
var summaryID = 'ID: ' + $('* > td:nth-child(4) > span:nth-child(1)').html();
//var userFlag = 'User: ' + $('*#headers_table > tbody > tr:nth-child(8) > td:nth-child(2) > span').html();
var userFlag;
var mozillaCheck = $(desiredText).text().indexOf('Godzilla') > -1;
if (mozillaCheck = true) {userFlag = 'User Affected'} else {userFlag = 'Bot Issue'};
var errorText = 'Error: ' + $('div#tab-errors > .section.clearfix.span12 > .pre-scrollable').html();
var output = summaryID + '<br>' + userFlag + '<br>' + errorText;
//console.log(errorText)
var newWindow = window.open();
newWindow.document.write(output);
newWindow.document.write('<head> <link rel="stylesheet" type="text/css" href="nStyles.css" /> </head>' + desiredText);
