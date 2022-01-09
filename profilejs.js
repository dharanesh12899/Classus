var reg;
$(document).ready(function() {
    $("#per-det").hide();
    $("#aca-det").hide();
    $("#co-det").hide();
    $("#ex-det").hide();
    $("#in").addClass("inner");
    $(".inner").hide();
    $('#pro-pic').attr('id', 'pro-pic');
    $('#pic').attr('id', 'pic');
    var emailid = localStorage.getItem("key");
    $.ajax({
        url: "http://localhost:7772/ex",
        type: 'post',
        data: { email: emailid },
    }).done(function(data) {
        reg = data.registernumber;
        $("#logname").html("Hi " + data.name + "!!");
        $("#name").html(data.name);
        $("#reg").html(data.registernumber);
        $("#cgpa").html(data.cgpa);
        $("#dep").html(data.branch);
        $("#sname").html(data.name);
        $("#sre").html(data.registernumber);
        $("#sbr").html(data.branch);
        $("#sdob").html(data.dob);
        $("#sage").html(data.age);
        $("#sgen").html(data.gender);
        $("#sfan").html(data.fathername);
        $("#sfao").html(data.fatheroccupation);
        $("#sadd").html(data.address);
        $("#spho").html(data.phonenumber);
        $("#sema").html(data.email);
        $("#0sc").html(data.teth);
        $("#0sn").html(data.tethschoolname);
        $("#2sc").html(data.twth);
        $("#2sn").html(data.twthschoolname);
        $("#ug1").html(data.ugo);
        $("#ug2").html(data.ugt);
        $("#ug3").html(data.ugth);
        $("#ug4").html(data.ugf);
        $("#ug5").html(data.ugfi);
        $("#ug6").html(data.ugs);
        $("#ug7").html(data.ugse);
        $("#ug8").html(data.uge);
        $("#scgpa").html(data.cgpa);
        $("#addc").html(data.additionalcoursesdone);
        $("#ppp").html(data.paperspresented);
        $("#prp").html(data.projectpresented);
        $("#ppw").html(data.paperswon);
        $("#prw").html(data.projectswon);
        $("#wra").html(data.workshopsattended);
        $("#imp").html(data.implant);
        $("#inte").html(data.internships);
        $("#mc").html(data.memberofclubs);
        $("#ssi").html(data.sportsinterestedin);
        $("#ssa").html(data.sportsachievements);
        $("#pon").html(data.performedonstagein);
        $("#tac").html(data.talentachievements);
        $("#vin").html(data.volunteeredin);
        $("#perpro").html(data.personalprojects);
        $("#cy").html(data.year);
        $("#sec").html(data.section);
        $("#pic").html("<img class='img-round' src='Uploads/propics/" + reg + ".jpg' alt='profile-pic'>");
        localStorage.setItem("yr", data.year);
        localStorage.setItem("br", data.branch);
        localStorage.setItem("sec", data.section);
    });

});

$(document).ready(function() {
    $("#pic").mouseenter(function() {
        $(".inner").show();
        $("#pic").removeClass("rotate-anticlock");
        $("#pic").addClass("rotate-clock");
        $("#name").removeClass("move-top-re");
        $("#name").addClass("move-top");
        $("#cgpa").removeClass("move-right-re");
        $("#cgpa").addClass("move-right");
        $("#reg").removeClass("move-left-re");
        $("#reg").addClass("move-left");
        $("#dep").removeClass("move-down-re");
        $("#dep").addClass("move-down");
    });
});

$(document).ready(function() {
    $("#pic").mouseleave(function() {
        $(".inner").fadeOut();
        $("#pic").removeClass("rotate-clock");
        $("#pic").addClass("rotate-anticlock");
        $("#name").removeClass("move-top");
        $("#name").addClass("move-top-re");
        $("#cgpa").removeClass("move-right");
        $("#cgpa").addClass("move-right-re");
        $("#reg").removeClass("move-left");
        $("#reg").addClass("move-left-re");
        $("#dep").removeClass("move-down");
        $("#dep").addClass("move-down-re");
    });
});

$(document).ready(function() {
    $("#per").click(function() {
        $("#co-det").hide();
        $("#aca-det").hide();
        $("#ex-det").hide();
        $("#per-det").fadeIn("slow");
        $("#pro-pic").addClass("tl");
        $("#in").removeClass("inner");
        $('#pro-pic').attr('id', 'pro-pic-new');
        $('#pic').attr('id', 'picnew');
    });
});


$(document).ready(function() {
    $("#aca").click(function() {
        $("#per-det").hide();
        $("#co-det").hide();
        $("#ex-det").hide();
        $("#aca-det").fadeIn("slow");
        $("#pro-pic").addClass("tl");
        $("#in").removeClass("inner");
        $('#pro-pic').attr('id', 'pro-pic-new');
        $('#pic').attr('id', 'picnew');
        $("#aca-det").fadeIn("slow");
    });
});


$(document).ready(function() {
    $("#cocur").click(function() {
        $("#per-det").hide();
        $("#aca-det").hide();
        $("#ex-det").hide();
        $("#co-det").fadeIn("slow");
        $("#pro-pic").addClass("tl");
        $("#in").removeClass("inner");
        $('#pro-pic').attr('id', 'pro-pic-new');
        $('#pic').attr('id', 'picnew');
    });
});


$(document).ready(function() {
    $("#excur").click(function() {
        $("#per-det").hide();
        $("#aca-det").hide();
        $("#co-det").hide();
        $("#ex-det").fadeIn("slow");
        $("#pro-pic").addClass("tl");
        $("#in").removeClass("inner");
        $('#pro-pic').attr('id', 'pro-pic-new');
        $('#pic').attr('id', 'picnew');
    });
});