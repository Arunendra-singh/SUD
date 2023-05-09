$(document).ready(function() {
    //product selection page PlanBox


    // tab content
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabs li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");

    });

    $('ul.tabs li').last().addClass("tab_last");


    /*******************************************/

    //for card selection on hover 

    $(".card").hover(
        function() {
            $(".card").not(this).removeClass('cardBlueActive');
            $(this).toggleClass('cardBlueActive');

            if ($('.PlanCntnDiv .card').hasClass("cardBlueActive")) {
                $(this).nextsibling().addClass('active');
                $(this).parent().parent().addClass('ful_height');

            } else {
                $(this).nextsibling().removeClass('active');
                $(this).parent().parent().removeClass('ful_height');
            }
        }
    );

    $(".card .PlanKnowMore").click(function() {
        $(".card .PlanKnowMore").not(this).parent(".card").removeClass("cardBlueActive");
        $(this).parents(".card").toggleClass("cardBlueActive");
    });

})

/**************************************/