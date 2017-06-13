let portfolioModule = (function(){
  /**********************************************************************
   *               MINIMUM SECTION HEIGHT CALCULATION                   *
   **********************************************************************/

    let windowWidth = window.screen.availWidth;
    let windowHeight = window.screen.availHeight;

    $('section').css('min-height', windowHeight);
    $('#home > div').css('min-height', windowHeight);

    /**********************************************************************
     *                          SECTION SCROLLER                          *
     **********************************************************************/

    $( 'header > nav > ul > li > a[href^="#"]' ).on('click', function(e) {
  		e.preventDefault();

  		var target = this.hash;
  		$target = $(target);

  		$( 'html, body' ).stop().animate({
  			'scrollTop': $target.offset().top
  		}, 900, 'swing', function() {
  			window.location.hash = target;
  		});
  	});

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

    let displayWord = function(word) {
      return function() {
        wordFadeIn(word);
        wordFadeOut(word);
      };
    }

    for(let i = 0, worksLength = works.length; i < worksLength; i++) {
      (function(work) {
        displayWord(work);
      }(works[i]))
    }

    /**********************************************************************
     *                     MENU HIDE/SHOW CODE                            *
     **********************************************************************/

    let n = '#nav', no = 'nav-open';
    $('#nav-menu').click(function() {
      if ($(n).hasClass(no)) {
        $(n).animate({height:0}, 300);
        setTimeout(function() {
          $(n).removeClass(no).removeAttr('style');
        }, 320);
      }
      else {
        var newH = $(n).css('height', 'auto').height();

        $(n).height(0).animate({height:newH}, 300);

        setTimeout(function() {
          $(n).addClass(no).removeAttr('style');
        }, 320);
      }
  });
}());
