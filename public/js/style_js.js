$(function () {
  var $firstMenu = $('nav > .main_nav > .nav_title '),
    $header = $('.header_bottom');
  $nav = $('.main_nav li .nav_sub')

  $firstMenu.mouseenter(function () {
      $header.stop().animate({
        height: '250px'
      });
      $nav.stop().slideDown(300);
    })
    .mouseleave(function () {
      $header.stop().animate({
        height: '60px'
      });
      $nav.hide();
    });

});


var scrollnav = document.getElementsByClassName("m_scroll_nav");
var boxshadow = document.getElementsByClassName("header")

window.onscroll = function sticky() {
  if (window.pageYOffset > scrollnav[0].offsetTop) {
    scrollnav[0].classList.add("snav");
  } else {
    scrollnav[0].classList.remove("snav");
  }
}

$(function () {
  var $chat = $('.chat'),
    $chatbox = $('.chatbox'),
    $chatc = $('.chat_c');

  $chat.on("click", function () {
    $chatbox.fadeIn();
    $chat.hide();

  })
  $chatc.on("click", function () {
    $chatbox.fadeOut();
    $chat.show();
  })
});



//메인1 스와이퍼
var swiper1 = new Swiper(".mainswiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }

});

var labswiper = new Swiper(".labswiper", {

  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    720: { //640 이상일 경우
      slidesPerView: 3, //레이아웃 2열
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 5,
      spaceBetween: 40,
    }
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//여행상품 상단 이미지 탭
$(".tripbg").hide();
$(".travel_con").each(function () {
  $(this).children(".triptab li:first").addClass("active"); //Activate first tab
  $(this).children(".tripbg:first").first().show();
});
$(".triptab li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active");
  $(this).parent().parent().parent().parent().find(".tripbg").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
});



//여행후기 탭 
$(".t_content").hide();
$(".tab_container").each(function () {
  $(this).children(".tabs li:first").addClass("active"); //Activate first tab
  $(this).children(".t_content:first").first().show();
});
$(".tabs li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active");
  $(this).parent().parent().parent().parent().find(".t_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
});



//계절상품 더보기

$(".tab_content").hide();
$(".ttab_container").each(function () {
  $(this).children(".ttabs li:first").addClass("active"); //Activate first tab
  $(this).children(".tab_content:first").first().show();
});
$(".ttabs li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active");
  $(this).parent().parent().parent().parent().find(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
});

//호텔 탭
$(".h_content").hide();
$(".hotel_container").each(function () {
  $(this).children(".htabs ul li:first").addClass("active"); //Activate first tab
  $(this).children(".h_content:first").first().show();
});
$(".htabs li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active");
  $(this).parent().parent().parent().parent().find(".h_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();

});
//chat 탭


$(".c_con").hide();
$(".ctabs li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active");
  $(this).parent().parent().parent().parent().parent().find(".c_con").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
});
$(".back").click(function () {
  $(this).parent().fadeOut();
})


$(".cc_con").hide();
$(".ctab_con").each(function () {
  $(this).children(".cctabs li:first").addClass("active"); //Activate first tab
  $(this).children(".chome").first().show();
});

$(".cctabs li a").click(function () {
  $(this).parent().siblings("li").removeClass("active");
  $(this).parent().addClass("active");
  $(this).parent().parent().parent().parent().parent().find(".cc_con").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
});
$(".back").click(function () {
  $(this).parent().fadeOut();
})




//여행상품 상세보기 
$(function (global, $) {

  var $menu = $('.sub_tabs li'),
    $contents = $('.time_wrap'),
    $doc = $('html, body');
  $(function love() {
    $menu.on('click', 'a', function (e) {
      var $target = $(this).parent(),
        idx = $target.index(),
        section = $contents.eq(idx),
        offsetTop = section.offset().top;
      if ($(window).width() > 720) {
        $doc.stop()
          .animate({
            scrollTop: offsetTop - 260
          }, 800);
      } else {
        $doc.stop()
          .animate({
            scrollTop: offsetTop - 140
          }, 800);
      }
    })
    return false;
  });
  $(window).onload = function () {
    love();
  }
  $(window).resize = function () {
    love();
  }

  $(window).scroll(function () {
    var scltop = $(window).scrollTop();
    $.each($contents, function (idx, item) {
      var $target = $contents.eq(idx),
        i = $target.index(),
        targetTop = $target.offset().top;

      if (targetTop - 290 <= scltop) {
        $menu.removeClass('on');
        $menu.eq(idx).addClass('on');
      }
      if (!(200 <= scltop)) {
        $menu.removeClass('on');
      }
    })

  });

  var btnTop = $('.btn-top');
  btnTop.on('click', 'a', function (e) {
    e.preventDefault();
    $doc.stop()
      .animate({
        scrollTop: 0
      }, 800)
  });

}(window, window.jQuery));




$(".trip_btn_more").click(function () {
  $(this).parent().parent().parent().parent().parent().parent().parent().find(".tcon").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn(function () {

  });
})

//여행상품 더보기 자바
$(function () {
  $(".showtrip").slice(0, 3).show();
  $(".btn_open").click(function (e) {
    e.preventDefault();
    $(".showtrip:hidden").slice(0, 4).slideDown();
    if ($(".showtrip1:hidden").length == 0) {
      $('.btn_open').hide();
      $(".showtrip1:visible").slice(2, 4).slideUp();
      $('.btn_open1').css('display', 'block');
    } else {
      $('.btn_open').hide();
    }
  });
});

$(function () {
  $(".showtrip1").slice(0, 2).show();
  $(".btn_open1").click(function (e) {
    e.preventDefault();
    $(".showtrip1:hidden").slice(0, 2).slideDown();
    if ($(".showtrip:hidden").length == 0) {
      $('.btn_open1').hide();
      $(".showtrip:visible").slice(3, 7).slideUp();
      $('.btn_open').css('display', 'block');
    } else {
      $('.btn_open1').hide();
    }
  });
});

//가격더하기

$(document).ready(function () {
  // Set eBook input state to checked so we can access its value
  $("#ebook-radio").attr("checked", "checked");

  // hide order summary line items
  $("#li-audiobook").hide();
  $("#li-bump-offer").hide();

  // Set element variables
  var $radioOptionContainer = $(".radio-option-container");
  var $radioOption = $(".radio-option");
  var $ebookRadioContainer = $("#ebook-radio-container");
  var $ebookRadio = $("#ebook-radio");
  // const $ebookRadio = $("#pid-3727024-0");
  var $audiobookRadio = $("#audiobook-radio");
  // const $audiobookRadio = $("#pid-3728625-0");
  var $checkboxOffer = $("#bump-offer");
  var $btnBumpOffer = $("#aadtomyOrder");
  var $audiobookLineItem = $("#li-audiobook");
  var $bumpOfferLineItem = $("#li-bump-offer");
  var $subtotalValue = $("#subtotalValue");
  var $totalValue = $("#totalValue");

  // give active radio option a green border
  $radioOption.change(function () {
    $radioOptionContainer.removeClass("active");

    if ($(this).prop("checked", true)) {
      $(this).parent().addClass("active");
    } else {
      $radioOptionContainer.removeClass("active");
    }
  });

  // calculate totals
  function calculateTotals() {
    let totalAmount = parseFloat(1790.00);
    var audiobookPrice = parseFloat(1455.00);
    var bumpOfferPrice = parseFloat(45);

    if ($audiobookRadio.is(":checked")) {
      totalAmount = parseFloat(3245.00);
      console.log("Total: " + totalAmount);
      $subtotalValue.html("$" + totalAmount);
      $totalValue.html("$" + totalAmount);
    } else {
      totalAmount = +totalAmount + -9.97;
    }

    if (
      $ebookRadio.is(":checked") ||
      ($ebookRadio.is(":checked") && !$checkboxOffer.is(":checked"))
    ) {
      totalAmount = "1790";
      $("#subtotalValue, #totalValue").html("$" + totalAmount);
    } else {
      totalAmount = +totalAmount;
    }

    if ($checkboxOffer.is(":checked")) {
      totalAmount = parseFloat(totalAmount) + parseFloat(45);
      $("#subtotalValue, #totalValue").html("$" + totalAmount);
    }
  }

  $ebookRadio.click(function () {
    if ($(this).is(":checked")) {
      $audiobookLineItem.hide();
    } else {
      $audiobookLineItem.show();
    }

    calculateTotals();
  });

  $audiobookRadio.click(function () {
    if ($(this).is(":checked")) {
      $audiobookLineItem.show();
    } else {
      $audiobookLineItem.hide();
    }

    calculateTotals();
  });

  $checkboxOffer.click(function () {
    if ($(this).is(":checked")) {
      $bumpOfferLineItem.show();
      $btnBumpOffer.trigger("change");
    } else {
      $bumpOfferLineItem.hide();
    }

    calculateTotals();
  });

  $btnBumpOffer.click(function () {
    $checkboxOffer.trigger("click");
  });

  $checkboxOffer.on("change", function () {
    if (!$checkboxOffer.checked) {
      $checkboxOffer.attr("checked", "checked");
    } else {
      $checkboxOffer.attr("checked", false);
    }
  });

  $btnBumpOffer.on("change", function () {
    if (!$btnBumpOffer.text == "Added To Your Order") {
      $btnBumpOffer.text = "Added To Your Order";
    } else {
      $btnBumpOffer.text = "Yes! Add To My Order";
    }
  });
});


//qna아코디언

$(document).on('click', '.qna .qtitle', function () {
  var $this = $(this),
    $item = $this.parent().next('.ans');
  $item.toggleClass('in').siblings().removeClass('in');;
});


//모바일 메뉴

$(document).ready(function () {
  mobile_menu();
});

function mobile_menu() {
  /* 변수 선언 */
  var $menu = null;
  var $left_gnb = null; // 영역 전체
  var $depth1_wrap = null;
  var $depth1 = null;
  var $depth1_btn = null;

  /* 시작 함수 */
  function start() {
    init();
    init_event();
  }
  /* 변수 초기화 함수 */
  function init() {
    $menu = $('.menu');
    $left_gnb = $('.left_gnbWrap'); // 영역 전체
    $depth1_wrap = $('.left_gnb>li');
    $depth1 = $depth1_wrap.children('ul');
    $depth1_btn = $depth1_wrap.children('a');
  }
  /* 이벤트 함수 */
  function init_event() {

    /* 모바일 메뉴 버튼 클릭했을때 모바일 메뉴영역 나오게 하기 */
    $menu.click(function (event) {
      event.preventDefault();
      $left_gnb.addClass('on');
    });

    /* x버튼 눌렀을때 모바일 메뉴 닫기 */
    $('.mclose').click(function (event) {
      event.preventDefault();

      $left_gnb.removeClass('on');

      // x버튼 누르면 시간차 약간두고 소메뉴 닫히게 하기
      setTimeout(function () {
        $depth1_btn.removeClass('on');
        $depth1.slideUp();
      }, 300)
    });

    /* depth1의 각메뉴 클릭시 depth2 나오게 하기 */
    $depth1_btn.click(function (event) {
      event.preventDefault();
      var $this = $(this);
      var $this_ul = $this.siblings('ul');

      var check = $this.hasClass('on');
      if (check) {
        $this.removeClass('on');
        $this_ul.stop(true, true).slideUp();
      } else {
        $depth1_btn.removeClass('on');
        $depth1.stop().slideUp();
        $this.addClass('on');
        $this_ul.stop(true, true).slideDown();
      }
    });

    /* 디바이스 크기 변경시 모바일 메뉴영역 숨기기 */
    $(window).resize(function () {
      $left_gnb.removeClass('on');
    });
  }

  start(); // 시작 호출
}

//$(function(){
//  var $firstMenu = $('nav > .main_nav > li '),
//      $header = $('.header_bottom');
//      $headers = $('.nav_sub');
//      $mainNav = $('.main_nav');
//      $utillNav = $('.utill_nav');
//  
//  $firstMenu.mouseenter(function(){
//  $header.stop().animate({height:'220px'});
//  $headers.css('display','block');
//  $mainNav.css('align-items','flex-start');
//  $utillNav.css('align-items','flex-start');
//  })
//  
//  .mouseleave(function(){
//  $header.stop().animate({height:'60px'});
//  $headers.css('display','none');
//  $mainNav.css('align-items','center');
//  $utillNav.css('align-items','center');
//  });
//
//});



$(".mclick").click(function (e) {
  e.preventDefault();
  var thisNext = $(this).next(".msidelist");
  if (thisNext.css("display") == "block") {
    thisNext.hide();
  } else {
    $(this).parent().siblings().children(".msidelist").hide();
    thisNext.show();
  };
});






var btn = document.querySelectorAll("a.modal_info");

// All page modals
var modalss = document.querySelectorAll('.tmodal');

// Get the <span> element that closes the modal
var spanss = document.querySelectorAll('.close1');

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modalss = document.querySelector(e.target.getAttribute("href"));
    modalss.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spanss.length; i++) {
  spanss[i].onclick = function () {
    modalss.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalss) {
    modalss.style.display = "none";
  }
}



//여행상품 상세보기 스와이퍼
var tripswiper = new Swiper(".mySwipers", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var tripswiper2 = new Swiper(".mySwipers2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: tripswiper,
  },
});


//호텔상세정보 팝업 스와이퍼
var modalswiper = new Swiper(".modalswiper", {
  //rewind : true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




let SlideIndeX = 0;
ShowSlideS();

function ShowSlideS() {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  SlideIndeX++;
  if (SlideIndeX > slides.length) {
    SlideIndeX = 1
  }
  slides[SlideIndeX - 1].style.display = "block";
  setTimeout(ShowSlideS, 5000); // Change image every 2 seconds
}

function joinform_check() {
  var uid = document.getElementById("ws-user-id");
  var pwd = document.getElementById("ws-user-password");
  var repwd = document.getElementById("ws-user-repassword");
  var uname = document.getElementById("ws-user-name");
  var female = document.getElementById("female");
  var male = document.getElementById("male");
  var mobile = document.getElementById("mobile");
  var email_id = document.getElementById("ws-user-emailid");
  var agree = document.getElementById("agree");

  if (uid.value == "") {
    alert("아이디를 입력하세요.");
    uid.focus();
    return false;
  };

  if (pwd.value == "") {
    alert("비밀번호를 입력하세요.");
    pwd.focus();
    return false;
  };
  var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  if (!pwdCheck.test(pwd.value)) {
    alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
    pwd.focus();
    return false;
  };

  if (repwd.value !== pwd.value) {
    alert("비밀번호가 일치하지 않습니다..");
    repwd.focus();
    return false;
  };

  if (uname.value == "") {
    alert("이름을 입력하세요.");
    uname.focus();
    return false;
  };

  if (!female.checked && !male.checked) {
    alert("성별을 선택해 주세요.");
    female.focus();
    return false;
  }

  var reg = /^[0-9]+/g;

  if (!reg.test(mobile.value)) {
    alert("전화번호는 숫자만 입력할 수 있습니다.");
    mobile.focus();
    return false;
  }

  if (email_id.value == "") {
    alert("이메일 주소를 입력하세요.");
    email_id.focus();
    return false;
  }

  if (!agree.checked) {
    alert("약관 동의를 체크하세요.");
    agree.focus();
    return false;
  }


  document.join_form.submit();
}


function id_check() {

  window.open("", "", "width=600, height=200, left=200, top=100");
}


function change_email() {
  var email_add = document.getElementById("email_add");
  var email_sel = document.getElementById("email_sel");


  var idx = email_sel.options.selectedIndex;
  var val = email_sel.options[idx].value;

  email_add.value = val;
}


function search_address() {
  window.open("", "b", "width=600, height=300, left=200, top=100");
}