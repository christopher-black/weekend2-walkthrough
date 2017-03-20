$(document).ready(function() {
  console.log("jQuery sourced.");

  // Called when a submitBtn is clicked
  $('#calcForm').on('click', '.submitBtn', function() {
    var x = $("#x").val(); // Value of our x input field
    var y = $("#y").val(); // Value of our y input field

    // Access data attribute, e.g. data-opp="/add"
    console.log($(this).data('opp'));
    var opp = $(this).data('opp');
    doCalculation(x, y, opp);
  });

  // Called when our form is submitted
  $('#calcForm').on('submit', function(event) {
    // Stop the page from refreshing
    event.preventDefault();
  });
});

// Function that submits our AJAX request
function doCalculation(a, b, opp) {
  $.ajax({
    type: "POST",
    // Use /calculator now that we have a router
    url: '/calculator' + opp,
    data: {x: a, y: b},
    success: function(response) {
      console.log(response);
      // Write the response to the screen
      $('#output').text(response.result);
    }
  });
}
