function getCookiesFromURL(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var cookies = xhr.getResponseHeader("Set-Cookie");
                console.log("Cookies dari URL", url + ":", cookies);
            } else {
                console.error("Gagal mendapatkan cookies dari URL", url + ". Status:", xhr.status);
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

var targetURL = "http://google.com/";
getCookiesFromURL(targetURL);
