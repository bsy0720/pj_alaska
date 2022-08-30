$(document).ready(function () {
    $('#p_close').click(function () {
        $('#pop').hide();
    });
});



$(document).ready(function () {
    cookiedata = document.cookie;

    if (cookiedata.indexOf("ncookie=done") < 0) {
        document.getElementById('popup2_wrap').style.display = "block";
        $("#wrap").prepend('<div id="dimm-cookie" onclick="dimm_close();" class="black" />');
    } else {
        document.getElementById('popup2_wrap').style.display = "none";
    }
});

function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closeWin() {
    document.getElementById('popup2_wrap').style.display = "none";
    $("#dimm-cookie").remove();
}

function todaycloseWin() {
    setCookie("ncookie", "done", 1);
    document.getElementById('popup2_wrap').style.display = "none";
    $("#dimm-cookie").remove();
}

function dimm_close() {
    $("#dimm-cookie").remove();
    document.getElementById('popup2_wrap').style.display = "none";
}