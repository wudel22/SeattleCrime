"use strict";
(function() {
    window.addEventListener("load", init);

    /**
     * Initial functions
     */
    function init() {
        let topButton = document.getElementById("btn-back-to-top");
        topButton.addEventListener("click", backToTop);

        window.onscroll = function () {
            scroller();
        };
    }
    
    function scroller() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
            document.getElementById("btn-back-to-top").style.display = "block";
        } else {
            document.getElementById("btn-back-to-top").style.display = "none";
        }
    }
    
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})();