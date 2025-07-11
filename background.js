var link = window.location.href;
var targetUrl = link.split("external=")[1];
if (targetUrl) {
    var decodedUrl = decodeURIComponent(targetUrl);
    window.location.href = decodedUrl;
}
