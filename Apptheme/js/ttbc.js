$(document).ready(function() {

    $(".btn-expand").on('click', btnExpandClick);

    $(".news_slide").bxSlider({
        pager: false,
        loop: true,
        auto: 1,
        nextText: '',
        prevText: '',
        nextSelector: "#lastestnews-next",
        prevSelector: "#lastestnews-prev"
        
    });


    var deviceWidth = $("body").outerWidth();

    if (deviceWidth >= 768) {
        $(".fa-search").click(function() {
            $(".searchbox").show();

        });

        $(".fa-times").click(function() {
            $(".searchbox").hide();
        });

    } else {
        $(".searchbox").show();
    }


    var tabcontent;

    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[1].style.display = "block";
        tabcontent[i].style.display = "none";

    }
    
    var side_img_1 = $("#side_img").data("src-1");
    var side_img_2 = $("#side_img").data("src-2");

    if (deviceWidth < 768) {
        $("#side_img").attr("src", side_img_1);
    } else {
        $("#side_img").attr("src", side_img_2);
    }
    $(window).resize(function() {
        var ww = $("body").outerWidth();

        if (ww < 768) {
            $("#side_img").attr("src", side_img_1);
        } else {
            $("#side_img").attr("src", side_img_2);
        }

    });
});




function btnExpandClick(e) {
    e.preventDefault();
    e.stopPropagation();
    expandNav();
}

function expandNav() {
    $('.nav').toggle();

}

function openEventCalendar(evt, tableName) {
    var i, tabcontent, tablinks;

    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = $(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    $("#" + tableName + "").css("display", "block");
    evt.currentTarget.className += " active";

}