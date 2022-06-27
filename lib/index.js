

$(".feat").on("click", function () {
    $(".dD1").slideToggle(700);
    $(".down").toggle();
    $(".up").toggle();
        
});



$(".comp").on("click", function () {
    $(".dD2").slideToggle(700);
    $(".down2").toggle();
    $(".up2").toggle();

});


$("#menu").on("click", function () {
    // $(".dD2").slideToggle(700);
    $(".menu").toggle(400);
    $(".closeMenu").toggle(400);
    $(".dD3").slideToggle(800);

    $(".ft-dp").css("display", "none");
    $(".cmp-dp").css("display", "none");
    $(".up").css("display", "none");
    $(".up2").css("display", "none");
    $(".down").css("display", "inline");
    $(".down2").css("display", "inline");

});


$(".ft-downSide").on("click", function () {

    $(".down").toggle(400);
    $(".up").toggle(400);
    $(".ft-dp").toggle(600);

});

$(".cmp-downSide").on("click", function () {

    $(".down2").toggle(400);
    $(".up2").toggle(400);
    $(".cmp-dp").toggle(600);

});