window.onscroll = function() {
    if (document.documentElement.scrollTop > 580) {
        document.getElementById("w3").style.position = "absolute";
        document.getElementById("w3").style.top = "900px";
    } else {
        document.getElementById("w3").style.position = "fixed";
        document.getElementById("w3").style.top = "44%";
    }
}
