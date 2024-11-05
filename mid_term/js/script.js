function loadChart1() {
  Highcharts.chart("container", {
    chart: {
      zooming: {
        type: "x",
      },
      backgroundColor: "transparent",
      spacingLeft: 0,
      spacingRight: 400,
      events: {
        load: function () {
          const chart = this;

          chart.renderer
            .text(
              "1년에 한 번이라도 읽었다",
              chart.plotWidth - 90,
              chart.plotTop + 120
            )
            .css({ color: "#00FF22", fontSize: "16px", fontWeight: "bold" })
            .add();

          chart.renderer
            .text("32.3", chart.plotWidth - 90, chart.plotTop + 190)
            .css({ color: "#00FF22", fontSize: "80px", fontWeight: "bold" })
            .add();

          chart.renderer
            .text("%", chart.plotWidth - -70, chart.plotTop + 190)
            .css({ color: "#00FF22", fontSize: "40px", fontWeight: "bold" })
            .add();
        },
      },
    },
    title: {
      text: " ",
      align: "left",
    },
    subtitle: {
      text: document.ontouchstart === undefined ? " " : " ",
      align: "left",
    },
    xAxis: {
      type: "datetime",
      gridLineColor: "#3B4641", // x축 그리드 라인 색상
      labels: {
        style: {
          color: "#EEEEEE", // x축 라벨 색상
        },
      },
      min: Date.UTC(1994, 0, 1),
    },
    yAxis: {
      visible: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        marker: {
          radius: 4,
          zIndex: 2,
          fillColor: "#20CD83",
          lineWidth: 0,
        },
        lineWidth: 2,
        color: "#20CD83",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "#20CD83"],
            [1, "#20CD8300"],
          ],
        },
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
      series: {
        zIndex: 1, // 그리드 라인보다 위에 표시되도록 zIndex 설정
      },
    },

    series: [
      {
        type: "area",
        name: "USD to EUR",
        data: [
          [Date.UTC(1994, 0, 1), 86.8],
          [Date.UTC(1995, 0, 1), 79.0],
          [Date.UTC(1996, 0, 1), 77.2],
          [Date.UTC(1999, 0, 1), 77.8],
          [Date.UTC(2002, 0, 1), 72.0],
          [Date.UTC(2004, 0, 1), 76.3],
          [Date.UTC(2006, 0, 1), 75.9],
          [Date.UTC(2007, 0, 1), 76.7],
          [Date.UTC(2008, 0, 1), 72.2],
          [Date.UTC(2009, 0, 1), 71.7],
          [Date.UTC(2010, 0, 1), 65.4],
          [Date.UTC(2011, 0, 1), 66.8],
          [Date.UTC(2013, 0, 1), 71.4],
          [Date.UTC(2015, 0, 1), 65.3],
          [Date.UTC(2017, 0, 1), 59.9],
          [Date.UTC(2019, 0, 1), 52.1],
          [Date.UTC(2021, 0, 1), 40.7],
          [Date.UTC(2023, 0, 1), 32.3],
          // 원하는 데이터 포인트를 추가하세요
        ],
      },
    ],
    exporting: {
      enabled: false, // 햄버거 아이콘(내보내기 메뉴) 비활성화
    },
    credits: {
      enabled: false, // 하단의 highcharts.com 워터마크 비활성화
    },
  });
}

function loadChart2() {
  Highcharts.chart("container2", {
    chart: {
      type: "area",
      backgroundColor: "transparent",
      spacing: [0, 0, 0, 0],
      events: {
        load: function () {
          const chart = this;
          chart.renderer
            .text("2024년 10월", 140, 80)
            .css({ color: "#FFFFFF", fontSize: "30px", fontWeight: "medium" })
            .add();
          chart.renderer
            .text("yes24 주가 추이", 140, 120)
            .css({ color: "#FFFFFF", fontSize: "30px", fontWeight: "bold" })
            .add();
        },
      },
    },
    title: {
      text: "", // 제목을 빈 문자열로 설정하여 없앱니다
    },
    xAxis: {
      type: "datetime",
      labels: {
        style: {
          color: "#FFFFFF", // x축 라벨 텍스트 컬러를 흰색으로 설정
        },
      },
      lineColor: "transparent", // x축 선 숨김
      tickColor: "transparent", // x축 눈금 숨김
    },
    yAxis: {
      visible: false, // y축 숨김
      min: 3500, // 최소값을 설정하여 그래프가 확장되도록 함
      max: 9000, // 최대값을 설정하여 그래프가 확장되도록 함// y축 숨김
    },
    legend: {
      enabled: false, // 범례 비활성화
    },
    series: [
      {
        name: "Yes24",
        data: [
          [Date.UTC(2024, 3, 3), 4742],
          [Date.UTC(2024, 3, 9), 4693],
          [Date.UTC(2024, 3, 17), 4545],
          [Date.UTC(2024, 3, 24), 4621],
          [Date.UTC(2024, 3, 30), 4623],
          [Date.UTC(2024, 4, 8), 4625],
          [Date.UTC(2024, 4, 14), 4628],
          [Date.UTC(2024, 4, 22), 4673],
          [Date.UTC(2024, 4, 29), 4721],
          [Date.UTC(2024, 5, 5), 4655],
          [Date.UTC(2024, 5, 12), 4688],
          [Date.UTC(2024, 5, 19), 4587],
          [Date.UTC(2024, 5, 26), 4403],
          [Date.UTC(2024, 6, 3), 4393],
          [Date.UTC(2024, 6, 10), 4281],
          [Date.UTC(2024, 6, 17), 4246],
          [Date.UTC(2024, 6, 24), 4399],
          [Date.UTC(2024, 6, 31), 5628],
          [Date.UTC(2024, 7, 7), 4938],
          [Date.UTC(2024, 7, 14), 4654],
          [Date.UTC(2024, 7, 21), 4550],
          [Date.UTC(2024, 7, 28), 5438],
          [Date.UTC(2024, 8, 4), 5350],
          [Date.UTC(2024, 8, 11), 5302],
          [Date.UTC(2024, 8, 13), 5370],
          [Date.UTC(2024, 8, 25), 5460],
          [Date.UTC(2024, 8, 28), 5183],
          [Date.UTC(2024, 9, 1), 5143],
          [Date.UTC(2024, 9, 26), 8217],
        ],
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, "#32CD32"], // 시작 색상
            [1, "rgba(50, 205, 50, 0)"], // 아래로 내려가면서 투명해지게 설정
          ],
        },
        lineColor: "#32CD32", // 선 색상을 진한 녹색으로 설정
        lineWidth: 2, // 선 두께
        marker: {
          enabled: false, // 마커 숨김
        },
      },
    ],
    exporting: {
      enabled: false, // 햄버거 아이콘(내보내기 메뉴) 비활성화
    },
    credits: {
      enabled: false,
    },
  });
}

// Intersection Observer 설정
const options = {
  root: null, // 뷰포트를 기준으로 관찰
  rootMargin: "0px",
  threshold: 0.5, // 요소가 50% 보일 때 트리거
};

// 차트 1 관찰자
const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadChart1();
      observer.unobserve(entry.target); // 한 번 로드 후 관찰 해제
    }
  });
}, options);

// 차트 2 관찰자
const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadChart2();
      observer.unobserve(entry.target); // 한 번 로드 후 관찰 해제
    }
  });
}, options);

$(document).ready(function () {
  // 차트를 감시하도록 설정
  observer1.observe(document.getElementById("container"));
  observer2.observe(document.getElementById("container2"));
});

$(document).ready(function () {
  // 책 표지를 클릭하면 설명창이 열리고 내용이 업데이트됨
  $(".book").click(function () {
    const title = $(this).data("title");
    const description = $(this).data("description");
    const imageSrc = $(this).data("image");

    // 설명창에 제목과 설명 업데이트
    $(".book-description .description-text-content h2").text(title);
    $(".book-description .description-text-content .description-text").text(
      description
    );

    // 클릭한 책의 이미지를 설명창의 왼쪽에 추가
    $(".book-description .description-image").html(
      `<img src="${imageSrc}" alt="${title}">`
    );

    // 설명창 보이기
    $(".book-description").slideDown();
  });

  // 닫기 버튼을 클릭하면 설명창을 숨김
  $(".close-description").click(function () {
    $(".book-description").slideUp();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const highlightText = document.querySelector(".highlight-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          highlightText.classList.add("active");
        } else {
          highlightText.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(highlightText);
});
$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollHighlight = $(".scroll-highlight-container");
    var scrollPosition = $(window).scrollTop() + $(window).height();
    var elementPosition =
      scrollHighlight.offset().top + scrollHighlight.outerHeight() / 2;

    if (scrollPosition > elementPosition) {
      scrollHighlight.addClass("visible");
    } else {
      scrollHighlight.removeClass("visible");
    }
  });
});
$(document).ready(function () {
  // 마우스 움직임 이벤트
  $(document).mousemove(function (e) {
    // 화면 중심을 기준으로 마우스의 위치를 계산
    const moveX = (e.pageX - $(window).width() / 2) / 40;
    const moveY = (e.pageY - $(window).height() / 2) / 40;

    // img4, img5, img6의 이동 설정
    $(".img4").css({
      transform: `translate(${-moveX}px, ${-moveY}px)`,
    });

    $(".img5").css({
      transform: `translate(${-moveX * 1.2}px, ${-moveY * 1.2}px)`,
    });

    $(".img6").css({
      transform: `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`,
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const chatContainer = document.querySelector(".chat-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 첫 번째 말풍선 애니메이션 실행
          setTimeout(() => {
            document.querySelector(".bubble1").classList.add("show");
          }, 300); // 첫 번째 말풍선이 1초 후에 나타나도록 설정

          // 두 번째 말풍선 애니메이션 실행
          setTimeout(() => {
            document.querySelector(".bubble2").classList.add("show");
          }, 800); // 두 번째 말풍선이 1.5초 후에 나타나도록 설정

          // 한 번 실행 후 옵저버를 해제하여 다시 실행되지 않도록 함
          observer.unobserve(chatContainer);
        }
      });
    },
    { threshold: 0.5 } // 요소가 50% 보일 때 애니메이션 실행
  );

  // chatContainer 요소를 관찰
  observer.observe(chatContainer);
});
