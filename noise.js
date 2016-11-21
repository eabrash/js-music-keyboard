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
  // Regex reference: http://stackoverflow.com/questions/7070975/regex-one-character-only

  $('body').keydown(function(event){
    if (/^[a-g]$/.test(event.key)){
      $('#' + event.key + 'Audio')[0].load();
      $('#' + event.key + 'Audio')[0].play();
      $('.' + event.key).addClass('active');
      // Makes the note button flash as if clicked
      setTimeout(function(){
        $('.' + event.key).removeClass('active');
      }, 80);
    }
  });

});
