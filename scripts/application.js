let portfolioModule = (function(){
    let windowWidth = window.screen.availWidth;
    let windowHeight = window.screen.availHeight;

    $('section').css('min-height', windowHeight);
    $('#home > div').css('min-height', windowHeight);

    let works = ["landing page", "web site", "web application"];

    let wordFadeIn = function(word) {
      setTimeout(function() {
        $('#work').text(word).fadeIn();
      }, 1500)
    }

    let wordFadeOut = function(word) {
      setTimeout(function() {
        $('#work').text(word).fadeOut();
      }, 1500);
    }

    for(let i = 0, worksLength = works.length; i < worksLength; i++) {
      wordFadeIn(works[i]);
      wordFadeOut(works[i]);
    }
}());
