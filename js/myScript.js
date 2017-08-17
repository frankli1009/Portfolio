/*---------------------------------------------------------------------
                        PARALLAX SCRIPT
---------------------------------------------------------------------*/

(function() {
    var parallaxHome = document.querySelectorAll("#home"), speed =0.3;
    var parallaxExperience = document.querySelectorAll("#experience")
    
    window.onscroll = function() {
        if(elementInViewport(document.getElementById("home"))) {
            parallaxHome.forEach(function(elP) {
                var windowYOffset = -window.pageYOffset, elPBackgroundPos = "50%" + (windowYOffset * speed) + "px";
                //console.log("windowYOffset: "+windowYOffset+", pos: "+elPBackgroundPos);
                elP.style.backgroundPosition = elPBackgroundPos;
            });    
        }
        if(elementInViewport(document.getElementById("experience"))) {
            parallaxExperience.forEach(function(elP) {
                var windowYOffset = -window.pageYOffset, elPBackgroundPos = "50%" + (windowYOffset * speed) + "px";
                //console.log("windowYOffset: "+windowYOffset+", pos: "+elPBackgroundPos);
                elP.style.backgroundPosition = elPBackgroundPos;
            });    
        }
    };
    
    $("#messageform").on("submit", function() {
        var iInvalid = 0;
        if($("#name").val() === null || $("#name").val() === "") {
            $("#name").addClass("invalidInput");
            iInvalid++;
        }
        if($("#email").val() === null || $("#email").val() === "") {
            $("#email").addClass("invalidInput");
            iInvalid++;
        }
        if($("#message").val() === null || $("#message").val() === "") {
            $("#message").addClass("invalidInput");
            iInvalid++;
        }
        
        return iInvalid === 0; 
    });
    
})();

    
function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    var mright = left + width, mbottom = top + height;
    var wright = window.pageXOffset + window.innerWidth, wbottom = window.pageYOffset + window.innerHeight;
    
    //console.log("(top,bottom): ("+top+", "+ mbottom+"), window: ("+window.pageYOffset+", "+ wbottom+")");
    //console.log("(left, right): ("+left+", "+mright+"), window: ("+window.pageXOffset+", "+ wright +")");
    
    var canView = (!(top>wbottom)) && (!(mbottom<window.pageYOffset)) && (!(left>wright)) && (!(mright<window.pageXOffset));
    //console.log("canview: "+canView);
    return canView;
}    
