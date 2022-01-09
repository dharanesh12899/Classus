function prodis() {
    $("#profile").load("profile.html");
}
$(document).ready(function() {

    fetchmsg();

    setInterval(fetchmsg, 5000);
    $('#navbarDropdown').click(function() {
        $('.bubble').addClass('animating');
        remove();
    });

    $("#home").click(function() {
        prodis();
    });

    $("#classroom").click(function() {
        $("#profile").load("classroom.html");
    });
});

function remanim() {
    setTimeout(function() {
        $('.bubble').removeClass('animating');
    }, 1000);
}

function remove() {
    setTimeout(function() {
        $('.bubble').removeClass('animating');
        $('.bubble').removeClass('bubble');
    }, 1000);
}

function fetchmsg() {
    $.ajax({
        url: "http://localhost:7772/fetchmsg",
        type: 'post',
        data: { year: "3" },
    }).done(function(data) {
        $("#nots-container").html("");
        var len = 0;
        for (i = 0; i < data.length; i++) {
            if ((data[i].year == localStorage.getItem("yr") && data[i].department == localStorage.getItem("br") && data[i].section == localStorage.getItem("sec")) || (data[i].year == localStorage.getItem("yr") && data[i].department == "" && data[i].section == "") || (data[i].year == "" && data[i].department == localStorage.getItem("br") && data[i].section == "")) {
                $('#badge').addClass('bubble');
                $('.bubble').addClass('animating');
                var txt = "<div class='mess'><div class='fna'>" + data[i].name + "</div><div class='text'>" + data[i].message + "</div><div class='ds'>" + data[i].date + " " + "</div><div class='ts'>" + data[i].time + "</div></div>";
                $("#nots-container").prepend(txt);
                remanim();
            } else {
                len += 1;
            }
        }

        if (len == data.length) {
            var txt = "<div class='mess'><div class='fna'>" + "Classus" + "</div><div class='text'>" + "Nothing to Show as of now!" + "</div><div class='ds'>" + "" + " " + "</div><div class='ts'>" + "" + "</div></div>";
            $("#nots-container").html(txt);
        }
    });
}