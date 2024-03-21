<h1 align="center"> 🐶 메가주 사이트 리뉴얼 🐱 </h1>
<h3 align="center"> Responsive | 100% customize portfolio </h3>
<br/>

##Intro

UIUX 웹 앱 디자인(figma) & 프론트엔드(React.JS) 과정 중 첫번째로 진행한 프로젝트 입니다.
기존 메가주 사이트를 리 디자인 하였습니다. 기존 브랜드의 메인 컬러를 중심으로 가독성 있고, 임팩트 있는 포인트를 추가 하였습니다.
웹 접근성을 준수 하였으며, 다양한 디바이스에 대응이 가능 하도록 브레이크포인트를 설정하여 반응형 웹페이지로 제작 하였습니다.

##


# Re-Megazoo
Megazoo website Renewel with responsive Web

2023-12-14
:start index.html - mobile main page(only html)
:start css - mobile main page

2023-12-15
:header - comm.css
:add image(not included comm.css)

2023-12-17
:슬라이드 텍스트
:메인 배너 이미지 스와이퍼

2023-12-18
:gnb hover 안되는 오류 수정
:슬라이드 텍스트 span 태그 안 텍스트 해결 완료

2023-12-19
: :root변수 설정
: 올메뉴 호버했을때 메인배너 스와이퍼 뒤로 숨고, 슬라이드 텍스트 위로 올라오는 에러 발생
    -> allmenu에 z-index설정
: #sec-bg 배경 이미지 안 입혀지는 오류 발생
    -> 백그라운드 이미지 요소 아닌 백그라운드로 설정
=>오류 해결

2023-12-20
: #main>.sec02~04 밀림 현상 해결
    -> transform : translateX(-10px)

# Re-megazoo-scss
2023-12-20
: scss 적용 (comm, fonts, main, mixins, resets, variables 적용 후 맞게 수정 )
: 반응형 웹-> 전체 width:360px -> width:100%변경
: allmenu 호버시 좁게 뜨는 오류 해결
    position:absolute; -> position:fixed; 변경

2023-12-21
: button -> input 박스로 변경 후 체크드 완료
: 메인 섹션01 컨텐츠 호버 기능 설정 중

: 오시는길 이미지 가로 100% 설정 해야 함


2023-12-24
: 섹션 2~4 호버 기능 완료

2023-12-26
: 스와이퍼 중복 적용 중, 오류 해결 중
: 섹션 1 호버 기능 완료
: 스와이퍼 아직 해결 하는중....

2023-12-27
: 스와이퍼 중복 적용 시 오류 해결
: 섹션 별 호버 기능 완료
: 반응형 진행 중

2023-12-28
: 인덱스문서 호버 기능 트랜지션 설정 완료
: 일단 서브 페이지 시작 (로그인, 참가기업리스트)
: 인덱스문서 헤더, 풋터 반응형 작업 중
: 섹션 01 비율 맞게 줄어드는거 수정 중

2023-12-29
: 반응형 작업중

2024-01-02
: 반응형 작업중(헤더, 풋터)
: 해야할것(웹사이즈-네비바 호버시 나오는 발바닥 position:absolute 적용 /
    웹사이즈-네비바 호버시 나오는 뎁스 메뉴 넓이 추가 적용)

2024-01-03
: 반응형 웹페이지 작업 완료
: 웹사이즈-호버시 나오는 뎁스 메뉴 넓이 수정 완료, 호버시 발바닥 때문에 네비메뉴 안밀리게 수정완료
: 전체 메인 페이지 완료 -끝-
: 이제 그누보드 작업 시작

2024-01-08
: aos scrolltrigger 적용
