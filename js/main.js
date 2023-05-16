$(document).ready(function() {
    //product selection page PlanBox

    //for card selection on hover 

    $(".card").hover(
        function() {
            $(".card").not(this).removeClass('cardBlueActive');
            $(this).toggleClass('cardBlueActive');
        }
    );

    $(".card").hover(function() {
        if ($('.PlanCntnDiv .card').hasClass("cardBlueActive")) {
            $(this).removeClass("active");
            $(this).find(".WhiteImg").addClass("imgshow");

            $(this).find(".ColorImg").addClass("imghide");

        } else {
            $(this).find(".WhiteImg").removeClass("imgshow");

            $(this).find(".ColorImg").removeClass("imghide");
        }

    });

    // for clicking on card 
    $(".card").click(function() {
        $(".card").not(this).removeClass('active');
        $(this).addClass('active');

    });

    $(".card .PlanKnowMore").click(function() {
        $(".card .PlanKnowMore").not(this).parent(".card").removeClass("cardBlueActive");
        $(this).parents(".card").toggleClass("cardBlueActive");
    });



})

/**************************************/