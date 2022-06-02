// ==UserScript==
// @name         KwikScroll
// @namespace    http://github.com
// @version      0.1
// @description  Web extension that prevents infinite scroll
// @author       David Gershony
// @match        *://instagram.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };

}
    function enableScroll() {
        window.onscroll = function() {};
    }


    function detectEnd(x){
        var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        if(scrollTop > winheight * x){
            return true;
        }
    }
    function main(){
        x = 5;
        setInterval(function(){
            //this code runs every second
            if(detectEnd(x) == true){
                disableScroll();
            }else{
                enableScroll();
            }
        }, 5000);
    }
})();
