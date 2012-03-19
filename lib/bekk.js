var remark = this.remark;
$(document).ready(function() {
    remark.events.addListener("slidein", function(element, index) {
      $(element).find("h1").not($("h1 + span")).wrapInner("<span>");
      $(element).find(".pushed img").not($(".img > img")).parent().wrapInner("<span class='img'>");
      $(element).find(".cols .col:last").addClass("last");
    });
});

