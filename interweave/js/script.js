//서브메뉴
$(function(){
  $('.gnb li').mouseenter(function(){  // gnb li에 마우스를 올리면
    $(this).children('.submenu').addClass('on'); // submenu에 on 클래스 추가
  });

  $('.gnb li').mouseleave(function(){ // gnb li에서 마우스를 빼면 
    $(this).children('.submenu').removeClass('on'); //submenu의 on 클래스 제거
  });
});

//검색창
  const searchBtn = document.querySelector('.search_ico');
  const fieldset = document.querySelector('#search');

  searchBtn.addEventListener('click', function(e){
    e.preventDefault(); // 버튼 submit 방지
    fieldset.classList.toggle('active');
  });


//공간소개
document.addEventListener('DOMContentLoaded', () => {
    // floor 영역
    const floors = document.querySelectorAll('#space .floor');

    // 배경 이미지 (img_wrap 안의 img)
    const bgImg = document.querySelector('#space .img_wrap img');

    floors.forEach((floor, index) => {
        floor.addEventListener('mouseenter', () => {

            // floor active 초기화
            floors.forEach(f => f.classList.remove('active'));

            // 현재 floor 활성화
            floor.classList.add('active');

            // index → floor 번호 (1부터 시작)
            const floorNum = index + 1;

            // 네이밍 규칙에 맞춰 이미지 경로 생성
            const newSrc = `images/main/floor${floorNum}_bg.jpg`;

            // 배경 이미지 교체
            bgImg.src = newSrc;
        });
    });
});

//tab
function openBoard(evt, boardName) {
	  var i, x, tablinks;
	  x = document.getElementsByClassName("board");
	  for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	  }
	  tablinks = document.getElementsByClassName("tablink");
	  for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	  }
	  document.getElementById(boardName).style.display = "block";
	  evt.currentTarget.className += " active";
}

//------------------------- 서브 ---------------------------------
//brand story - 인트로 타이핑 
const textElements = gsap.utils.toArray('#story01 .typing:first-child');
textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 30%',
      end: 'center 100%',
      scrub: 1,
    },
  });
});

const textElements2 = gsap.utils.toArray('#story01 .typing:nth-child(2)');
textElements2.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 20%',
      end: 'center 100%',
      scrub: 1,
    },
  });
});

//brand story - 사진 제어
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".img_frame",
  { width: 1000 },
  {
    width: 1200,
    ease: "none",
    scrollTrigger: {
      trigger: "#story01 .sub_top",
      start: "top top",
      end: "bottom center",
      scrub: true
    }
  }
);

//brand story line scrolled
document.addEventListener("DOMContentLoaded", function () {
  const line = document.querySelector('.tit_box .line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        line.classList.add('line_scrolled');
      } else {
        // 화면에서 사라지면 다시 애니메이션 가능하게 클래스 제거
        line.classList.remove('line_scrolled');
      }
    });
  }, { threshold: 0.5 });

  observer.observe(line);
});


// -------------------------------------------------------------------------------------
//cafe - 탭
function openTab(tabName) {
        document.querySelectorAll('.tab, .tabs').forEach(function(el) {
            el.classList.remove('on');
        });
        document.getElementById(tabName).classList.add('on');
        document.querySelector('.tabs[onclick="openTab(\'' + tabName + '\')"]').classList.add('on');
    }

