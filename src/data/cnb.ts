export type cnbTypes = {
  title: string;
  deps: string[];
  links: string[];
};

export type CnbAllDataType = {
  cnb: cnbTypes[];
};

export const CnbData: CnbAllDataType[] = [
  {
    cnb: [
      {
        title: "축제소개",
        deps: ["축제개요", "역대축제", "캐릭터소개"],
        links: [
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/festival_intro.php",
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/festival_list.php",
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/character.php",
        ],
      },
      {
        title: "축제정보",
        deps: [
          "축제일정",
          "먹거리",
          "즐길거리",
          "볼거리",
          "오시는길",
          "축제장 안내",
        ],
        links: [
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/festival_intro.php",
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/festival_list.php",
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/character.php",
        ],
      },
      {
        title: "한우이야기",
        deps: ["횡성한우의 역사", "왜 횡성한우인가", "군수품질인증제"],
        links: [
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/festival_intro.php",
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/festival_list.php",
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/character.php",
        ],
      },
      {
        title: "커뮤니티",
        deps: ["공지사항", "소리함"],
        links: [
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/festival_intro.php",
          "https://happyhanwoofestival.com/theme/basic/festival_Intro/festival_list.php",
        ],
      },
    ],
  },
];
