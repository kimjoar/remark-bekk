var remark = this.remark;
$(document).ready(function() {
  var processed = [];

  $("head").append("<link href='http://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>");

  remark.config.highlightStyle = "solarized_light"

  remark.events.addListener("slidein", function(element, index) {
    if (processed.indexOf(index) > -1) return;

    var el = $(element);
    el.find("p:empty").remove();
    el.find("h1").wrapInner("<span>");
    el.find(".pushed img").parent().wrapInner("<span class='img'>");

    processed.push(index);
  });
});

