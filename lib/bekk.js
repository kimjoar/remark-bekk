var remark = this.remark;
$(document).ready(function() {
    remark.events.addListener("slidein", function() {
      $("h1").not($("h1 + span")).wrapInner("<span>");
      $(".pushed img").not($(".img > img")).parent().wrapInner("<span class='img'>")
      $(".cols .col:last").addClass("last");
    });
});

