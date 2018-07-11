// get the URL of the page
var url = document.location.href;

// if not on a docs.microsoft.com domain
if (url.indexOf("//play.google.com") <= -1) {
    // send inactive icons
    browser.runtime.sendMessage({
        "greenicon": "images/green.png",
        "orangeicon": "images/orange.png"
    });
}