var sQI = document.getElementById("sQ")
var sQ = encodeURIComponent(sQI.value.trim())


sQI.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        search(sQ)
    }
})


function search(q) {
    window.location.href = "/search/?q=" + q;

}