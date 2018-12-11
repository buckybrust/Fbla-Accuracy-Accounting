//Global Variables


//Code Here
// Activate Carousel
$(document).ready(function(){
    $("#myCarousel").carousel();
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
        $("#myCarousel").carousel("next");
    });
});

document.getElementById("menubutton").addEventListener("click", menuOpen)

var open = false;

function menuOpen(){
    console.log("menu clicked")
    if(open == true){
        
        var i = 0;
        closingAnimation();
        function closingAnimation(){
            if(i <= 33){
                document.getElementById("mobilemenu").style.right = -i * 8 + "px";
                i++;
                window.setTimeout(closingAnimation, 1)
            }else{
                document.getElementById("mobilemenu").style.display = "none";
            }
        }
        
        
        open = false;
    }else{
        document.getElementById("mobilemenu").style.display = "block";
        var i = -33;
        openingAnimation();
        function openingAnimation(){
            if(i <= 0){
                document.getElementById("mobilemenu").style.right = i * 8 + "px";
                i++;
                window.setTimeout(openingAnimation, 1)
            }
        }
        
        open = true;
    }
}
console.log("script run")