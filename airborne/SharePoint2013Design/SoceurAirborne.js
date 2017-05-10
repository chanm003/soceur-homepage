
/* BEGIN Pseudeo clock ---------------------------- */

/*

  var clock = "<div class='ms-tableCell ms-verticalAlignTop'> \
    <div id='clock' class='ms-mpSearchBox ms-floatRight'>\
      <div class='timezone'><span class='zonename'>Time zone</span> <br/> 12:12:12</div> \
      <div class='timezone'><span class='zonename'>Time zone</span> <br/> 12:12:12</div> \
      <div class='timezone'><span class='zonename'>Time zone</span> <br/> 12:12:12</div> \
      <div class='timezone'><span class='zonename'>Time zone</span> <br/> 12:12:12</div> \
      <div class='timezone'><span class='zonename'>Time zone</span> <br/> 12:12:12</div> \
      <div class='timezone'><span class='zonename'>Time zone</span> <br/> 12:12:12</div> \
      <div class='ms-clear'></div>\
    </div>\
  </div>";

  $(window).ready( function(){
   //  $(clock).insertBefore('#titleAreaRow .ms-tableCell.ms-verticalAlignTop:last-child');
  });
  
*/  

/* END Pseudeo clock ---------------------------- */


/* BEGIN Menu snap ---------------------------- */

/*

  $(window).ready( function(){

    var amountScrolled = 0,
        isSnapped = false;

    $('#s4-workspace').scroll(function() {
      amountScrolled = $('#s4-workspace').scrollTop();

      if ((amountScrolled > 50) && isSnapped === false) {
        $('#DeltaTopNavigation').addClass('snap-to-top');
        isSnapped = true;
      } 
      if ((amountScrolled <= 50) && isSnapped === true) {
        $('#DeltaTopNavigation').removeClass('snap-to-top');
        $('body .ms-core-listMenu-root > li.static > a.ms-core-listMenu-item:first-child ').css({'z-index':10});
        
        isSnapped = false;
      }
    });
  });
  
*/  

/* END Menu snap ---------------------------- */


/*

// Position the page header
    setTimeout(function() {
    // ideally done on jquery bootstrap, but this is a quick fix ...

		$('body #titleAreaRow .ms-core-listMenu-root > li.static > a.ms-core-listMenu-item:first-child').css({'width':'auto'});
		var siteNameWidth = $('body #titleAreaRow .ms-core-listMenu-root > li.static > a.ms-core-listMenu-item:first-child').width();
		$('body #titleAreaRow h1#pageTitle').css({'left':siteNameWidth+10});
		$('body #titleAreaRow .ms-core-listMenu-root ul.static').css({'margin-left':'-'+siteNameWidth+'px'});
    }, 2150);
    
 */   
