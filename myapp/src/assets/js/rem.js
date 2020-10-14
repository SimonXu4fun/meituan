var win = window;
var doc = win.document;
var docEl = doc.documentElement;
var tid;

function refreshRem(){
    var width = docEl.getBoundingClientRect().width;
    var rem = width / 7.5;
    docEl.style.fontSize = rem + 'px';
}

win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
}, false);
win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }
}, false);

refreshRem();