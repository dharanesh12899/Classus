$(document).ready(function() {
    $.ajax({
        url: "http://localhost:7772/assig",
        type: 'post',
    }).done(function(data) {
        alert(data);
        for (i = 1; i <= data; i++) {
            $("#assgnmnts").append("<div class='row-md-6 task'><div class='facname'><p><b>Question For You:</b></p></div><div class='qn'>What do you think Machine Learning is?</div><br><form name='form'><div class='ans'><b>Your Answer:</b></div><br><div class='inp' contenteditable='true' class='edit'></div><input class='inpfield' type='hidden' name='ans' /><button id='subans' class='subans btn'>Smash it</button></form></div>");
        }
    });

    $("#subans").click(function(e) {
        alert("hi");
        $("#subans").addClass("disabled");
    });
});