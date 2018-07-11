// get the buttons by id
let red = document.getElementById('Green');
let blue = document.getElementById('Orange');
let reset = document.getElementById('reset');

// use tabs.insertCSS to change header color on button click
// red
red.onclick = function() {
  browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: green !important; }"});
};

// blue
blue.onclick = function() {
  browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: orange !important; }"});
};

// back to original
reset.onclick = function() {
  browser.tabs.insertCSS({code: ".c-uhfh .brand-neutral { background: #2f2f2f !important; }"});
};