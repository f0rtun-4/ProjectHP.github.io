
$(document).scroll(function () {
  var scroll = $(window).scrollTop();

  var LeftBox1 = -210 + (scroll * 0.8);
  var LeftBox2 = -500 + (scroll * 0.6);

  //center letter
  var TopBox3 = -700 + (scroll * 0.5);
  var LeftBox3 = -700 + (scroll * 0.5);
  var BottomBox3 = -700 + (scroll * 0.5);
  var RightBox3 = -700 + (scroll * 0.5);
  

  if (LeftBox1 < 10) {
      $('.letter').css({ left: LeftBox1 + "px"});
  }

  if (LeftBox2 < 10) {
    $('.letter2').css({left: LeftBox2 + "px"});
  }

  //center letter 

  if (TopBox3 < 0) {
    
    $('.top').css({top: TopBox3 + "px"});
  }

  if (BottomBox3 < 0) {
    $('.bottom').css({bottom: BottomBox3 + "px"});
  } 

  if (RightBox3 < 5) {
    $('.right').css({right: RightBox3 + "px"});
  }

  if (LeftBox3 < 5) {
    $('.left').css({left: LeftBox3 + "px"});
  }
});

//countdown 

const countdown = () => {
  // Specify the date and time we are counting down to.
  const countDate = new Date("Dec 26, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);

  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};

// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);

// jquery script

const SectionOneHide = document.querySelector(".section-1")
const SectionTwoHide = document.querySelector(".section-2")
const show = document.querySelector(".container-2");

function reveal() {
  SectionOneHide.style.display = "none"
  SectionTwoHide.style.display = "none"
  show.style.display = "block"
}
