var CookieConfirmButton = document.getElementById("CookieConfirmButton");
var ButtonCookie = document.getElementById("ButtonCookie");

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var confirmation = getCookie("CookiesConfirm");
console.log(confirmation);

if (confirmation == ""); {
    setCookie("CookiesConfirm", "false", 9999);
    ButtonCookie.style.display = "block";
}
elif(confirmation == "false"); {
    ButtonCookie.style.display = "block";
}
elif(confirmation == "true"); {
    ButtonCookie.style.display = "none";
}

CookieConfirmButton.onclick = function() {
    setCookie("CookiesConfirm", "true", 9999);
    ButtonCookie.style.display = "none";
};