$(document).ready(function() {
  console.log("jQuery sourced.");

  $('#calcForm').on('click', '.submitBtn', function() {
    console.log($(this).data('opp'));
    var x = $("#x").val();
    var y = $("#y").val();
    var opp = $(this).data('opp');
    doCalculation(x, y, opp);
  });
  $('#calcForm').on('submit', function(event) {
    event.preventDefault();
  });
});

function doCalculation(a, b, opp) {
  $.ajax({
    type: "POST",
    url: '/calculator' + opp,
    data: {x: a, y: b},
    success: function(response) {
      console.log(response);
      $('#output').text(response.result);
    }
  });
}
