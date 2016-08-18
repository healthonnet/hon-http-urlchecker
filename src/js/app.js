(function($) {
  'use strict';

  HonHttpStatus.App = {

    // Service Checker Url
    CHECKER_SERVICE: 'https://apikconnect.honservices.org/' +
      '~kconnect/cgi-bin/url-checker-service.cgi',

    // Selector
    $TIMELINE: $('#timeline'),
    $FORM:     $('#form'),
    $URL:      $('#url'),
    $SPINNER:  $('#spinner'),
    $ERRORMSG: $('#errorMessage'),
    $FOOTER:   $('.footer'),

    init: function() {
      var self = this;
      this.$FORM.submit(function(event) {
        self.onSubmit(event, self);
      });
      $(window).bind('load', function() {
        self.positionFooter();
        $(window).scroll(self.positionFooter).resize(self.positionFooter);
      });
    },

    onSubmit: function(event, self) {
      var url = self.$URL.val();
      if (url !== '') {
        this.clearUI();
        $.ajax({
          dataType: 'json',
          url: self.CHECKER_SERVICE,
          data: {
            url: url,
          },
          success: function(data, textStatus, jqXHR) {
            self.onSuccess(data, textStatus, jqXHR, self);
          },
          error: function(xhr, status, error) {
            self.onError(xhr, status, error, self);
          },
        });
      }
      event.preventDefault();
    },

    onError: function(xhr, status, error, self) {
      self.$ERRORMSG.show();
      self.$SPINNER.hide();
      self.positionFooter();
    },

    onSuccess: function(data, textStatus, jqXHR, self) {
      var html = '';
      for (var i = 0; i < data.length; i++) {
        var params = self.timelineLayout(data[i]);
        html += '';
        params.STAT = self.getTimelineTitle(data[i]);
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
          if (data[i - 1] && data[i - 1].location) {
            params.URL = data[i - 1].location;
          }
        }
        html += HonHttpStatus.Templates['src/templates/timeline.hbs'](params);
      }
      this.showTimeline(html);
    },

    getTimelineTitle: function(data) {
      var title = '';
      if (data.protocol) {
        title += data.protocol + ' ';
      }
      if (data.code) {
        title += data.code + ' ';
      }
      if (data.message) {
        title += data.message + ' ';
      }
      return title;
    },

    timelineLayout: function(data) {
      var params = {};
      if (data.code === 200) {
        params.TIMELINE = 'timeline-inverted';
        params.COLOR = 'success';
        params.ICON = 'glyphicon-ok';
      } else if (data.code <= 400 && data.code >= 300) {
        params.TIMELINE = '';
        params.COLOR = 'primary';
        params.ICON = 'glyphicon-arrow-down';
      } else {
        params.TIMELINE = '';
        params.COLOR = 'danger';
        params.ICON = 'glyphicon-remove';
      }
      return params;
    },

    clearUI: function() {
      this.$TIMELINE.hide();
      this.$TIMELINE.html('');
      this.positionFooter();
      this.$SPINNER.show();
      this.$ERRORMSG.hide();
    },

    showTimeline: function(html) {
      this.$SPINNER.hide();
      this.$TIMELINE.html(html);
      this.$TIMELINE.show();
      this.positionFooter();
    },

    positionFooter: function() {
      var footerHeight = HonHttpStatus.App.$FOOTER.height();
      var htmlHeight = $(document.body).height() + footerHeight + 50;
      if (htmlHeight < $(window).height()) {
        HonHttpStatus.App.$FOOTER.css({position: 'absolute'});
      } else {
        HonHttpStatus.App.$FOOTER.css({position: 'static'});
      }
    },
  };

  HonHttpStatus.App.init();
})(jQuery);
