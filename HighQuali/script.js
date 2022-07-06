var Hi_Mid = 0;
const HI_RIGHT = 170;

window.onscroll = function () {
    if (document.documentElement.scrollTop > 600) {
        document.getElementById("w3").style.position = "absolute";
        document.getElementById("w3").style.top = "910px";
        document.getElementById("w3").style.right = HI_MID;


    } else {
        document.getElementById("w3").style.position = "fixed";
        document.getElementById("w3").style.top = "42%";

        if (parsePXtoInt(getCssProperty("w3", "right")) <= HI_RIGHT) {
            document.getElementById("w3").style.right = HI_RIGHT + "px";
        }
        if (document.documentElement.scrollTop <= 600) {
            document.getElementById("w3").style.right = (HI_RIGHT * 2.40 * document.documentElement.scrollTop / 600 + HI_RIGHT) + "px";
            if (document.documentElement.scrollTop === 600) Hi_Mid = getCssProperty("w3", "right");
        }
    }
}

function getCssProperty(elmId, property) {
    var elem = document.getElementById(elmId);
    return window.getComputedStyle(elem, null).getPropertyValue(property);
}

function parsePXtoInt(value) {
    value = value.replace("px", "");
    return parseInt(value);
}

$(document).ready(function () {
    $("#btnExplore").click(function () {
        $('html, body').animate({
            scrollTop: $("#highlight").offset().top
        }, 2000);
    });
});