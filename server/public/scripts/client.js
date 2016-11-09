$(document).ready(function() {
  console.log('up and running!');

  $("#catForm").on("submit", postCat);

  function postCat(cat) {
    event.preventDefault();
    var newCat = {};

    $.each($('#postSongForm').serializeArray(), function(i, field) {
      newCat[field.name] = field.value;
    });

    console.log(newCat);
  }
});
