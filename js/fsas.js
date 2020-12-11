$(window).on("load", function () {

    var $window = $(window);
    var $elem = $(".fadeInContainer")

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        console.log("docViewTop: " + docViewTop);
        var docViewBottom = docViewTop + $window.height();
        console.log("docViewBottom: " + docViewBottom);

        var elemTop = $elem.offset().top;
        console.log("elementTop: " + elemTop);
        var elemBottom = elemTop + $elem.height();
        console.log("elementBottom: " + elemBottom);

        return(elemTop <= (docViewTop + docViewBottom)/2)

        //return ((elemBottom <= docViewBottom + $elem.height()) &&(elemTop >= docViewTop));
       
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
