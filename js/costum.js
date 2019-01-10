$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $("#elkom").position().top);
    var $nav = $(".navbar-toggle");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $(".alert").position().top);
	var $nav = $(".alert");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $(".Holder").position().top);
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled1', $(this).scrollTop() > $("#funny").position().top);
    var $nav = $("#time");
    $nav.toggleClass('scrolled1', $(this).scrollTop() > $("#funny").position().top);
    var $nav = $("#time");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $(".jumbotron > h1").position().top);
    var $nav = $(".navbar-collapse");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $(".jumbotron > h1").position().top);
    var $nav = $("#logo");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $(".jumbotron > h1").position().top);
    var $nav = $(".dropdown");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $(".alert").position().top);
/*  var $test = $(".alert");
    $test.toggleClass('scrolled', $(this).scrollTop() > $("#fun").position().top);
    var $test = $(".alert");
    $test.toggleClass('normal', $(this).scrollTop() < $("#fun").position().top);*/
  });
});

$('.carousel').carousel({
    interval: false
}); 