// Restarting audio on second click: http://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick
// Delay to make activation visible: http://stackoverflow.com/questions/17883692/how-to-set-time-delay-in-javascript

$(document).ready( function() {

  // Play a note when the button is clicked

  $('.c').click(function(){
    $('#cAudio')[0].load();
    $('#cAudio')[0].play();
  });

  $('.d').click(function(){
    $('#dAudio')[0].load();
    $('#dAudio')[0].play();
  });

  $('.e').click(function(){
    $('#eAudio')[0].load();
    $('#eAudio')[0].play();
  });

  $('.f').click(function(){
    $('#fAudio')[0].load();
    $('#fAudio')[0].play();
  });

  $('.g').click(function(){
    $('#gAudio')[0].load();
    $('#gAudio')[0].play();
  });

  $('.a').click(function(){
    $('#aAudio')[0].load();
    $('#aAudio')[0].play();
  });

  $('.b').click(function(){
    $('#aAudio')[0].load();
    $('#bAudio')[0].play();
  });

  // Play a note when a keyboard key is pressed

  $('body').keydown(function(event){
    if (event.key == 'c' || event.key == '1'){
      $('#cAudio')[0].load();
      $('#cAudio')[0].play();
      $('.c').addClass('active');
      setTimeout(function(){
        $('.c').removeClass('active');
      }, 80);
    } else if (event.key == 'd' || event.key == '2'){
      $('#dAudio')[0].load();
      $('#dAudio')[0].play();
      $('.d').addClass('active');
      setTimeout(function(){
        $('.d').removeClass('active');
      }, 80);
    } else if (event.key == 'e' || event.key == '3'){
      $('#eAudio')[0].load();
      $('#eAudio')[0].play();
      $('.e').addClass('active');
      setTimeout(function(){
        $('.e').removeClass('active');
      }, 80);
    } else if (event.key == 'f' || event.key == '4'){
      $('#fAudio')[0].load();
      $('#fAudio')[0].play();
      $('.f').addClass('active');
      setTimeout(function(){
        $('.f').removeClass('active');
      }, 80);
    } else if (event.key == 'g' || event.key == '5'){
      $('#gAudio')[0].load();
      $('#gAudio')[0].play();
      $('.g').addClass('active');
      setTimeout(function(){
        $('.g').removeClass('active');
      }, 80);
    } else if (event.key == 'a' || event.key == '6'){
      $('#aAudio')[0].load();
      $('#aAudio')[0].play();
      $('.a').addClass('active');
      setTimeout(function(){
        $('.a').removeClass('active');
      }, 80);
    } else if (event.key == 'b' || event.key == '7'){
      $('#bAudio')[0].load();
      $('#bAudio')[0].play();
      $('.b').addClass('active');
      setTimeout(function(){
        $('.b').removeClass('active');
      }, 80);
    }
  });

});
