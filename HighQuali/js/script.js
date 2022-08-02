var Hi_Mid = 0;
const HI_RIGHT = 390;

window.onscroll = function () {
    if (document.documentElement.scrollTop > 602) {
        document.getElementById("w3").style.position = "absolute";
        document.getElementById("w3").style.top = "122.5%";
        document.getElementById("w3").style.right = "780.75px";

    } else {
        document.getElementById("w3").style.position = "fixed";
        document.getElementById("w3").style.top = "42%";

        if (parsePXtoInt(getCssProperty("w3", "right")) <= HI_RIGHT) {
            document.getElementById("w3").style.right = HI_RIGHT + "px";
        }
        if (document.documentElement.scrollTop <= 602) {
            if (parsePXtoInt(getCssProperty("w3", "right")) < 780.75) {
                document.getElementById("w3").style.right = (HI_RIGHT * 1.01 * document.documentElement.scrollTop / 600 + HI_RIGHT) + "px";
            }
            else {
                document.getElementById("w3").style.right = "780.75px";
            }
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

$(document).ready(function () {
    $(".live-event").click(function () {
        $("#live-detail").show();
    });
});

$(document).ready(function () {
    $("#btnClose").click(function () {
        $("#live-detail").hide();
    });
});


function clickType(obj) {
    var foo = document.getElementById("ft");
    var foo2 = document.getElementById("it");

    defaultType(foo);
    defaultType(foo2);


    if (obj.style.backgroundColor !== "rgb(255, 255, 255)") {
        obj.style.backgroundColor = "#fff";
        obj.style.color = "#000";
    }
    else {
        defaultType(obj);
    }
}

function defaultType(obj) {
    obj.style.backgroundColor = "transparent";
    obj.style.color = "#fff";
}

function createBlock() {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(document.getElementById("jtitle").value);
    newDiv.appendChild(newContent);
    newDiv.id = "block";
    newDiv.onclick = function () {
        this.parentElement.removeChild(this);
    };
    const titleArr = document.getElementById("titleArr");
    titleArr.appendChild(newDiv);
}
