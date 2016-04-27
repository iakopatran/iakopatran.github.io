$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  $('#sidebar-button').click(function() {
    if($('.sidebar-container').hasClass('sidebar-active')){
	     $('body').removeClass('no-scroll');
       $('#sidebar-button').removeClass('button-active');
       $('.sidebar-container').removeClass('sidebar-active');
       $('.page-wrapper').removeClass('wrapper-active');
	} else {
      $('#sidebar-button').addClass('button-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  });
  // QUESTION 7
  $( ".page-wrapper" ).click(function() {
    $('body').removeClass('no-scroll');
    $('#sidebar-button').removeClass('sidebar-active');
    $('.sidebar-container').removeClass('sidebar-active');
    $('.page-wrapper').removeClass('wrapper-active');
	});
  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

  // QUESTION 8
$( '#carousel-next' ).click(function() {
  x = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (x == -3840) {
    return false;
  } else {
    $('#carousel').css('margin-left',x -960);
  }
});
  $( '#carousel-prev' ).click(function() {
    x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (x == 0) {
      return false;
    } else {
      $('#carousel').css('margin-left', x + 960);
    }
  });
  $( ".arrow_box" ).click(function() {
    $( "#modal-container").show(function() {
    });
  });
  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
  $( "#oink").click(function() {
    $( "#modal-container").hide(function() {
    });
  });
  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
  $( "#oink2").click(function() {
    $( "#modal-container").hide(function() {
    });
  });
  // Question 5
  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
  $( "#modal-overlay").click(function() {
    $( "#modal-container").hide(function() {
    });
  });


  $( "#1" ).click(function() {
    a = "#1"
    $( "#circle-container").show(function() {
    });
  });
  $( "#2" ).click(function() {
    a = "#2"
    $( "#circle-container").show(function() {
    });
  });
  $( "#3" ).click(function() {
    a = "#3"
    $( "#circle-container").show(function() {
    });
  });
  $( "#4" ).click(function() {
    a = "#4"
    $( "#circle-container").show(function() {
    });
  });
  $( "#5" ).click(function() {
    a = "#5"
    $( "#circle-container").show(function() {
    });
  });
  $( "#6" ).click(function() {
    a = "#6"
    $( "#circle-container").show(function() {
    });
  });
  $( "#7" ).click(function() {
    a = "#7"
    $( "#circle-container").show(function() {
    });
  });
  $( "#8" ).click(function() {
    a = "#8"
    $( "#circle-container").show(function() {
    });
  });
  $( "#9" ).click(function() {
    a = "#9"
    $( "#circle-container").show(function() {
    });
  });
  $( "#10" ).click(function() {
    a = "#10"
    $( "#circle-container").show(function() {
    });
  });
  $( "#11" ).click(function() {
    a = "#11"
    $( "#circle-container").show(function() {
    });
  });
  $( "#12" ).click(function() {
    a = "#12"
    $( "#circle-container").show(function() {
    });
  });
  $( "#13" ).click(function() {
    a = "#13"
    $( "#circle-container").show(function() {
    });
  });
  $( "#14" ).click(function() {
    a = "#14"
    $( "#circle-container").show(function() {
    });
  });
  $( "#15" ).click(function() {
    a = "#15"
    $( "#circle-container").show(function() {
    });
  });
  $( "#16" ).click(function() {
    a = "#16"
    $( "#circle-container").show(function() {
    });
  });
  $( "#17" ).click(function() {
    a = "#17"
    $( "#circle-container").show(function() {
    });
  });
  $( "#18" ).click(function() {
    a = "#18"
    $( "#circle-container").show(function() {
    });
  });
  $( "#19" ).click(function() {
    a = "#19"
    $( "#circle-container").show(function() {
    });
  });
  $( "#20" ).click(function() {
    a = "#20"
    $( "#circle-container").show(function() {
    });
  });
  $( "#21" ).click(function() {
    a = "#21"
    $( "#circle-container").show(function() {
    });
  });
  $( "#22" ).click(function() {
    a = "#22"
    $( "#circle-container").show(function() {
    });
  });
  $( "#23" ).click(function() {
    a = "#23"
    $( "#circle-container").show(function() {
    });
  });
  $( "#24" ).click(function() {
    a = "#24"
    $( "#circle-container").show(function() {
    });
  });

  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON SUBMIT BUTTON FROM MODAL BOX" HERE
  $( "#oink").click(function() {
    $( "#circle-container").hide(function() {
    });
  });
  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
  $( "#oink2").click(function() {
    $( "#circle-container").hide(function() {
    });
  });
  // Question 5
  // IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
  $( "#circle-overlay").click(function() {
    $( "#circle-container").hide(function() {
    });
  });
  $('#yellowc').click(function(){
      $("#circle-box").css('background', '#FDD017');
      $(a).css('background', '#FDD017');
    });
    $('#bluec').click(function(){
        $("#circle-box").css('background', '#357EC7');
        $(a).css('background', '#357EC7');
      });
      $('#blackc').click(function(){
          $("#circle-box").css('background', '#B6B6B4');
          $(a).css('background', '#B6B6B4');
        });

});
