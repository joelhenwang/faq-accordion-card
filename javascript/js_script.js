// Question 1

$("#answer1").on("show.bs.collapse", function(){
    $("#question1").css("font-weight","700");
});
$("#answer1").on("hide.bs.collapse", function(){
    $("#question1").css("font-weight","400");
});

// Question 2

$("#answer2").on("show.bs.collapse", function(){
    $("#question2").css("font-weight","700");
});
$("#answer2").on("hide.bs.collapse", function(){
    $("#question2").css("font-weight","400");
});

// Question 3

$("#answer3").on("show.bs.collapse", function(){
    $("#question3").css("font-weight","700");
});
$("#answer3").on("hide.bs.collapse", function(){
    $("#question3").css("font-weight","400");
});

// Question 4

$("#answer4").on("show.bs.collapse", function(){
    $("#question4").css("font-weight","700");
});
$("#answer4").on("hide.bs.collapse", function(){
    $("#question4").css("font-weight","400");
});

// Question 5

$("#answer5").on("show.bs.collapse", function(){
    $("#question5").css("font-weight","700");
});
$("#answer5").on("hide.bs.collapse", function(){
    $("#question5").css("font-weight","400");
});

var window_width = $(window).width();



if(window.outerWidth <= 991){
    var card_width = $("FAQ-Card").width();
    var woman_img_width = $(".woman").width();
    var center_woman = card_width/2 - woman_img_width/2;
    

    

    $(".box").css("left", center_woman + "px");
}


