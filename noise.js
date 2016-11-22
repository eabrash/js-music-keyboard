// Restarting audio on second click: http://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick
// Delay to make activation visible: http://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript

$(document).ready( function() {

  // Play a note when the button is clicked. Assumes that the HTML stays as it
  // is, so that the note (a, b, c, etc.) is the second class ([0]) of the element, and
  // that other elements, such as #aAudio, stay named as they are presently.

  $('.instrument').on('click', '.note', (function(event){
    var note = $(this).attr('class').split(/\s+/)[1];
    console.log(note);
      $('#' + note + 'Audio')[0].load();
      $('#' + note + 'Audio')[0].play();
  }));

  // Play a note when a keyboard key is pressed. Makes similar assumptions to above
  // about class naming, though it does not depend on the order of the classes on the
  // note button elements.

  $('body').keydown(function(event){

    if (parseInt(event.keyCode) >= 65 && parseInt(event.keyCode) <= 71){
      var lookup = {'65': 'a', '66': 'b', '67': 'c', '68': 'd', '69': 'e', '70': 'f', '71': 'g'};
      var key = lookup[event.keyCode];
      $('#' + key + 'Audio')[0].load();
      $('#' + key + 'Audio')[0].play();
      $('.' + key).addClass('active');
      // Makes the note button flash as if clicked
      setTimeout(function(){
        $('.' + key).removeClass('active');
      }, 80);
    }

  });

});
