var link = window.location.href;
if (link.includes("playentry.org/redirect?external=")) {
    var targetUrl = link.split("external=")[1];
    console.log("이동중")
    if (targetUrl) {
        var decodedUrl = decodeURIComponent(targetUrl);
        window.location.href = decodedUrl;
    }
}
