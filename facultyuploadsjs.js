$('document').ready(() => {
    $.ajax({
        url: "http://localhost:7771/facups",
        type: 'post',
        data: $('form').serialize(),
    }).done(function(data) {
        len = data.length;
        apps = len;
        var i = 0;
        while (i < len) {
            if (apps >= 3) {
                $("#hi").append("<div class='container-flush row'><div class='col-md-4'><div class='imgbox'><embed src='" + data[i].path + "' alt='No'><div class='type'>Type:" + data[i].type + "</div><div class='size'>Size:" + data[i].size + " mb</div><a href='" + data[i].path + "' download>Download</a></div></div><div class='col-md-4'><div class=' imgbox'><embed src='" + data[i + 1].path + "' alt='No'><div class='type'>Type:" + data[i + 1].type + "</div><div class='size'>Size:" + data[i + 1].size + " mb</div><a href='" + data[i + 1].path + "' download>Download</a></div></div><div class='col-md-4'><div class=' imgbox'><embed src='" + data[i + 2].path + "' alt='No'><div class='type'>Type:" + data[i + 2].type + "</div><div class='size'>Size:" + data[i + 2].size + " mb</div><a href='" + data[i + 2].path + "' download>Download</a></div></div></div><br>");
                i += 3;
            } else if (apps == 2) {
                $("#hi").append("<div class='container-flush row'><div class='col-md-4'><div class='imgbox'><embed src='" + data[i].path + "' alt='No'><div class='type'>Type:" + data[i].type + "</div><div class='size'>Size:" + data[i].size + " mb</div><a href='" + data[i].path + "' download>Download</a></div></div><div class='col-md-4'><div class=' imgbox'><embed src='" + data[i + 1].path + "' alt='No'><div class='type'>Type:" + data[i + 1].type + "</div><div class='size'>Size:" + data[i + 1].size + " mb</div><a href='" + data[i + 1].path + "' download>Download</a></div></div></div><br>");
                i += 2;
            } else if (apps == 1) {
                alert("hi3");
                $("#hi").append("<div class='container-flush row'><div class='col-md-4'><div class='imgbox'><embed src='" + data[i].path + "' alt='No'><div class='type'>Type:" + data[i].type + "</div><div class='size'>Size:" + data[i].size + " mb</div><a href='" + data[i].path + "' download>Download</a></div></div></div><br>");
                i += 1;
            }
            apps -= 3;
        }
    });

    $("#home").click(function() {
        window.location.href = "facultyhome.html";
    });
});