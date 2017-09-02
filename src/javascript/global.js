$(function () {
    $(document)
        .on("ready", function () {
            console.log("ready");
            function initPortfolio() {
                var all = '#a,#b,#c';
                var afterFirst = '#b,#c';
                var addButton = '#add-more';
                var addButtonIcon = '#port-add-icon';
                var otherOption = 'a.cate';
                var allOption = 'a#all-sample';
                $(afterFirst).addClass('hide');
                $(addButton).addClass('x');
                $(allOption).on('click', function () {
                    $(addButton)
                        .removeClass('hide')
                        .addClass('x');
                    $(all).removeClass('tab-pane');
                    $(afterFirst).addClass('hide');
                    $(addButtonIcon)
                        .addClass('fa-plus')
                        .removeClass('fa-arrow-up');
                });
                $(otherOption).on('click', function () {
                    $(addButton).addClass('hide x');
                    $(afterFirst).removeClass('hide');
                    $(all).addClass('tab-pane');
                    $(addButtonIcon)
                        .addClass('fa-plus')
                        .removeClass('fa-arrow-up');
                });
                $(addButton).on('click', function () {
                    if ($(addButton).hasClass('x')) {
                        $(all).removeClass('tab-pane hide');
                        $(addButton).removeClass('x');
                        $(addButtonIcon)
                            .removeClass('fa-plus')
                            .addClass('fa-arrow-up');
                    } else {
                        $(afterFirst).addClass('hide');
                        $(addButton).addClass('x');
                        $(addButtonIcon)
                            .addClass('fa-plus')
                            .removeClass('fa-arrow-up');
                    }
                });
                $('li.list-shuffle,#add-more').on('click', function () {
                    $("div.inLeft")
                        .removeClass('InLeft')
                        .hide()
                        .addClass('InLeft')
                        .show();
                    $("div.inRight")
                        .removeClass('InRight')
                        .hide()
                        .addClass('InRight')
                        .show();
                });
                $('.popup-image').magnificPopup({
                    type: 'image',
                    removalDelay: 160,
                    callbacks: {
                        beforeOpen: function () {
                            this.st.image.markup = this
                                .st
                                .image
                                .markup
                                .replace('mfp-figure', 'mfp-figure mfp-with-anim');
                            this.st.mainClass = this
                                .st
                                .el
                                .attr('data-effect');
                        }
                    },
                    closeOnContentClick: true,
                    midClick: true
                });
                $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }

            initPortfolio();
        })

    $(window).on('load', function () {
        //   $('div#loading').fadeOut(500);
        window.sr = ScrollReveal({reset: false});
        var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,.timeline-dot,.timel' +
                'ine-content,#add-more,#skills-card,#testimonials-card,#portfolios-card,#interest' +
                '-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title im' +
                'g';
        sr.reveal(commonCards, {duration: 1100});
        sr.reveal('#about-card,.map-label', {
            duration: 1400,
            delay: 500
        });
        sr.reveal('#v-card-holder', {
            duration: 1400,
            distance: '150px'
        });
        sr.reveal('.skillbar-bar', {
            duration: 1800,
            delay: 300,
            distance: '0'
        });
    });
})();