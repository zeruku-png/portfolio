// Constants
const SCROLL_CONFIG = {
    fadeOutRatio: 1 / 3,
    backgroundParallaxRatio: 1 / 5,
};

// DOM Elements Cache
const DOM = {
    init() {
        this.header = $("header");
        this.fvTitle = $(".fv-title");
        this.fadeStatic = $(".fd-stc");
        this.navItems = {
            profile: $(".item-profile"),
            gallery: $(".item-gallery"),
            skill: $(".item-skill"),
        };
        this.sections = {
            gallery: $(".gallery"),
            skill: $(".skill"),
        };
        this.spinner = $("#loading");
    },
};

// Scroll Effect Manager
class ScrollEffectManager {
    constructor() {
        this.previousIndex = -1;
        this.headerBoxTop = 0;
        this.sectionTops = {
            gallery: 0,
            skill: 0,
        };
    }

    init() {
        DOM.init();
        this.headerBoxTop = DOM.header.offset().top;
        this.sectionTops.gallery = DOM.sections.gallery.offset().top;
        this.sectionTops.skill = DOM.sections.skill.offset().top;
        this.bindEvents();
    }

    bindEvents() {
        $(window).on("scroll", () => this.handleScroll());
        window.onload = () => this.handlePageLoad();
    }

    handlePageLoad() {
        DOM.spinner.addClass("loaded");
    }

    handleScroll() {
        const scrollTop = $(window).scrollTop();
        this.updateFvTitleOpacity(scrollTop);
        this.updateHeaderSticky(scrollTop);
        this.updateNavigationState(scrollTop);
        this.updateBackgroundPosition(scrollTop);
    }

    updateFvTitleOpacity(scrollTop) {
        const opacity =
            1 - scrollTop / ($(window).height() * SCROLL_CONFIG.fadeOutRatio);

        if (opacity > 1) {
            DOM.fvTitle.addClass("show");
        } else {
            DOM.fvTitle.removeClass("show");
            DOM.fvTitle.css("opacity", Math.max(0, opacity));
        }
    }

    updateHeaderSticky(scrollTop) {
        if (scrollTop > this.headerBoxTop) {
            DOM.header.addClass("sticky");
            DOM.fadeStatic.addClass("show");
        } else {
            DOM.header.removeClass("sticky");
            DOM.fadeStatic.removeClass("show");
        }
    }

    updateNavigationState(scrollTop) {
        let activeIndex = 0;

        if (scrollTop >= this.sectionTops.skill - 100) {
            activeIndex = 2;
        } else if (scrollTop >= this.sectionTops.gallery - 100) {
            activeIndex = 1;
        }

        if (activeIndex !== this.previousIndex) {
            // Reset all navigation items
            Object.values(DOM.navItems).forEach((item) =>
                item.removeClass("big")
            );

            // Set active navigation item
            switch (activeIndex) {
                case 0:
                    DOM.navItems.profile.addClass("big");
                    break;
                case 1:
                    DOM.navItems.gallery.addClass("big");
                    break;
                case 2:
                    DOM.navItems.skill.addClass("big");
                    break;
            }

            this.previousIndex = activeIndex;
        }
    }

    updateBackgroundPosition(scrollTop) {
        if (scrollTop < this.headerBoxTop) {
            $("body").css(
                "background-position-y",
                -scrollTop * SCROLL_CONFIG.backgroundParallaxRatio
            );
        }
    }
}

// Initialize on document ready
$(document).ready(() => {
    const scrollManager = new ScrollEffectManager();
    scrollManager.init();
});
