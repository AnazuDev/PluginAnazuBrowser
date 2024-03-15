var currentURL = window.location.href;

if (currentURL.includes('/anazu/http')) {
    var hasil = { hasil: "00" };
    console.log(JSON.stringify(hasil));
} else {
    console.log("URL tidak mengandung '/anazu/http'");
}
