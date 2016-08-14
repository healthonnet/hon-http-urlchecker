(function($) {
  'use strict';

  var CHECKER_SERVICE = 'https://apikconnect.honservices.org/' +
    '~kconnect/cgi-bin/url-checker-service.cgi';
  var $TIMELINE = $('#timeline');
  var $FORM = $('#form');
  var $URL = $('#url');
  var $SPINNER = $('#spinner');
  var $ERRORMSG = $('#errorMessage');
  var $FOOTER = $('.footer');

  function onSubmit(event) {

    var url = $URL.val();
    if (url !== '') {
      $TIMELINE.hide();
      $TIMELINE.html('');
      $SPINNER.show();
      $ERRORMSG.hide();

      $.ajax({
        dataType: 'json',
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
    for (var i = 0; i < data.length; i++) {
      var params = {};
      html += '';
      if (data[i].code === 200) {
        params.TIMELINE = 'timeline-inverted';
        params.COLOR = 'success';
        params.ICON = 'glyphicon-ok';
      } else if (data[i].code <= 400 && data[i].code >= 300) {
        params.TIMELINE = '';
        params.COLOR = 'primary';
        params.ICON = 'glyphicon-arrow-down';
      } else {
        params.TIMELINE = '';
        params.COLOR = 'danger';
        params.ICON = 'glyphicon-remove';
      }
      params.STAT = data[i].protocol + ' ' +
        data[i].code + ' ' + data[i].message;
      if (data[i].location) {
        params.LOCATION = data[i].location;
      }
      if (i === data.length - 1) {
        if (data[i].server) {
          params.SERVER = data[i].server;
        }
        if (data[i]['content-type']) {
          params.TYPE = data[i]['content-type'];
        }
        if (data[i].date) {
          params.DATE = data[i].date;
        }
        if (data[i].title) {
          params.TITLE = data[i].title;
        }
      }
      html += HonHttpStatus.Templates['src/templates/timeline.hbs'](params);
    }

    $SPINNER.hide();
    $TIMELINE.html(html);
    $TIMELINE.show();
    positionFooter();
  }

  function positionFooter() {
    var footerHeight = $FOOTER.height();

    if (($(document.body).height() + footerHeight + 20) < $(window).height()) {
      $FOOTER.css({position: 'absolute'});
    } else {
      $FOOTER.css({position: 'static'});
    }

  }

  $FORM.submit(onSubmit);

  $(window).bind('load', function() {

    positionFooter();

    $(window).scroll(positionFooter).resize(positionFooter);
  });

})(jQuery);
