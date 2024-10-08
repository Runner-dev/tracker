// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(() => {
  $(".toggle-div").click((e) => {
    console.log("received click");
    $("#" + $(e.target).data("div")).toggle("Blind");
  });
});
