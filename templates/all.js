this["HonHttpStatus"] = this["HonHttpStatus"] || {};
this["HonHttpStatus"]["Templates"] = this["HonHttpStatus"]["Templates"] || {};

this["HonHttpStatus"]["Templates"]["src/templates/timeline.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <p>Location: <span class=\"text-muted break-url\">"
    + container.escapeExpression(((helper = (helper = helpers.LOCATION || (depth0 != null ? depth0.LOCATION : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"LOCATION","hash":{},"data":data}) : helper)))
    + "</span></p>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <p>Server: <span class=\"text-muted\">"
    + container.escapeExpression(((helper = (helper = helpers.SERVER || (depth0 != null ? depth0.SERVER : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"SERVER","hash":{},"data":data}) : helper)))
    + "</span></p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <p>Content-Type: <span class=\"text-muted\">"
    + container.escapeExpression(((helper = (helper = helpers.TYPE || (depth0 != null ? depth0.TYPE : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"TYPE","hash":{},"data":data}) : helper)))
    + "</span></p>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <p>Date: <span class=\"text-muted\">"
    + container.escapeExpression(((helper = (helper = helpers.DATE || (depth0 != null ? depth0.DATE : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"DATE","hash":{},"data":data}) : helper)))
    + "</span></p>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <p>Title: <span class=\"text-muted\">"
    + container.escapeExpression(((helper = (helper = helpers.TITLE || (depth0 != null ? depth0.TITLE : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"TITLE","hash":{},"data":data}) : helper)))
    + "</span></p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\""
    + alias4(((helper = (helper = helpers.TIMELINE || (depth0 != null ? depth0.TIMELINE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TIMELINE","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"timeline-badge "
    + alias4(((helper = (helper = helpers.COLOR || (depth0 != null ? depth0.COLOR : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"COLOR","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"glyphicon "
    + alias4(((helper = (helper = helpers.ICON || (depth0 != null ? depth0.ICON : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ICON","hash":{},"data":data}) : helper)))
    + "\"></i>\n  </div>\n  <div class=\"timeline-panel\">\n    <div class=\"timeline-heading\">\n      <h4 class=\"timeline-title text-"
    + alias4(((helper = (helper = helpers.COLOR || (depth0 != null ? depth0.COLOR : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"COLOR","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.STAT || (depth0 != null ? depth0.STAT : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"STAT","hash":{},"data":data}) : helper)))
    + "</h4>\n    </div>\n    <div class=\"timeline-body\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.LOCATION : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.SERVER : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.TYPE : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.DATE : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.TITLE : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </div>\n</li>\n";
},"useData":true});