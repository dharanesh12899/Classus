function prodis() {
    $(".main-content").load("faculty.html");
}

$(document).ready(function() {
    $("#home").click(function() {
        $(".main-content").load("faculty.html");
    });
});

$(document).ready(function() {
    $('#navbarDropdown').click(function() {
        $('.bubble').addClass('animating');
        remove();
    });
});