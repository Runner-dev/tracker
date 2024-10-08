// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//
$(() => {
  $("#timecard-dropdown").change((e) => {
    window.location = $(e.target).children(":selected").val();
  });
});
