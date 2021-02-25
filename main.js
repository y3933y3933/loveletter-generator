$(function () {
  const envelopeWrapper = $(".envelope__card-wrapper");
  const btn = $(".btn");
  envelopeWrapper.hide();
  btn.hide();
  function getData() {
    $.ajax({
      url:
        "https://script.google.com/macros/s/AKfycbwOfjj5s--Q1b8_WxOCJqtq5LtIQTRXSx9IHZ2QSQBzHnZz9U-gbxjDsg/exec",
      success: function (res) {
        const { sentence, author } = JSON.parse(res);
        $(".envelope__content").text(sentence);
        $(".envelope__author").text(author);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert(textStatus);
      },
    });
  }
  getData();
  $(".envelope__heart").click(function () {
    $(".envelope__icon-wrapper").fadeOut(400, function () {
      $(".envelope").addClass("envelope--open");
      envelopeWrapper.delay(1000).fadeIn(1000, function () {
        btn.show();
      });
    });
  });

  btn.click(function () {
    getData()
    btn.fadeOut();
    $(".envelope-wrapper").fadeOut(1000, function () {
      $(".envelope").removeClass("envelope--open");
      $(".envelope__icon-wrapper").show();
      envelopeWrapper.hide();
    });
    $(".envelope-wrapper").delay(500).fadeIn();
  });
});
