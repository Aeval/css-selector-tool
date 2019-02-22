var desiredText = document.getElementsByClassName('tab-content')[0].outerHTML;
var serverName;
var pathName = window.location.href; 
if (pathName.includes("10.75.3.37")) {
    serverName = 'JPwebnode01AZ';
}
else if (pathName.includes("172.16.15.81")) {
    serverName = 'SHAwebnode01';
}
else if (pathName.includes("10.75.7.36")) {
    serverName = 'UKwebnode01AZ';
}
else if (pathName.includes("10.75.5.36")) {
    serverName = 'USwebnode01AZ';
}
else if (pathName.includes("10.75.6.36")) {
    serverName = 'USwebnode02AZ';
}
else if (pathName.includes("10.1.2.31")) {
    serverName = 'USwebnode03';
}
else {
    serverName = 'An error has occured'
}
var summaryID = 'ID: ' + $('* > td:nth-child(4) > span:nth-child(1)').html();
var userFlag;
var mozillaCheck = $(desiredText).text().indexOf('Mozilla') > -1;
if (mozillaCheck == true) {
    userFlag = 'User Affected';
} else {
    userFlag = 'Bot Issue';
}
var errorLocation = 'Error Location: ' + $('#request_table > tbody > tr:nth-child(8) > td:nth-child(2) > span').html();
var errorText = 'Error Type: ' + $('div#tab-errors > .section.clearfix.span12 > .pre-scrollable').html();
var output = serverName + '<br>' + summaryID + '<br>' + userFlag + '<br>' + errorLocation + '<br>' + errorText + '<hr>' + desiredText;

//var newWindow = window.open();
//newWindow.document.write(output);


