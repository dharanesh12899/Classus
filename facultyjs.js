$(document).ready(function() {
    $("#next").click(function() {
        var a = $(".edit").text().trim();
        if (a.length == 0) {
            $("#error").html("<p> This field cannot be left empty!</p>")
        } else {
            $("#error").hide();
            $("#selection-msg").show();
        }
    });
    $("#scl").click(function() {
        $("#spfcls").show();
        $("#spfdep").hide();
        $("#spfyear").hide();
    });
    $("#sdep").click(function() {
        $("#spfdep").show();
        $("#spfcls").hide();
        $("#spfyear").hide();
    });
    $("#syr").click(function() {
        $("#spfyear").show();
        $("#spfdep").hide();
        $("#spfcls").hide();
    });
    $("#send").click(function() {
        a = $(".edit").text().trim()
        $("#msg").val(a);
        $.ajax({
            url: "http://localhost:7774/message",
            type: 'post',
            data: $('form').serialize(),
        }).done(function(data) {
            if (data == "done")
                $(".alert").show();
            else
                alert("No");
        });
    });
    $("#cancel").click(function() {
        $("#selection-msg").fadeOut("fast");
        $(".alert").hide();
    });

    $("#usend").click(function() {
        var form = document.getElementById('filess');
        var formData = new FormData(form);
        $.ajax({
            url: "http://localhost:7774/file",
            type: 'post',
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
        }).done(function(data) {
            if (data == "done")
                $(".alertup").show();
            else
                alert("No");
        });
    });
    $("#ucancel").click(function() {
        $("#uspfcls").fadeOut("fast");
        $(".alert").hide();
    });

    $("#unext").click(function() {
        if ($("#upfile").val() == "") {
            $("#uerror").html("<p> Please select a file!</p>")
        } else {
            $("#uerror").hide();
            $("#uspfcls").show();
        }
    });
    $("#ucancel").click(function() {
        $("#uspfcls").fadeOut("fast");
    });

    $("#uview").click(function() {
        window.location.href = "facultyuploads.html";
    });

});