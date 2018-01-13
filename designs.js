function makeGrid() {
  // Select size input
  var table = $('#pixel_canvas'),
    height = $('#input_height').val(),
    width = $('#input_width').val();

  // If grid size changed remove previous grid
  table.children().remove();

  // Make table rows
  for (var i = 0; i < height; i++) {
    table.append('<tr></tr>');
  }
  var row = $('tr');

  // Make talbe cells
  for (var j = 0; j < width; j++) {
    row.append('<td></td>')
  }
  var cell = $('td');

  // When td is clicked change color of td
  cell.click(function(e) {
    var color = $("#colorPicker").val(),
        current = $(this).css('backgroundColor');
		$(this).css('backgroundColor', color);
    // If it's clicked on cell who has already bgcolor, make bg white
    if (current == $(this).css('backgroundColor')) {
      $(this).css('backgroundColor', 'white');
    }
  })

}

// When size is submitted by the user, call makeGrid()
var submit = $('input[type="submit"]');
submit.click(function(e) {
  e.preventDefault();
  makeGrid();
});
