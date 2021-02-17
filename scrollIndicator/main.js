const scrollBar = document.getElementById("scroll-bar");

// 첫 번째 방법 (1) : width 크기를 변경

window.addEventListener("scroll", function () {
  // Write JS Code Here!

  // scroll 위치
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  // scroll 전체 높이
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  // 현재 보고 있는 화면, 브라우저의 높이, 창이 줄면 같이 줄어든다
  const clientHeight =
    document.documentElement.clientHeight || document.body.clientHeight;

  // 현재 우리가 알아야할 콘텐츠의 높이는 전체 문서 크기 - 현재 보고 있는 문서의 높이
  // 실제 화면에 보이는 부분을 제외한 콘텐츠의 높이
  const contentHeight = scrollHeight - clientHeight;

  // 스크롤의 위치에 따른 남은 콘텐츠의 퍼센트
  const percent = (scrollTop / contentHeight) * 100;

  scrollBar.style.width = `${percent}%`;

  // console.log(percent);
  // console.log(scrollTop);
  // console.log(scrollHeight);
  // console.log(clientHeight);
  // console.log(contentHeight);
});
