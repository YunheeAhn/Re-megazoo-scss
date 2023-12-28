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
: 일단 서브 페이지 시작 (로그인, 참가기업리스트)
: 인덱스문서 헤더, 풋터 반응형 작업 중
: 인덱스문서 호버 기능 트랜지션 설정 완료
: 섹션 01 비율 맞게 줄어드는거 수정 중