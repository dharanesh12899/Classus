$(document).ready(function() {
    $("#login").click(function() {
        var a = document.getElementById('username').value;
        localStorage.setItem("key", a);
        window.location.href = "Notificationsample.html";
    });
});