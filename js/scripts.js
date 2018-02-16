$(document).ready(function() {
  $("#blank").submit(function(event) {
    var beverage = $("select#beverage").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color").val();

    $(".beverage").text(beverage);
    $(".flavor").text(flavor);
    $(".dob").text(dob);
    $(".favoriteColor").text(favoriteColor);

    $("#result").show();

    event.preventDefault();
  });
});
