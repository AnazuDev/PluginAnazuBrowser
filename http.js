var xhr = new XMLHttpRequest();
xhr.open("GET", "/getNetworkUserID", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var networkUserID = xhr.responseText;
        console.log('Network User ID:', networkUserID);
    }
};
xhr.send();

