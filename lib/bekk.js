var remark = this.remark;
$(document).ready(function() {
    remark.events.addListener("slidein", function(element, index) {
      $(element).find("p:empty").remove();
      $(element).find("h1:not(.span)").wrapInner("<span>");
      $(element).find(".pushed img:not(.img > img)").parent().wrapInner("<span class='img'>");
    });
});

