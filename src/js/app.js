(function($) {
  'use strict';

  var CHECKER_SERVICE = 'https://apikconnect.honservices.org/~kconnect/cgi-bin/url-checker-service.cgi';
  var $TIMELINE = $('#timeline');
  var $FORM = $('#form');
  var $URL = $('#url');
  var $SPINNER = $('#spinner');
  var $ERRORMSG = $('#errorMessage');
  var $FOOTER = $(".footer");

  function onSubmit(event) {

    var url = $URL.val();
    if (url !== '') {
      $TIMELINE.hide();
      $TIMELINE.html('');
      $SPINNER.show();
      $ERRORMSG.hide();

      $.ajax({
        dataType: "json",
        url: CHECKER_SERVICE,
        data: {
          url: url,
        },
        success: onSuccess,
        error: onError,
      });
    }
    event.preventDefault();
  }

  function onError(xhr, status, error) {
    $ERRORMSG.show();
    $SPINNER.hide();
    positionFooter();
  }

  function onSuccess(data) {
    var html = '';
    for (var i=0; i<data.length; i++) {
      html += '';
      if (data[i].code === 200) {
        html += '<li class="timeline-inverted"><div class="timeline-badge success">' +
          '<i class="glyphicon glyphicon-ok"></i>';
      } else if (data[i].code <= 400 && data[i].code >= 300) {
        html += '<li><div class="timeline-badge primary">' +
          '<i class="glyphicon glyphicon-check"></i>';
      } else {
        html += '<li><div class="timeline-badge danger">' +
          '<i class="glyphicon glyphicon-remove"></i>';
      }
      html += '</div><div class="timeline-panel">' +
        '<div class="timeline-heading">' +
        '<h4 class="timeline-title">' + data[i].protocol + ' ' +
        data[i].code + ' ' + data[i].message  + '</h4>' +
        '<p class="text-muted">';
      if (data[i].location){
        html += data[i].location;
      }
      html += '</p></div></div></li>';
    }

    $SPINNER.hide();
    $TIMELINE.html(html);
    $TIMELINE.show();
    positionFooter();
  }

  function positionFooter() {
    var footerHeight = $FOOTER.height();
    var footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

    if ( ($(document.body).height()+footerHeight) < $(window).height()) {
      $FOOTER.css({position: "absolute"});
    } else {
      $FOOTER.css({position: "static"});
    }

  }

  $FORM.submit(onSubmit);

  $(window).bind("load", function() {

    positionFooter();

    $(window).scroll(positionFooter).resize(positionFooter);
  });

})(jQuery);
