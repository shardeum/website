/* SETUP */

let mobile = false;
let mobileBreak = 768;
let hoverBreak = 1024;
if ($(window).width() <= mobileBreak) {
  mobile = true;
}
let path;
let isHome = false;
if ($("body").attr("id") == "page-home") {
  isHome = true;
}

const bgcolors = ["#A4FF00", "#FF0098", "#1EFFFA", "#FF4C0F"];
const bgblue = "#3042FB";
let lastRand = "";
let rand = "";

// disable interval while tab is open

let pageInactive = false;
$(window).focus(function () {
  pageInactive = false;
});

$(window).blur(function () {
  pageInactive = true;
});

// Greensock config

gsap.config({
  nullTargetWarn: false,
});

// eases

let baseInOut = "power3.inOut";
let baseOut = "power3.out";
let fastOut = "expo.out";
let bounceOut = "elastic.out(2,2)";
let bounceOutLt = "elastic.out(1.4,2)";
let bounceInOutLt = "elastic.inOut(1.4,2)";
let bounceInOut = "elastic.inOut(2,2)";

// - GLOBAL: RESIZE

let winW = $(window).width();
let winH = window.innerHeight;
$(window).resize(function () {
  winW = $(window).width();
  winH = window.innerHeight;
  //console.log(winW + ' / ' + winH);

  if (winW <= mobileBreak && !mobile) {
    mobile = true;

    if (stickyOpen) {
      $("#globalHeader").removeClass("sticky");
      stickyOpen = false;
    }
  }
  if (winW > mobileBreak && mobile) {
    mobile = false;

    // if already scrolled, set sticky
    if (sT > 0 && !stickyOpen) {
      setSticky();
    }
  }

  // layout updates
  updateLayout();

  if (winW > 1024) {
    ScrollTrigger.refresh();
  }
});

// - GLOBAL: HELPERS

function updateLayout() {
  // update side menu
  if (menuOpen) {
    updateSideMenu();
  }

  // global scale updates
  if ($(".has-scale").length > 0) {
    updateScales();
  }

  // update sizers
  if ($(".has-sizer").length > 0) {
    updateSizers();
  }

  // update module sliders
  if ($(".modules").length > 0) {
    $(".modules").each(function () {
      updateModSliders($(this));
    });
  }

  // update roadmaps
  if ($(".has-roadmap").length > 0) {
    updateRoadmap($(".has-roadmap"));
  }

  // update article share pin
  if ($("#sharing-module").length > 0) {
    //updateSharePin();
  }

  // update module swipers
  if ($(".has-swipe").length > 0) {
    $(".has-swipe").each(function () {
      updateSwipe($(this));
    });
  }
}

function updateScales() {
  $(".has-scale").each(function () {
    if (winW < Number($(this).attr("data-limit")) && winW > Number($(this).attr("data-min"))) {
      fullW = Number($(this).attr("data-width"));
      trgW = $(this).find(".sizer").width();
      scDif = Number(trgW / fullW);
      if (scDif > 1) {
        scDif = 1;
      }
      if (scDif > 0) {
        gsap.set($(this).find(".scale-container"), {
          scaleX: scDif,
          scaleY: scDif,
        });
      }
    } else {
      $(this).find(".scale-container").attr({ style: "" });
    }
  });
}

function sizeRetina() {
  $(".retina, .svg-sized").each(function () {
    tmpW = Math.round($(this).find("img").get(0).naturalWidth);
    if ($(this).hasClass("retina")) {
      $(this)
        .find("img")
        .css({
          width: "100%",
          height: "auto",
          "max-width": tmpW / 2 + "px",
        });
    } else {
      $(this)
        .find("img")
        .css({
          width: "100%",
          height: "auto",
          "max-width": tmpW + "px",
        });
    }
    $(this).removeClass("retina svg-sized");
    //console.log('remove' + tmpW);
  });
}

// give ID to section if none
c = 0;
$(".has-anim").each(function () {
  if ($(this).attr("id") == undefined) {
    $(this).attr("id", "anim" + c);
    c++;
  }
});

// global custom sizers (to maintain height across rows)
function updateSizers() {
  $(".has-sizer").each(function () {
    sizeMin = Number($(this).attr("data-min"));

    if (winW > sizeMin) {
      $(this).find(".size-box").css({ "min-height": "" });

      pH = 0;
      $(this)
        .find(".size-box")
        .each(function () {
          if ($(this).outerHeight() > pH) {
            pH = $(this).outerHeight();
          }
        });
      $(this)
        .find(".size-box")
        .css({ "min-height": pH + "px" });
    } else {
      $(this).find(".size-box").css({ "min-height": "" });
    }
  });
}

function freezePage() {
  $("body").css({ width: "100%", height: "100%", overflow: "hidden" });
}
function unfreezePage() {
  $("body").css({ width: "", height: "", overflow: "" });
}

function animScroll(sec, speed, offset) {
  activeOffset = $(sec).offset().top + offset;
  gsap.to(window, {
    duration: speed,
    scrollTo: { y: activeOffset },
    ease: "expo.inOut",
  });
}
$(".scroll-to").click(function () {
  let sec = "#" + $(this).data("sec");
  let offset = $(this).data("os");
  if (offset == undefined) {
    offset = 0;
  }
  activeOffset = $(sec).offset().top + offset;
  gsap.to(window, { duration: 2, scrollTo: { y: activeOffset }, ease: baseInOut });
});

function followMouse(trg) {
  $(trg).bind("mousemove", function (e) {
    const el = $(this).find(".hover-follow");
    const hoverW = el.outerWidth();
    const hoverH = el.outerHeight();

    let osX = e.offsetX - hoverW / 2;
    let osY = e.offsetY - hoverH / 2;

    gsap.to(el, { delay: 0, duration: 0.25, ease: baseOut, x: osX, y: osY });
  });
}

// force external links
$("a").each(function () {
  if ($(this).attr("href") != "#") {
    $(this).attr("target", "_blank");
  }
});

// - GLOBAL: COMPONENTS

// cta button

$(".cta-btn.split").each(function () {
  let ctaData = '<span class="cta-txt">';

  // add icon if any
  if ($(this).data("icon")) {
    ctaData += '<img src="./html/img/' + $(this).data("icon") + '" class="cta-icon">';
  }

  // swap out arrow for other icon if any
  let arrow = '<img src="/html/img/global/chevron-blue.svg">';
  if ($(this).data("arrow")) {
    arrow = '<div class="icon icon-' + $(this).data("arrow") + '"></div>';
  }

  ctaData += $(this).data("text");
  ctaData += "</span>";
  ctaData +=
    '<span class="cta-arr"><span class="arr"><div class="arr-img">' +
    arrow +
    "</div></span></span>";
  $(this).html(ctaData);
});

// read more hover

$(".hover-follow").each(function () {
  let cmpData =
    '<span class="ph">Read More</span><div class="hover-box cta-btn"><div class="hover-ticker">Read More</div><div class="hover-ticker">Read More</div></div>';
  $(this).html(cmpData);
});

// - GLOBAL: LOADER

let loaded = false;
freezePage();

// random color for loader
if (!isHome) {
  chooseRandNew();
  gsap.set($("#loader"), { backgroundColor: bgcolors[rand] });
}

$(window).on("load", function () {
  $(window).resize();
  loaded = true;

  // size retina images
  if ($(".retina, .svg-sized").length > 0) {
    sizeRetina();
  }

  // init after load events
  initPage();

  // start scroll events
  initScrollEvents();

  // ready for page open
  gsap.to("#loader", {
    delay: 0.2,
    duration: 0.5,
    yPercent: 100,
    ease: "expo.out",
    onComplete: function () {
      unfreezePage();
      $("#loader").hide();
    },
  });

  // open animation if home
  if (isHome) {
    homeIntro();
  }
});

function initPage() {
  // lazy load all images
  lazyLoad();

  // tickers
  if ($(".has-ticker").length > 0) {
    initTickers();
  }
}

// lazy load images
function lazyLoad() {
  let preloadedImages = [];
  $(".lazy-load").each(function (i) {
    let img = new Image();
    img.src = $(this).attr("data-src");
    img.tname = $(this).attr("data-src");
    img.obj = $(this);
    preloadedImages.push(img);
    img.onload = function () {
      currentElem = img.obj;
      tmpsrc = $(currentElem).attr("data-src");
      if ($(currentElem).hasClass("bg")) {
        $(currentElem).css("background-image", "url(" + tmpsrc + ")");
      } else {
        $(currentElem).attr("src", tmpsrc).attr("data-src", "");
        //gsap.to($(currentElem), {duration:.75, startAt:{opacity:0}, opacity:1})
      }
      //console.log(img.tname + ' has been loaded successfully');
      $(currentElem).removeClass("lazy-load");
      $(window).resize();
      ScrollTrigger.refresh();
    };
  });
}

// - GLOBAL: DROP MENU

const menuEaseIn = "back.out(2)";
const menuEaseOut = "back.inOut(2)";

// mouse events
$("#globalHeader")
  .find("li.has-sub:not(.sub)")
  .each(function () {
    $(this)
      .mouseenter(function () {
        if (winW > 1024) {
          openSubmenu($(this));
        }
      })
      .mouseleave(function () {
        if (winW > 1024) {
          closeSubmenu($(this));
        }
      });
  });

$("#globalHeader")
  .find("li.has-sub.sub")
  .each(function () {
    $(this)
      .mouseenter(function () {
        openSubsubmenu($(this));
      })
      .mouseleave(function () {
        closeSubsubmenu($(this));
      });
  });

// open/close animation
function openSubmenu(trg) {
  if ($(trg).find(".subnav").hasClass("closing")) {
    $(trg).removeClass("open");
    $(trg).find(".subnav").hide();
    $(trg).find(".subnav").removeClass("closing");
  }
  $(trg).addClass("open on");
  $(trg).find(".subnav").show();
  gsap.killTweensOf($(trg).find(".subnav"));
  gsap.fromTo(
    $(trg).find(".subnav"),
    { y: -15, opacity: 0 },
    { duration: 1, delay: 0.25, opacity: 1, y: 0, ease: bounceOut }
  );
  if (!$(trg).hasClass("active")) {
    dropMenuDot(trg);
  }
}
function closeSubmenu(trg) {
  trg.find(".subnav").addClass("closing");
  $(trg).removeClass("on");
  gsap.killTweensOf(trg.find(".subnav"));
  gsap.to(trg.find(".subnav"), {
    duration: 0.5,
    opacity: 0,
    y: -10,
    ease: menuEaseOut,
    onCompleteParams: [trg.find(".subnav")],
    onComplete: function (t) {
      t.parents(".has-sub").removeClass("open");
      t.hide();
      t.removeClass("closing");
    },
  });
  if (!$(trg).hasClass("active")) {
    removeMenuDot(trg);
  }
}

function openSubsubmenu(trg) {
  $(trg).find(".subsubnav").show();
  gsap.killTweensOf($(trg).find(".subsubnav"));
  gsap.fromTo(
    $(trg).find(".subsubnav"),
    { y: -15, opacity: 0 },
    { duration: 1, delay: 0.25, opacity: 1, y: 0, ease: bounceOut }
  );
}
function closeSubsubmenu(trg) {
  gsap.killTweensOf(trg.find(".subsubnav"));
  gsap.to(trg.find(".subsubnav"), {
    duration: 0.5,
    opacity: 0,
    y: -10,
    ease: menuEaseOut,
    onCompleteParams: [trg.find(".subsubnav")],
    onComplete: function (t) {
      t.hide();
    },
  });
}

// drop dot for active menu
function dropMenuDot(el) {
  gsap.fromTo(
    $(el).find(".active-dot"),
    { y: -40, opacity: 1 },
    { duration: 1, opacity: 1, y: 0, ease: bounceOut }
  );

  gsap.to($(el).find("a.top"), { delay: 0.1, duration: 0.5, y: 15, ease: "power3.out" });
  gsap.to($(el).find("a.top"), { delay: 0.18, duration: 0.5, y: 0, ease: baseOut });
}
function removeMenuDot(el) {
  gsap.killTweensOf($(el).find(".active-dot"));
  gsap.to($(el).find(".active-dot"), { duration: 0.25, opacity: 0, ease: baseOut });
}

// subnav/filter hovers
$(".subnav, .subnav-inner, .subsubnav, .filter-options")
  .children("ul")
  .children("li")
  .mouseenter(function () {
    if (winW > hoverBreak) {
      gsap.killTweensOf($(this).find(".txt, .arr"));
      gsap.fromTo(
        $(this).children("a").find(".txt"),
        { x: 0 },
        { duration: 0.5, x: 20, color: "#3042FB", ease: fastOut }
      );
      gsap.fromTo(
        $(this).children("a").find(".arr"),
        { opacity: 0, x: -20 },
        { duration: 0.5, opacity: 1, x: 0, ease: fastOut }
      );
    }
  });
$(".subnav, .filter-options")
  .find("li")
  .mouseleave(function () {
    gsap.killTweensOf($(this).find(".txt, .arr"));
    gsap.to($(this).find(".txt"), { duration: 0.6, x: 0, color: "#000", ease: baseInOut });
    gsap.to($(this).find(".arr"), { duration: 0.5, opacity: 0, x: -20, ease: baseInOut });
  });

// - GLOBAL: SIDE MENU

const menuBreak = 1024;
const menuStartDskW = 68;
const menuStartDskH = 70;
const menuStartMobW = 50;
const menuStartMobH = 52;
const dskMar = 100;
const mobMar = 44;

let menuOpen = false;
let menuExp = false;
let menuEndDskW = 308;
let menuEndMobW = 238;
let menuEndDskH = 0;
let menuH = 0;
let mDif = dskMar;
if (winW < 1400) {
  mDif = mobMar;
}
let menuMax = winH - mDif;

$(".menu-btn").click(function () {
  if (!menuOpen) {
    openSideMenu();
    menuOpen = true;
  } else {
    closeSideMenu();
    menuOpen = false;
  }
  return false;
});

function openSideMenu() {
  // set for menu view
  menuOpen = true;
  $("#globalMenu").addClass("open");
  $(".side-menu").find(".menu-inner").show();
  gsap.set($(".side-menu").find(".anim"), { x: 20, opacity: 0 });

  // get size / check if menu will fit
  checkMenuMax();

  // prep menu
  let stW = menuStartDskW;
  let stH = menuStartDskH;
  let endW = menuEndDskW;
  let endH = menuEndDskH;

  // mobile
  if (winW <= menuBreak) {
    stW = menuStartMobW;
    stH = menuStartMobH;
    endW = menuEndMobW;
  }

  // over max
  if ($(".side-menu").hasClass("max")) {
    endH = menuMax + 4;
  }

  gsap.set(".side-menu", { width: stW + "px", height: stH + "px" });
  gsap.set($(".side-menu").find(".menu-inner"), { opacity: 1, y: 0 });

  // animate open
  gsap.to(".side-menu", {
    duration: 0.75,
    width: endW + "px",
    height: endH + "px",
    ease: "elastic.out(1.2,2)",
    onComplete: function () {
      // set height to auto once open if fits
      $(".side-menu").addClass("open");
      if (!$(".side-menu").hasClass("max")) {
        $(".side-menu").height("");
      }
    },
  });

  gsap.to($(".side-menu").find(".anim"), {
    delay: 0.25,
    duration: 0.5,
    stagger: { amount: 0.4 },
    opacity: 1,
    x: 0,
    ease: baseOut,
  });
}

function checkMenuMax() {
  $(".side-menu").removeClass("max");

  menuEndDskH = $(".side-menu").find(".menu-inner>div").outerHeight() + 4;
  menuH = $(".side-menu").find(".menu-inner").height();
  mDif = dskMar;
  if (winW < 1400) {
    mDif = mobMar;
  }

  // too tall to fit window
  if (menuH > winH - mDif) {
    menuMax = winH - mDif;
    $(".side-menu").addClass("max");
    //console.log('too tall '+menuMax);

    // will fit entire menu
  } else {
    menuMax = menuEndDskH;
  }

  //console.log('end '+menuEndDskH);
}

function updateSideMenu() {
  // check if fits
  checkMenuMax();

  // does not fit, add max
  if ($(".side-menu").hasClass("max")) {
    $(".side-menu").height(menuMax);
    //console.log('max '+menuMax);

    // does fit, let height be
  } else {
    $(".side-menu").height("");
  }

  // update width if switch mobile/desk
  if (menuOpen) {
    if (winW > menuBreak) {
      $(".side-menu").css("width", menuEndDskW + "px");
    } else {
      $(".side-menu").css("width", menuEndMobW + "px");
    }
  }
}

function closeSideMenu() {
  // remove menu view
  $("#globalMenu").removeClass("open");

  // remove menu
  gsap.to($(".side-menu").find(".menu-inner"), {
    duration: 0.35,
    y: 10,
    opacity: 0,
    ease: baseOut,
  });

  // prep close
  let stW = menuStartDskW;
  let stH = menuStartDskH;

  // mobile
  if (winW <= menuBreak) {
    stW = menuStartMobW;
    stH = menuStartMobH;
  }

  // over max
  if ($(".side-menu").hasClass("max")) {
    menuEndDskH = menuMax + 4;
  }

  gsap.to(".side-menu", {
    duration: 0.5,
    delay: 0.1,
    startAt: { height: menuEndDskH + "px" },
    width: stW + "px",
    height: stH + "px",
    ease: "elastic.inOut(1,2)",
    onComplete: function () {
      $(".side-menu").find(".menu-inner").hide();
      $(".side-menu").removeClass("open").attr("style", "");
      //$('.side-menu').find('.subnav').attr('style','');
    },
  });
}

// side submenu

$("#globalMenu")
  .find("li.has-sub>a")
  .click(function () {
    let el = $(this).parent(".has-sub");
    let subnav = el.children(".subnav");
    let parent = $(this).parents(".side-menu");
    let top = $(this).parent(".has-sub").parent("ul").hasClass("top");

    // close current
    if (el.hasClass("sub-open")) {
      gsap.to(subnav, {
        duration: 0.5,
        height: 0,
        ease: "power3.inOut",
        onComplete: function () {
          updateSideMenu();
        },
      });
      el.removeClass("sub-open");
      parent.removeClass("exp");

      menuExp = false;
      return false;

      // open current
    } else {
      // close others if open
      if (top) {
        $("#globalMenu")
          .find("li.has-sub")
          .each(function () {
            if ($(this).hasClass("sub-open")) {
              gsap.to($(this).find(".subnav"), { duration: 0.5, height: 0, ease: "power3.inOut" });
              $(this).removeClass("sub-open");
            }
          });
      }

      subH = subnav.children(".subnav-inner").outerHeight();
      gsap.to(subnav, {
        duration: 0.5,
        height: subH,
        ease: "power3.inOut",
        onCompleteParams: [subnav],
        onComplete: function (t) {
          updateSideMenu();
          t.height("auto");
        },
      });
      el.addClass("sub-open");
      parent.addClass("exp");

      menuExp = true;
      return false;
    }
  });

// side menu hover

$(".side-menu .menu-btn").mouseenter(function () {
  if (winW > hoverBreak && !$(this).parents(".side-menu").hasClass("open1")) {
    gsap.fromTo(
      $(this).find(".inner"),
      { borderRadius: "10px", scaleX: 1.2, scaleY: 1.2 },
      { duration: 1, borderRadius: "25px", scaleX: 1, scaleY: 1, ease: "elastic.out(4,1)" }
    );
    gsap.to($(this).find(".inner>div"), { duration: 0.25, x: 35, ease: "quad.in" });
    gsap.to($(this).find(".inner>div"), {
      delay: 0.2,
      duration: 0.35,
      startAt: { x: -35 },
      x: 0,
      ease: baseOut,
    });
  }
});
$(".side-menu .menu-btn").mouseleave(function () {
  if (winW > hoverBreak && !$(this).parents(".side-menu").hasClass("open")) {
    gsap.fromTo(
      $(this).find(".inner"),
      { borderRadius: "25px", scaleX: 0.75, scaleY: 0.75 },
      {
        duration: 1,
        borderRadius: "10px",
        scaleX: 1,
        scaleY: 1,
        ease: "elastic.out(4,2)",
        onComplete: function () {
          $(".side-menu .menu-btn").find(".inner").attr("style", "");
        },
      }
    );
  }
});

// - GLOBAL: FILTERS

function openFilter(el) {
  $(el).parents(".filter-set").addClass("open");
  $(el).find(".filter-options").show();
  gsap.killTweensOf($(el).siblings(".filter-options"));

  gsap.to($(el).siblings(".filter-options"), {
    duration: 1,
    startAt: { display: "block", y: -15, opacity: 0 },
    y: 0,
    opacity: 1,
    ease: bounceOut,
  });
}

function closeFilter(el) {
  $(el).removeClass("open");
  gsap.killTweensOf($(el).find(".filter-options"));

  gsap.to($(el).find(".filter-options"), {
    duration: 0.5,
    opacity: 0,
    y: -10,
    ease: menuEaseOut,
    onCompleteParams: [$(el).find(".filter-options")],
    onComplete: function (t) {
      t.hide();
    },
  });
}

$(".filter-choice").mouseenter(function () {
  if (winW > 1024) {
    if (!$(this).parents(".filter-set").hasClass("open")) {
      openFilter($(this));
    }
  }
});

$(".filter-set").mouseleave(function () {
  if (winW > 1024) {
    if ($(this).hasClass("open")) {
      closeFilter($(this));
    }
  }
});

$(".filter-choice").click(function () {
  if (!$(this).parents(".filter-set").hasClass("open")) {
    openFilter($(this));
  } else {
    closeFilter($(this).parents(".filter-set"));
  }
});

// - GLOBAL: HOVERS

// cta buttons
$("button.has-arr").mouseenter(function () {
  if (winW > hoverBreak) {
    gsap.fromTo(
      $(this).find(".arr"),
      { borderRadius: "10px", scaleX: 1.2, scaleY: 1.2 },
      { duration: 1, borderRadius: "25px", scaleX: 1, scaleY: 1, ease: "elastic.out(4,1)" }
    );
    gsap.to($(this).find(".arr-img"), { duration: 0.25, x: 35, ease: "quad.in" });
    gsap.to($(this).find(".arr-img"), {
      delay: 0.2,
      duration: 0.35,
      startAt: { x: -35 },
      x: 0,
      ease: baseOut,
    });
  }
});
$("button.has-arr").mouseleave(function () {
  if (winW > hoverBreak) {
    gsap.fromTo(
      $(this).find(".arr"),
      { borderRadius: "25px", scaleX: 0.75, scaleY: 0.75 },
      { duration: 1, borderRadius: "10px", scaleX: 1, scaleY: 1, ease: "elastic.out(4,2)" }
    );
  }
});

// social links

function chooseRandNew() {
  rand = Math.floor(Math.random() * bgcolors.length);
  if (rand != lastRand) {
    lastRand = rand;
  } else {
    chooseRandNew();
  }
}

$(".social-links")
  .find("a")
  .mouseenter(function () {
    if (winW > hoverBreak) {
      chooseRandNew();
      gsap.set($(this).parents("li"), { color: "#000", backgroundColor: bgcolors[rand] });
    }
  });
$(".social-links")
  .find("a")
  .mouseleave(function () {
    gsap.set($(this).parents("li"), { color: "#FFF", backgroundColor: bgblue });
  });

// news thumbs
$(".news-item:not(.header) .news-img, .has-follow").mouseenter(function () {
  if (winW > hoverBreak) {
    // setup mouse follow
    $(".has-follow").addClass("on");
    followMouse($(this));

    // animate in
    gsap.killTweensOf($(this).find(".hover-box"));
    gsap.fromTo(
      $(this).find(".hover-box"),
      { scaleX: 0.5, scaleY: 0.5, opacity: 0 },
      { delay: 0.05, duration: 0.5, scaleX: 1, scaleY: 1, opacity: 1, ease: bounceOut }
    );
  }
});
$(".news-item:not(.header) .news-img, .has-follow").mouseleave(function () {
  // animate out
  gsap.killTweensOf($(this).find(".hover-box"));
  gsap.to($(this).find(".hover-box"), {
    duration: 0.35,
    scaleX: 0.8,
    scaleY: 0.8,
    opacity: 0,
    ease: "power3.out",
    onCompleteParams: [$(this)],
    onComplete: function (el) {
      // remove mouse follow
      el.removeClass("on");
      el.unbind("mousemove");
    },
  });
});

// global arrow animation
$(".has-arr-xmov").mouseenter(function () {
  if (winW > hoverBreak) {
    gsap.to($(this).find(".arrow img"), { duration: 0.25, x: 35, ease: "quad.in" });
    gsap.to($(this).find(".arrow img"), {
      delay: 0.2,
      duration: 0.35,
      startAt: { x: -35 },
      x: 0,
      ease: baseOut,
    });
  }
});

// - COMPONENT: TICKERS

let tickerGap = 75;
let tickers = {};
let t = 0;
let spRat = 100;

function initTicker(el) {
  let totTickerW = 0;
  let trg = $(el); //$(this).find('.ticker-bar')

  // get width of all text parts
  trg
    .find('.scroll-group[data-num="1"]')
    .find(".ticker-text")
    .each(function (i) {
      totTickerW += Math.round($(this).outerWidth());
    });

  // add gap
  gapW = (trg.find('.scroll-group[data-num="1"]').find("div").length - 1) * tickerGap;
  totTickerW += gapW;

  // position each group
  gsap.set(trg.find(".scroll-group"), { width: totTickerW });
  gsap.set(trg.find('.scroll-group[data-num="2"]'), { left: totTickerW });

  // set full width of slider wrap
  gsap.set(trg.find(".scroll-mover"), { width: totTickerW * 2 });

  // create timeline
  let tickerSp = totTickerW / spRat;
  tickers["el" + t] = gsap
    .timeline({ repeat: -1 })
    .to($(trg).find(".scroll-mover"), { duration: tickerSp, xPercent: -50, ease: "none" })
    .pause();

  // update object for reference
  trg.parents(".has-ticker").attr({ "data-ticker": t - 1, "data-tickerw": totTickerW });
  t++;

  updateTicker(el);
}

function updateTicker(el) {
  let totTickerW = $(el).parents(".has-ticker").attr("data-tickerw");
  let newW = totTickerW;

  let trg = $(el);
  gsap.set(trg.find('.scroll-group[data-num="2"]'), { left: newW });
  gsap.set(trg.find(".scroll-mover"), { width: newW * 2 });
}

function startTicker(el) {
  let cur = Number($(el).attr("data-ticker"));
  tickers["el" + cur].seek(0).play();
  tickers["el" + (cur + 1)].seek(0).play();
}

function stopTicker(el) {
  let cur = $(el).attr("data-ticker");
  tickers["el" + cur].pause();
}

function initTickers() {
  $(".has-ticker").each(function () {
    $(this)
      .find(".ticker-bar")
      .each(function () {
        initTicker($(this));
      });
  });
}

// - COMPONENT: MODULE SLIDERS

function initMods(trg) {
  // reset to first
  trg.data("cur", 0);
  trg.siblings(".slide-arrows").find(".slide-arrow.back").addClass("off");
  trg.siblings(".slide-arrows").find(".slide-arrow.next").removeClass("off");

  // add mouse events
  trg
    .siblings(".slide-arrows")
    .find(".slide-arrow")
    .bind("click", function () {
      let dir = 1;
      let el = $(this).parents(".slide-arrows").siblings(".project-mods");

      if ($(this).hasClass("back")) {
        dir = -1;
      }

      slideMods(el, dir);
      return false;
    });
}

// update module size with window resize
function updateModSize(el) {
  let modW = el.find(".module").outerWidth();
  let totMods = el.find(".module").length;
  let gap = updateGap(el);
  el.data("modw", modW);

  // set module wrapper width
  let totW = modW * totMods + gap * (totMods - 1);
  el.width(totW);
}

// slide mover
function slideMods(el, dir) {
  // get current module data
  let curMod = Number(el.data("cur"));
  curMod += dir;

  // update data set
  el.data("cur", curMod);

  // update controls
  updateSlideNav(el);

  // slide animation
  let modW = Number(el.data("modw"));
  let gap = Number(el.data("gap"));
  let posX = -(modW * curMod + gap * curMod);
  gsap.to($(el), { duration: 1.25, x: posX, ease: "elastic.out(1.4,2)" });
}

function updateSlideNav(el) {
  let nav;
  if (el.hasClass("has-roadmap")) {
    nav = el.find(".slide-arrows");
  } else {
    nav = el.parents("section").find(".slide-arrows");
  }

  let totMods = el.data("total");
  let curMod = Number(el.data("cur"));
  nav.find(".slide-arrow").removeClass("off");
  nav.find(".next").find("img").removeClass("arrow-bump");

  // at start
  if (curMod == 0) {
    nav.find(".back").addClass("off");
    nav.find(".next").find("img").addClass("arrow-bump");
  }

  // at end
  if (curMod == totMods - 1) {
    nav.find(".next").addClass("off");
  }
}

function updateModSliders(el) {
  $(el).each(function () {
    let maxW = Number($(this).data("max"));

    // slider active
    if (winW <= maxW && !$(this).hasClass("has-scroll")) {
      $(this).addClass("has-scroll");
      initMods($(this));
    }
    if (winW <= maxW) {
      updateModSize($(this));
    }

    // no slider
    if (winW > maxW && $(this).hasClass("has-scroll")) {
      $(this).removeClass("has-scroll");
      $(this).attr("style", "");
      $(this).siblings(".slide-arrows").find(".slide-arrow").unbind("click");
    }
  });
}

// adjust gap for screen size
function updateGap(el) {
  let gapData = el.data("gaps").split(",");
  let gap = 0;

  if (winW > 1024) {
    gap = gapData[0];
  } else if (winW <= 1024 && winW > 650) {
    gap = gapData[1];
  } else if (winW <= 650) {
    gap = gapData[2];
  }

  el.data("gap", gap);
  return gap;
}

// - COMPONENT: MODULE SWIPE

// let swW;
// let swCur;
// let totSwSlides;
// let draggableOn = false;
// let draggable;

// construct swipe component
function buildSwiper(el) {
  let id = el.attr("id");
  let swBoundX = Number(el.data("total")) * Number(el.data("modw")) - Number(el.data("modw"));

  Draggable.create("#" + id, {
    type: "x",
    inertia: true,
    zIndexBoost: false,
    edgeResistance: 0.65,
    allowNativeTouchScrolling: true,
    bounds: { minX: -swBoundX, maxX: 0, minY: 0, maxY: 0 },
    snap: {
      x: function (endValue) {
        let swGridW = Number($(this.target).data("modw")) + Number($(this.target).data("gap"));
        return Math.round(endValue / swGridW) * swGridW;
      },
    },
    onThrowComplete: function () {
      updateSwActive(el, this.x);
    },
    onDrag: function () {
      if ($(this.target).hasClass("slide-wrap")) {
        let dualEl = $(this.target).parents(".mod-slide").find(".header-year").find(".slide-wrap");
        gsap.set(dualEl, { x: this.x });
      }
    },
    onThrowUpdate: function () {
      if ($(this.target).hasClass("slide-wrap")) {
        let dualEl = $(this.target).parents(".mod-slide").find(".header-year").find(".slide-wrap");
        gsap.set(dualEl, { x: this.x });
      }
    },
  });

  // add class for draggable
  $("#" + id).addClass("init-drag drag-on");
}

// update swipe component with window resize
function updateSwipe(el) {
  let modW = Number(el.find(".module").outerWidth());
  el.data("modw", modW);
  let gap = Number(el.data("gap"));
  let totMods = el.find(".module").length;
  let totalModW = modW * totMods + gap * (totMods - 1);

  // update bounds with window resize
  let id = el.attr("id");
  let dragMax = el.data("swipe-max");

  // only check after draggable initiated
  if (el.hasClass("init-drag")) {
    let draggable = Draggable.get("#" + id);
    let swBoundX = totalModW - modW;
    draggable.applyBounds({ minX: -swBoundX, maxX: 0, minY: 0, maxY: 0 });

    // disable if beyond max
    if (winW > dragMax) {
      draggable.disable();
      el.removeClass("drag-on");
      el.attr("style", "");
      el.data("cur", 0);
    }
    if (winW <= dragMax && !el.hasClass("drag-on")) {
      draggable.enable();
      el.addClass("drag-on");
    }
  }
}

// update current slider once swipe complete
function updateSwActive(el, endX) {
  let modW = Number(el.find(".module").outerWidth());
  let gap = Number(el.data("gap"));

  let swActive = Math.round(-endX / (modW + gap));
  el.data("cur", swActive);
  updateSlideNav(el);

  // if roadmap, update current slide
  if (el.hasClass("rm")) {
    let parent = el.parents(".has-roadmap");
    parent.data("cur", swActive);
  }
}

// init swipe modules
$(".has-swipe").each(function (i) {
  $(this).attr("id", "swipe" + i);
  updateSwipe($(this));
  buildSwiper($(this));
});

// - COMPONENT: ROADMAP

let rmSp = 1.25;
let rmEaseIn = "power3.inOut";
let rmEaseOut = "elastic.out(1,2)";
let rmShapeStops = [0, -700, -1400, -2000];
let rmShapeNum = 0;
let rmType = "dsk";

function initRoadmap(el) {
  // reset to first
  el.data("cur", 0);
  el.find(".slide-arrows").find(".slide-arrow.back").addClass("off");
  el.find(".slide-arrows").find(".slide-arrow.next").removeClass("off");

  // add mouse events: arrows
  el.find(".slide-arrows")
    .find(".slide-arrow")
    .bind("click", function () {
      let dir = 1;
      let el = $(this).parents(".has-roadmap");

      if ($(this).hasClass("back")) {
        dir = -1;
      }

      changeRoadmap(el, dir, "arr");
      return false;
    });
}

function changeRoadmap(el, num, type) {
  // get current module data
  let curMod = Number(el.data("cur"));
  let curYear = Number(el.data("yearnum"));
  let lastMod = curMod;
  //let lastYear = curYear;
  let dir = num;

  // update data set
  curMod += dir;
  el.data("cur", curMod);
  el.data("yearnum", curYear);

  // update arrows at start/end
  //updateRMArrows(el);
  updateSlideNav(el);

  // desktop ***

  if (winW > 1024) {
    // slide off old
    let lastMods = $(el)
      .find(".mod-slide")
      .find('.rm-year[data-num="' + lastMod + '"], .rm-slide[data-num="' + lastMod + '"]');
    gsap.to(lastMods, {
      duration: rmSp,
      xPercent: -100 * dir,
      ease: rmEaseIn,
      onComplete: function () {
        lastMods.hide();
      },
    });

    // slide on new
    let nextMods = $(el)
      .find(".mod-slide")
      .find('.rm-year[data-num="' + curMod + '"], .rm-slide[data-num="' + curMod + '"]');
    gsap.fromTo(
      nextMods,
      { xPercent: 100 * dir, display: "flex" },
      { duration: rmSp, delay: rmSp / 2, xPercent: 0, ease: rmEaseOut }
    );
  }

  // mobile ***

  if (winW <= 1024) {
    let gap = 12;
    let modW = winW - 50;
    let posX = -(modW * curMod + gap * curMod);
    gsap.to($(el).find(".slide-wrap"), { duration: 1, x: posX, ease: baseInOut });
  }

  // adjust background position
  rmShapeNum += dir;
  // at start
  if (rmShapeNum < 0) {
    rmShapeNum = rmShapeStops.length - 2;
    gsap.set($(el).find(".background"), { x: "-50%" });
  }
  // at end
  if (rmShapeNum > rmShapeStops.length - 1) {
    rmShapeNum = 1;
    gsap.set($(el).find(".background"), { x: 0 });
  }

  // move background shapes
  let rmBgPos = rmShapeStops[rmShapeNum];
  let rmBgSp = 1.4;
  if (winW <= 1024) {
    rmBgPos = rmBgPos / 2;
    rmBgSp = 1;
  }
  gsap.killTweensOf($(el).find(".background"));
  gsap.to($(el).find(".background"), { duration: rmBgSp, x: rmBgPos, ease: baseInOut });
}

function updateRoadmap(el) {
  // change from mobile to desktop
  if (winW > 1024 && rmType == "mob") {
    rmType = "dsk";
    resetRoadmap(el);
  }

  // change from desktop to mobile
  if (winW <= 1024) {
    if (rmType == "dsk") {
      rmType = "mob";
    }

    let rmT = el.find(".rm-slide").length;
    let gap = 12;
    let rmModW = winW - 50;
    let rmW = rmT * rmModW + (rmT - 1) * gap;

    // size each slide to fit width
    gsap.set(el.find(".rm-slide, .rm-year"), { width: rmModW });

    // setup for full width container
    gsap.set(el.find(".slide-wrap"), { width: rmW, x: 0 });

    // update for start
    let curMod = 0;
    el.data("cur", curMod);
    //updateRMArrows(el);
    updateSlideNav(el);
  }
}

// function updateRMArrows(el){
//     let curMod = Number(el.data('cur'));
//     let arrs = el.find('.slide-arrows');
//     let totMods = el.data('total');
//     arrs.find('.slide-arrow').removeClass('off');
//     arrs.find('.next').find('img').removeClass('arrow-bump');

//     if(curMod == 0){
//         arrs.find('.back').addClass('off');
//         arrs.find('.next').find('img').addClass('arrow-bump');
//     }
//     if(curMod == totMods-1){arrs.find('.next').addClass('off');}
// }

function resetRoadmap(el) {
  el.find(".slide-wrap, .rm-slide, .rm-year, .background").attr("style", "");
  rmShapeNum = 0;
  gsap.set($(el).find(".background"), { x: 0 });
}

$(".has-roadmap").each(function () {
  initRoadmap($(this));
});

// - GLOBAL: FORM SUBMIT

var formSent = false;
var formURL = $("#contactForm").attr("action");

$(".global-form").submit(function () {
  if (validateForm($(this))) {
    sendForm($(this));
  }
  return false;
});

function sendForm(formObj) {
  // animation actions
  let formURL = formObj.attr("action");
  var formData = formObj.serialize();

  $.ajax({
    url: formURL,
    type: "POST",
    data: formData,

    success: function (result) {
      //console.log('sent '+result)
      formSent = true;

      gsap.to($(formObj).parents(".has-form").find(".thank-you"), { duration: 0.5, autoAlpha: 1 });

      // reset form
      $(formObj).addClass("sent");
      $(formObj).trigger("reset");
      $(formObj).removeClass("sending");
    },
    error: function (result) {
      //console.log('error '+result)

      gsap.to($(formObj).parents(".has-form").find(".thank-you"), { duration: 0.5, autoAlpha: 1 });

      // reset form
      $(formObj).addClass("sent");
      $(formObj).trigger("reset");
      $(formObj).removeClass("sending");
      //console.log(result)
    },
  });
}

function validateForm(formObj) {
  var vNum = 0;
  $(formObj)
    .find('[data-type="req"]')
    .each(function () {
      if ($(this).val() == "") {
        vNum++;
        $(this).parents(".field-wrap").addClass("error");
      }
    });
  if (vNum == 0) {
    return true;
  } else {
    return false;
  }
}

// reset error on click

$('[data-type="req"]').on("focus click", function () {
  if ($(this).parents(".field-wrap").hasClass("error")) {
    $(this).parents(".field-wrap").removeClass("error");
  }
});

// remove thank you on focus

$(".global-form input").on("focus click", function () {
  gsap.to($(this).parents(".has-form").find(".thank-you"), { duration: 0.25, autoAlpha: 0 });
  $(this).parents(".global-form").removeClass("sent");
});

// - GLOBAL: OVERLAYS

var overlayOpen = false;

$(".overlay-btn").click(function () {
  // get id
  let id = $(this).data("id");
  $(".overlay-screen").hide();
  $('.overlay-screen[data-id="' + id + '"]').show();

  gsap.to($(".overlay"), { duration: 0.5, opacity: 1, display: "block" });
  freezePage();
  overlayOpen = true;
  return false;
});

$(".close-btn, .overlay-wrap").click(function () {
  gsap.to(".overlay", {
    duration: 0.5,
    opacity: 0,
    display: "none",
    onComplete: function () {
      overlayOpen = false;
      unfreezePage();
    },
  });
  return false;
});

$(".overlay-modal").click(function (e) {
  e.stopPropagation();
});

// - SCROLLING: STICKY ELEMENTS

let sT;
let stickyOpen = false;
const cta = $("#globalHeader").find(".cta-header").find(".cta-btn");
/* const ctaLen = cta.find('.txt').text().length;
const ctaRat = 8.5;
const ctaBaseW = 91;
const ctaStartDskW = (ctaLen*ctaRat) + ctaBaseW; */

$(window).on("scrollstart", function () {
  scroll_interval = setInterval(function () {
    sT = $(this).scrollTop();

    // set sticky bar
    setSticky();
  }, 10);
});

$(window).on("scrollstop", function () {
  if (scroll_interval) {
    clearInterval(scroll_interval);
  }
});

function setSticky() {
  // drop sticky bar on scroll up
  if (sT > 0) {
    if (!stickyOpen) {
      $("#globalMenu").addClass("sticky");
      addSticky();
      stickyOpen = true;
    }
  } else {
    if (stickyOpen) {
      $("#globalMenu").removeClass("sticky");
      removeSticky();
      stickyOpen = false;
    }
  }

  lastSt = sT;
}

function addSticky() {
  // remove top links
  gsap.to($("#globalHeader").find(".main-menu ul.top").children("li"), {
    duration: 0.5,
    stagger: { amount: 0.1, from: "end" },
    opacity: 0,
    y: -100,
    ease: baseInOut,
  });

  // morph cta button
  //let tmpW = cta.outerWidth();
  //let tmpH = cta.outerHeight();
  //ctaStartDskW = tmpW;
  //gsap.set(cta, {width: ctaStartDskW, height: tmpH})
  //cta.addClass('disabled');

  // animate morph
  gsap.to($(cta), { duration: 0.2, opacity: 0, display: "none", ease: "none" });
  //gsap.to(cta, {duration: .5, width:menuStartDskW, opacity:0, ease:baseInOut})
}

function removeSticky() {
  // bring back top links
  gsap.to($("#globalHeader").find(".main-menu ul.top").children("li"), {
    duration: 0.5,
    stagger: { amount: 0.2 },
    opacity: 1,
    y: 0,
    ease: baseOut,
  });

  // animate morph
  gsap.to($(cta), {
    delay: 0.2,
    startAt: { display: "inline-flex" },
    duration: 0.2,
    opacity: 1,
    ease: "none",
  });

  // close menu if open
  if (menuOpen) {
    closeSideMenu();
    menuOpen = false;
  }
}

// - SCROLLING: SCROLL EVENTS

function initScrollEvents() {
  // global: sections with animations
  $(".has-anim").each(function () {
    var currentElem = "#" + $(this).attr("id");
    var added = 0;
    var elemOffset = 0;
    var triggerStart = "top bottom";
    var triggerEnd = "bottom top";

    if ($(this).attr("data-added")) {
      added = $(this).attr("data-added");
      var triggerEnd = "bottom+=" + added + "px top";
    }
    if ($(this).attr("data-offset")) {
      elemOffset = -$(this).attr("data-offset");
      var triggerStart = "top+=" + elemOffset + "px bottom";
    }
    if ($(this).attr("data-trigger")) {
      triggerStart = $(this).attr("data-trigger");
    }

    ScrollTrigger.create({
      trigger: currentElem,
      start: triggerStart,
      end: "bottom top",
      onEnter: function () {
        $(currentElem).addClass("on");
        activateAnim(currentElem);
      },
      onEnterBack: function () {
        $(currentElem).addClass("on");
        activateAnim(currentElem);
      },
      onLeave: function () {
        $(currentElem).removeClass("on");
        resetAnim(currentElem);
      },
      onLeaveBack: function () {
        $(currentElem).removeClass("on");
        resetAnim(currentElem);
      },
    });
  });

  // global: tickers
  $(".has-ticker").each(function () {
    let currentElem = "#" + $(this).attr("id");
    let triggerStart = "top bottom+=150";

    ScrollTrigger.create({
      trigger: currentElem,
      start: triggerStart,
      end: "bottom top",
      onEnter: function () {
        startTicker(currentElem);
      },
      onEnterBack: function () {
        $(currentElem).addClass("on");
        startTicker(currentElem);
      },
      onLeave: function () {
        $(currentElem).removeClass("on");
        stopTicker(currentElem);
      },
      onLeaveBack: function () {
        $(currentElem).removeClass("on");
        stopTicker(currentElem);
      },
    });
  });

  // global: section open animation
  $(".has-open").each(function () {
    let currentElem = "#" + $(this).attr("id");
    let st = $(this).data("start");
    if (st == undefined) {
      st = "50%";
    }
    let triggerStart = "top " + st;

    ScrollTrigger.create({
      trigger: currentElem,
      start: triggerStart,
      end: "bottom top",
      onEnter: function () {
        if (!$(currentElem).hasClass("played")) {
          openHeader(currentElem);
          openAnim(currentElem);
          $(currentElem).addClass("played");
        }
      },
      onEnterBack: function () {
        if (!$(currentElem).hasClass("played")) {
          openHeader(currentElem);
          openAnim(currentElem);
          $(currentElem).addClass("played");
        }
      },
    });
  });

  // blog: article share
  if ($("#sharing-module").length > 0) {
    let scrollPin = false;
    ScrollTrigger.create({
      trigger: ".start-pin",
      endTrigger: ".end-pin",
      start: "top top",
      end: "bottom bottom",
      pin: "#sharing-module",
      pinSpacing: false,
      onEnterBack: function () {
        scrollPin = true;
      },
      onLeave: function () {
        scrollPin = false;
      },
    });
  }

  // global: side subnav
  if ($("#side-module").length > 0) {
    let scrollPin = false;
    ScrollTrigger.create({
      trigger: ".start-pin",
      endTrigger: ".end-pin",
      start: "top top",
      end: "bottom bottom",
      pin: "#side-module",
      pinSpacing: false,
      onEnterBack: function () {
        scrollPin = true;
      },
      onLeave: function () {
        scrollPin = false;
      },
    });
  }
}

// - PAGE: HOME

// prep for intro

let home_intro = gsap.timeline().pause();

if (isHome) {
  // setup lines
  gsap.set($("#home-hero").find(".path-draw"), { drawSVG: "0% 0%" });

  // setup shapes
  gsap.set($("#home-hero").find(".background.top").find(".bgshape"), { scaleX: 0.5, scaleY: 0.5 });
  gsap.set($("#home-hero").find(".background.top").find(".bgshape>img"), { opacity: 0 });

  // shape groups
  gsap.set($("#home-hero").find('.shape-group[data-num="1"]').find(".shape-move"), {
    x: -250,
    y: 500,
  });
  gsap.set($("#home-hero").find('.shape-group[data-num="2"]').find(".shape-move"), { x: -600 });
  gsap.set($("#home-hero").find('.shape-group[data-num="3"]').find(".shape-move"), { y: -350 });
  gsap.set($("#home-hero").find('.shape-group[data-num="4"]').find(".shape-move"), { x: 600 });

  // individual shapes
  gsap.set($("#home-hero").find('.bgshape[data-num="2"]'), { y: 230 });
  gsap.set($("#home-hero").find('.bgshape[data-num="3"]'), { x: -760, y: 60 });
  gsap.set($("#home-hero").find('.bgshape[data-num="4"]'), { y: -380 });
  gsap.set($("#home-hero").find('.bgshape[data-num="6"]'), { y: -240 });
  gsap.set($("#home-hero").find('.bgshape[data-num="7"]'), { y: 200 });

  // create timeline for animation
  let shapeGrpSp = 2;
  let shapeSp = 1;
  let lineSp = 1.5;
  let shapeDel = 0.1;

  let shapeOrd = [1, 4, 2, 3];

  let shapeEase = "elastic.out(1.15,2)";
  let grpEase = "elastic.out(2,2)";
  let lineEase = "quad.inOut";

  $(shapeOrd).each(function (i) {
    // move shape groups
    home_intro.to(
      $("#home-hero")
        .find('.shape-group[data-num="' + shapeOrd[i] + '"]')
        .find(".shape-move"),
      { duration: shapeGrpSp, x: 0, y: 0, ease: grpEase },
      i * shapeDel
    );

    // top right
    if (i == 0) {
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="1"]>img'),
        { duration: 0.5, opacity: 1, ease: "none" },
        i * shapeDel
      );
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="1"]'),
        { duration: shapeSp, opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, ease: shapeEase },
        i * shapeDel
      );

      // line
      home_intro.to(
        $("#home-hero").find('.bgline[data-num="1"]').find(".path-draw"),
        { duration: lineSp, drawSVG: "0% 100%", ease: lineEase },
        i * shapeDel
      );
    }

    // left
    if (i == 1) {
      // shape
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="6"]>img, .bgshape[data-num="7"]>img'),
        { duration: 0.5, opacity: 1, ease: "none" },
        i * shapeDel
      );
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="6"], .bgshape[data-num="7"]'),
        { duration: shapeSp, opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, ease: shapeEase },
        i * shapeDel
      );

      // line
      home_intro.to(
        $("#home-hero").find('.bgline[data-num="5"]').find(".path-draw"),
        { duration: lineSp, startAt: { drawSVG: "100% 100%" }, drawSVG: "100% 0%", ease: lineEase },
        i * shapeDel
      );
    }

    // right
    if (i == 2) {
      // shape
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="2"]>img, .bgshape[data-num="4"]>img'),
        { duration: 0.5, opacity: 1, ease: "none" },
        i * shapeDel
      );
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="2"], .bgshape[data-num="4"]'),
        { duration: shapeSp, opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, ease: shapeEase },
        i * shapeDel
      );

      // extra
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="3"]>img'),
        { duration: 0.5, opacity: 1, ease: "none" },
        0.2 + i * shapeDel
      );
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="3"]'),
        { duration: shapeSp, opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, ease: shapeEase },
        0.2 + i * shapeDel
      );

      // line
      home_intro.to(
        $("#home-hero").find('.bgline[data-num="2"]').find(".path-draw"),
        {
          duration: lineSp + 0.2,
          startAt: { drawSVG: "100% 100%" },
          drawSVG: "100% 0%",
          ease: lineEase,
        },
        0.2 + i * shapeDel
      );
    }

    // bottom center
    if (i == 3) {
      // shape
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="5"]>img'),
        { duration: 0.5, opacity: 1, ease: "none" },
        i * shapeDel
      );
      home_intro.to(
        $("#home-hero").find('.bgshape[data-num="5"]'),
        { duration: shapeSp, opacity: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, ease: shapeEase },
        i * shapeDel
      );

      // line
      home_intro.to(
        $("#home-hero").find('.bgline[data-num="3"]').find(".path-draw"),
        {
          duration: lineSp - 0.3,
          startAt: { drawSVG: "100% 100%" },
          drawSVG: "100% 0%",
          ease: lineEase,
        },
        0.2 + i * shapeDel
      );
      home_intro.to(
        $("#home-hero").find('.bgline[data-num="4"]').find(".path-draw"),
        { duration: lineSp, drawSVG: "0% 100%", ease: "quad.inOut" },
        0.1 + i * shapeDel
      );
    }
  });
}

function homeIntro() {
  // bring on shapes
  setTimeout(function () {
    home_intro.play();
  }, 400);

  // bring on text
  setTimeout(function () {
    openHeader($("#home-hero"));
  }, 800);
}

// - PAGE: SPHINX

// faq accordion

$(".faq-question").find(".answer").height(0);
$(".faq-question")
  .find(".question")
  .click(function () {
    if (!$(this).parents(".faq-question").hasClass("open")) {
      resetfaqs($(this).parents(".faq-question"));
      $(this).parents(".faq-question").addClass("open");
      tmpH = $(this).parents(".faq-question").find(".answer>div").outerHeight();
      gsap.to($(this).parents(".faq-question").find(".answer"), {
        duration: 0.5,
        startAt: { height: 0 },
        height: tmpH,
        ease: "power3.inOut",
        onCompleteParams: [$(this).parents(".faq-question").find(".answer")],
        onComplete: function (t) {
          t.css("height", "");
        },
      });
    } else {
      $(this).parents(".faq-question").removeClass("open");
      $(this)
        .parents(".faq-question")
        .find(".answer")
        .css({ height: $(this).parents(".faq-question").find(".answer>div").outerHeight() });
      gsap.to($(this).parents(".faq-question").find(".answer"), {
        duration: 0.5,
        height: 0,
        ease: "power3.inOut",
      });
    }
  });

function resetfaqs(obj) {
  $(".faq-question").each(function () {
    if ($(this).hasClass("open") && $(this) != obj) {
      $(this).removeClass("open");
      $(this)
        .find(".answer")
        .css({ height: $(this).find(".answer>div").outerHeight() });
      gsap.to($(this).find(".answer"), { duration: 0.5, height: 0, ease: "power3.inOut" });
    }
  });
}

// - PAGE: BLOG

// - ANIMATION: ACTIVATION

/* function activateAnim(obj) {
    //console.log('-start '+obj);

    // hero
    if (obj == '#hero') {
        initHero();
    }
}

function resetAnim(obj) {
    //console.log('--stop '+obj);

    // hero
    if (obj == '#hero') {
        resetHero();
    }
} */

function openAnim(el) {
  // home buckets
  if ($(el).attr("id") == "home-solve") {
    openHomeBuckets(el);
  }

  // cta blocks
  if ($(el).hasClass("ctablock")) {
    openCtaBlocks(el);
  }

  // stats grid
  //if ($(el).hasClass('stats')) {openStatsGrid(el);}

  // home shm
  //if ($(el).attr('id') == 'shm-graph') {openHomeSHM(el);}

  // big headline
  if ($(el).hasClass("big-hl")) {
    openBigHeader(el);
  }
}

// - ANIMATION: GLOBAL

// split headline words
Splitting();

// reuse

gsap.set($(".h-open").find(".word"), { opacity: 0, y: -20 });
gsap.set($(".h-open.blk"), { opacity: 0 });

function openHeader(el) {
  let sDel = 0.5;
  let hDel = 0.25;

  $(el)
    .find(".h-open")
    .each(function (i) {
      if ($(this).data("splitting")) {
        gsap.to($(this).find(".word"), {
          duration: 1,
          delay: i * hDel,
          opacity: 1,
          y: 0,
          rotation: 0,
          stagger: { amount: 0.5 },
          ease: baseOut,
        });
      }
      if ($(this).hasClass("drop")) {
        gsap.to($(this).find(".word"), {
          duration: 1,
          delay: 0.4 + i * hDel,
          opacity: 1,
          y: 0,
          rotation: 0,
          stagger: { amount: 0.3 },
          ease: baseOut,
        });
      }
      if ($(this).hasClass("blk")) {
        if ($(this).hasClass("fast")) {
          sDel = 0;
        }
        gsap.to($(this), { duration: 0.3, delay: sDel + i * hDel, opacity: 1, ease: "none" });
      }
    });
}

// stats grid

// prep for open
$(".has-open.stats").each(function () {
  let el = $(this).find(".stat-item");
  gsap.set(el.find("h2"), { y: -130 });
  gsap.set(el.find("p"), { opacity: 0, y: 20 });
});

function openStatsGrid(el) {
  gsap.to($(el).find(".stat-item").find("h2"), {
    duration: 2,
    stagger: { amount: 0.85 },
    opacity: 1,
    y: 0,
    ease: bounceInOut,
  });
  gsap.to($(el).find(".stat-item").find("p"), {
    duration: 0.75,
    delay: 1,
    stagger: { amount: 0.85 },
    opacity: 1,
    y: 0,
    ease: baseOut,
  });
}

// bucket CTA blocks

// prep for open
$(".has-open.ctablock").each(function () {
  let el = $(this).find(".bucket-cta");
  gsap.set(el.find(".bucket-img"), { y: -200 });
  gsap.set(el.find("h2, .bot"), { opacity: 0 });
});

function openCtaBlocks(el) {
  let stag = 0.5;

  $(el)
    .find(".bucket-cta")
    .each(function (i) {
      gsap.fromTo(
        $(this).find("h2"),
        { y: -200 },
        { delay: i * stag, duration: 1, opacity: 1, y: 0, ease: bounceOutLt }
      );
      gsap.to($(this).find(".bucket-img"), {
        delay: i * stag + 0.2,
        duration: 1,
        y: 0,
        ease: bounceOut,
      });
      gsap.fromTo(
        $(this).find(".bot"),
        { y: 20 },
        { delay: i * stag + 0.3, duration: 0.75, opacity: 1, y: 0, ease: baseOut }
      );
    });
}

// big headline

// prep for open
$(".big-hl-wrap").each(function () {
  let el = $(this).find("svg");
  gsap.set(el.find("g"), { opacity: 0, x: 50, y: -50 });
  gsap.set(el.find("g.top"), { x: 0, y: -100 });
  gsap.set(el.find("g:last-child"), { x: 0, y: 10 });
});

function openBigHeader(el) {
  let trg = $(el).find(".big-hl-wrap").find("svg");
  gsap.to($(trg).find("g"), {
    duration: 1.25,
    stagger: { amount: 2 },
    opacity: 1,
    y: 0,
    x: 0,
    ease: bounceOut,
  });
}

// - ANIMATION: PARALLAX

const plax_els = {};

$(".plax-grp").each(function (i) {
  // build timeline for each section
  let startPos = $(this).data("plax-st");
  plax_els["el" + i] = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: startPos,
      end: "bottom top",
      scrub: true,
    },
  });

  // assign each moving element
  $(this)
    .find(".has-plax")
    .each(function () {
      let depth = $(this).data("depth");
      let amt = Number($(this).parents(".plax-grp").data("plax-mov"));
      plax_els["el" + i].to($(this), { y: amt * depth, ease: "none" }, 0);
    });
});

// - ANIMATION: PAGE CUSTOM

let curEl;

// HOME: intro buckets

// prep for open
if (winW > 768) {
  $("#home-buckets")
    .find(".bucket")
    .each(function (i) {
      let totW = $(this).parents(".buckets").outerWidth();
      let bW = Number($(this).outerWidth() * $(this).parents(".buckets").find(".bucket").length);
      let mar = Number((totW - bW) / 2);
      let stX = 0;

      // left card
      if (i == 0) {
        stX = $(this).outerWidth() + mar;
      }

      // right card
      if (i == 2) {
        stX = -($(this).outerWidth() + mar);
      }

      // set order and position
      $(this).css("z-index", 3 - i);
      gsap.set($(this), { x: stX, opacity: 0 });
    });

  let bDel = 0.1;
  let dropSp = 0.75;
  let sprDel = 0.8;
  let bRots = [-4, 0, 4];
  let bXpos = [-150, 0, 150];
  let bYpos = [20, 0, 20];

  var bucket_tl = gsap.timeline().pause();
  $("#home-buckets")
    .find(".bucket")
    .each(function (i) {
      // fan into place
      bucket_tl.to(
        $(this),
        {
          duration: 1.5,
          startAt: { y: 100 },
          opacity: 1,
          x: "+=" + bXpos[i],
          y: bYpos[i],
          rotation: bRots[i],
          ease: bounceOut,
        },
        i * bDel
      );

      // spread out
      bucket_tl.to(
        $(this),
        { duration: 1.5, x: 0, y: 0, rotation: 0, ease: "elastic.inOut(1.5,2)" },
        sprDel
      );

      // remove card bg
      bucket_tl.to(
        $(this).find(".card-wrap"),
        { duration: 0.75, backgroundColor: "transparent", ease: "none" },
        sprDel + 1
      );
    });
}

function openHomeBuckets(el) {
  if (winW > 768) {
    setTimeout(function () {
      bucket_tl.play();
    }, 600);
  }
}

// HOME: shm graph

// prep for open
/* curEl = $('#home-shm');
$(curEl).find('.shm-graph-col').each(function(){
    gsap.set($(this).find('.bar-fill img'), {y:'100%'})
    gsap.set($(this).find('.shm-pct, .shm-key'), {opacity:'0'})
    gsap.set($(this), {opacity:0})
})
gsap.set($(curEl).find('.shm-shad'), {y:20, opacity:0, 'clipPath':'inset(0 100% 0 0)'})
 */
function openHomeSHM(el) {
  let stag = 0.8;
  let stagSh = 0.2;

  // drop graph bar
  // desktop
  if (winW > 550) {
    gsap.to($(el).find(".shm-graph-col"), {
      duration: 1.5,
      startAt: { y: -200 },
      y: 0,
      stagger: { amount: stag },
      opacity: 1,
      ease: bounceOutLt,
    });
  } else {
    gsap.to($(el).find(".shm-graph-col"), {
      duration: 1.5,
      startAt: { x: 200 },
      x: 0,
      stagger: { amount: stag },
      opacity: 1,
      ease: bounceOutLt,
    });
  }

  // grow graph bar
  gsap.to($(el).find(".shm-graph-col").find(".bar-fill img"), {
    duration: 0.75,
    y: 0,
    delay: 0.35,
    stagger: { amount: stag },
    ease: baseOut,
  });

  // show key text
  gsap.to($(el).find(".shm-graph-col").find(".shm-key"), {
    duration: 0.5,
    delay: 0.5,
    stagger: { amount: stag },
    opacity: 1,
    ease: "none",
  });

  // show percent text
  gsap.fromTo(
    $(el).find(".shm-graph-col").find(".shm-pct"),
    { scaleX: 0.5, scaleY: 0.5 },
    {
      duration: 0.75,
      delay: 0.45,
      stagger: { amount: stag },
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      ease: bounceOut,
    }
  );

  // show shadow
  gsap.to($(el).find(".shm-shad"), {
    delay: 0.5,
    duration: 0.75,
    y: 0,
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    ease: "none",
  });
}
