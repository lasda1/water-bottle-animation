function scriptFunction() {
  var waterText = "  <div class='icon-position' onclick='scriptFunction();'>  <i class='fas fa-plus '></i></div>"
  var id = $(".icon-position").parent()["0"].id
  var nextId = parseInt(id) + 1
  var glassText = "<div id='" + nextId + "' class='glass' onclick='emptycups(id);'> <div class='water'> </div> <div class='icon-position' onclick='scriptFunction();'>  <i class='fas fa-plus '></i></div> </div>"
  var waterComnsumption = id * 0.25;
  if (id == 8) {
    $(".check-position").show()
  }
  $("#sum").text(waterComnsumption + ' L')
  if ($(".icon-position").parent()["0"].nextElementSibling != null) {
    $('#' + id + ' .icon-position').remove()
    $("#" + nextId).append(waterText)

  } else {
    $('#' + id + ' .icon-position').remove()
    $('.glass-container').append(glassText)
  }
  for (var i = 1; i <= id; i++) {
    fillTheCup(i)
  }
  fillTheCup(id)
};

function fillTheCup(id) {
  $('#' + id + ' .water').addClass('active')
}

function unFillTheCup(id) {
  $('#' + id + ' .water').removeClass('active')
}

function unFillAllCups() {
  var i = 1;
  while ($('#' + i).length) {
    unFillTheCup(i)
    i++;
  }
}

function emptycups(id) {
  var waterText = "  <div class='icon-position' onclick='scriptFunction();'>  <i class='fas fa-plus '></i></div>"
  var i = parseInt(id) + 1
  var nextId = parseInt(id) + 1
  var waterComnsumption = id * 0.25;
  var glassText = "<div id='" + nextId + "' class='glass' onclick='emptycups(id);'> <div class='water'> </div> <div class='icon-position' onclick='scriptFunction();'>  <i class='fas fa-plus '></i></div> </div>"
  $("#sum").text(waterComnsumption + ' L')
  if (id < 8) {
    $(".check-position").hide()

  }else{
    $(".check-position").show()
  }
    $(".icon-position").remove()
    $("#" + nextId).append(waterText)
    unFillAllCups();
    for (var i = 1; i <= id; i++) {
      fillTheCup(i)
    }
    if ($("#" + id).next('div').length == 0) {
      $('.glass-container').append(glassText)
    }

}