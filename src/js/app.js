(function($) {
  'use strict';

  var CHECKER_SERVICE = 'https://apikconnect.honservices.org/~kconnect/cgi-bin/url-checker-service.cgi';
  var $TIMELINE = $('#timeline');
  var $FORM = $('#form');
  var $URL = $('#url');

  function onSubmit(event) {
    $TIMELINE.hide();
    $TIMELINE.html('');
    var url = $URL.val();
    if (url !== '') {
      $.ajax({
        dataType: "json",
        url: CHECKER_SERVICE,
        data: {
          url: url,
        },
        success: onSuccess,
      });
    }
    event.preventDefault();
  }

  function onSuccess(data) {
    var html = '';
    for (var i=0; i<data.length; i++) {
      html += '';
      if (data[i].code === '200') {
        html += '<li class="timeline-inverted"><div class="timeline-badge success">' +
          '<i class="glyphicon glyphicon-ok"></i>';
      } else if (data[i].code <= 400 && data[i].code >= 300) {
        html += '<li><div class="timeline-badge primary">' +
          '<i class="glyphicon glyphicon-check"></i>';
      } else {
        html += '<li><div class="timeline-badge danger">' +
          '<i class="glyphicon glyphicon-check"></i>';
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
    $TIMELINE.html(html);
    $TIMELINE.show();
  }

  $FORM.submit(onSubmit);
})(jQuery);
