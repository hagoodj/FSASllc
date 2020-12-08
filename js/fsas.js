$(window).on("load", function () {

    var $window = $(window);
    var $elem = $(".fadeInContainer")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    $(document).on("scroll", function () {
        $elem.each(function() {
            if (isScrolledIntoView($(this), $window)) {
              $(this).addClass("animate")
              console.log("now you see me");
          }
        })
    });

});
