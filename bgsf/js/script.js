document.addEventListener('DOMContentLoaded', () => {
    time_table();
});

function time_table() {
    const swiper = new Swiper("#time-table .inner .ttSwiper", {
        loop: true, // 루프 모드 활성
        speed: 1000,
        
        // --- 모바일 기본 설정 (0px ~ 767px) ---
        slidesPerView: 1.5,      // 양옆 카드가 살짝 보이도록
        centeredSlides: true,   // 활성 슬라이드를 가운데로
        spaceBetween: 10,       // 카드 간격
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        // --- 화살표 버튼 연결 ---
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // --- 반응형 설정 (PC 환경) ---
        breakpoints: {
            768: {
                slidesPerView: 8,       // PC에선 8개 고정
                centeredSlides: false,  // 가운데 정렬 해제
                spaceBetween: 0,        // 간격 0 (디자인에 따라 조절)
                allowTouchMove: false,  // 드래그 금지
                slidesPerGroup: 0,
            },
        },

        // --- 이벤트 핸들러 ---
        on: {
            init: function () {
                applySlideStyles(this);
                handleAutoplayByScreen(this);
            },
            resize: function () {
                handleAutoplayByScreen(this);
            },
            // 슬라이드가 바뀔 때마다 z-index를 다시 계산하고 싶다면 아래 주석 해제
            /*
            slideChange: function () {
                applySlideStyles(this);
            }
            */
        }
    });

    /**
     * 1. 슬라이드 스타일 적용 함수
     * 배경색과 z-index(앞순서일수록 높게)를 설정합니다.
     */
    function applySlideStyles(swiper) {
        const colors = ['#efefef', '#FF64A3', '#fd9f46', '#31db6a'];
        const allSlides = swiper.slides; // 복제본 포함 전체 슬라이드

        allSlides.forEach((slide, index) => {
            // 배경색 적용 (.item 클래스가 있는 요소에 적용)
            const item = slide.querySelector('.item');
            if (item) {
                // 루프 모드에서도 색상 순서가 깨지지 않게 index 사용
                item.style.background = colors[index % colors.length];
            }

            // z-index 적용 (앞쪽 순서일수록 숫자를 크게)
            // 전체 개수에서 인덱스를 빼서 앞쪽이 더 높은 우선순위를 갖게 함
            slide.style.zIndex = allSlides.length - index;
            slide.style.position = 'relative';
        });
    }

    /**
     * 2. 화면 크기에 따른 자동재생 제어
     * PC에서는 고정시키고 모바일에서만 돌립니다.
     */
    function handleAutoplayByScreen(swiper) {
        if (window.innerWidth >= 768) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
    }

    /**
     * 3. 마우스 호버 시 멈춤 제어
     * .swiper-slide 전체에 대해 이벤트 리스너 등록
     */
    const slideWrapper = document.querySelector('#time-table .ttSwiper');
    if (slideWrapper) {
        slideWrapper.addEventListener('mouseenter', () => {
            // PC가 아닐 때만 작동하게 하려면 조건 추가 가능
            swiper.autoplay;
        });
        slideWrapper.addEventListener('mouseleave', () => {
            if (window.innerWidth < 768) {
                swiper.autoplay.start();
            }
        });
    }
}


// -------------------------------------------------------------------------------------
//타임테이블 - 탭
function openTab(tabName) {
        document.querySelectorAll('.tab, .tabs').forEach(function(el) {
            el.classList.remove('on');
        });
        document.getElementById(tabName).classList.add('on');
        document.querySelector('.tabs[onclick="openTab(\'' + tabName + '\')"]').classList.add('on');
    }

