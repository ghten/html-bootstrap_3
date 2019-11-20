$(window).ready(function () {

    /*******************************************************
     * For each input in the form add not glyphicon
     *******************************************************/
    $("form input").each(function () {
        var input = $(this);
        if (!$(input).hasClass('no-icon')) {
            if ($(input).is('[readonly]')) {
                $(input).next("span").addClass("glyphicon-remove");
            } else if ($(this).hasClass('active')) {
                $(input).next("span").addClass("glyphicon-remove");
            } else if ($(input).is(':disabled')) {
            } else if ($(this).hasClass('success')) {
                $(input).next("span").addClass("glyphicon-ok");
            } else if ($(this).hasClass('has-error')) {
                $(input).next("span").addClass("glyphicon-remove");
            } else if ($(this).hasClass('filledin')) {
                $(input).next("span").addClass("glyphicon-remove");
            }else {
                $(input).next("span").addClass("glyphicon-chevron-down");
            }
        }
    });

    /*
     * Menu to phone
     */
    var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
            $("#wrapper .glyphicon-bell").show();
            $("#page-content-wrapper").css("border-top", "solid 2px #f7f5f0");
            $(".mobile-menu-top").css("background-color", "#2175d9");
            $(".title-top").css("background-color", "#2175d9");
            $("#page-content-wrapper").show();
            $("footer").show();
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
            $("#wrapper .glyphicon-bell").hide();
            $("#page-content-wrapper").css("border-top", "solid 0px");
            $(".mobile-menu-top").css("background-color", "#f7f5f0");
            $(".title-top").css("background-color", "#f7f5f0");
            $("#page-content-wrapper").hide();
            $("footer").hide();
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
    /************************************************************
     * Manage glyphicon if input loses focus
     ************************************************************/
    $('input').focus(function () {
        var input = $(this);
        $(input).removeClass("success");
        $(input).removeClass("has-error");
        $('.help-block').hide();
        $(input).addClass("active");
     });

    //-----------------------------------------------------------------------
    //magnage css of menu
    function mobile_click() {
        $("header").css("background-color", "#f7f5f0");
        $(".mobile-menu-top i").css("display", "none");
        $("header h1").css("display", "none");
        $("header .primary2").css("display", "none");
        $("header .glyphicon-glyphicon-remove").css({ "display": "block", "color": "#333333", "font-size": "18px" });
        $("header .button-menu").css("display", "none");

    }

    $("#mobile-menu-click div").on("click", function () {
        mobile_click();
    });
    $("#mobile-menu-click i").on("click", function () {
        mobile_click();
    });

    //--------------------------------------------------------------------------
    //filters
    var filters = false;
    if ($('div.filters')[0]) {
        $("#filterstitle2").hide();
        if ($(window).width() < 992) {
            $('#buttonfilters').addClass("glyphicon-chevron-right");
            filters = true;
        } else {
            $('#buttonfilters').addClass("glyphicon-chevron-down");
        }
    }
    function toggleIconFilters() {
        if (filters) {
            $('#buttonfilters').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
        } else {
            $('#buttonfilters').toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
        }
        if ($('i.glyphicon-chevron-left')[0]) {
            $('#buttonfilters').addClass("pull-left");
            $("#filterstitle2").show();
            $("#filterstitle1").hide();
            $(".title-top").hide();
            $(".mobile-menu-top").hide();
            $("footer").hide();
        } else {
            $('#buttonfilters').removeClass("pull-left");
            $("#filterstitle2").hide();
            $("#filterstitle1").show();
            $(".title-top").show();
            $(".mobile-menu-top").show();
            $("footer").show();
        }
    }

    $('#collapseFilters').on('hidden.bs.collapse', toggleIconFilters);
    $('#collapseFilters').on('shown.bs.collapse', toggleIconFilters);

    //--------------------------------------------------------------------------
    //results
    function toggleIconResults() {
        $('#buttonresults').toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
    }

    $('#collapseResults').on('hidden.bs.collapse', toggleIconResults);
    $('#collapseResults').on('shown.bs.collapse', toggleIconResults);

    //results
    $('td#tdcolor, div#tdcolor').on('click', function () {
        $(this).toggleClass('tdcolor1 tdcolor2');
    });

     /********************************************************************
     * orders
     */
    // if in order a one checkbox is checked in desktop
    $('#result input[type="checkbox"]').click(function () {

        if ($("#result input:checkbox:checked").length > 0) {
            $('#footer-menu').css("display", "block");
            $('#footer').css("display", "none");
        } else {
            $('#footer-menu').css("display", "none");
            $('#footer').css("display", "block");
        }
    });

    // if in order a one checkbox is checked in mobil
    $('#result-mobil input[type="checkbox"]').click(function () {
        //mobil
        if ($("#result-mobil input:checkbox:checked").length > 0) {
            $('#footer-menu').css("display", "block");
            $('#footer').css("display", "none");
        } else {
            $('#footer-menu').css("display", "none");
            $('#footer').css("display", "block");
        }

    });

     //menu
     jQuery(".dropdown-menu li.dropdown").on("mouseenter", function () {
        jQuery(this).find(".dropdown-menu").css({ "display": "inline-block" }, "slow");
    }).on("mouseleave", function () {
        jQuery(this).find(".dropdown-menu").css({ "display": "none" }, "slow");
    });

});

