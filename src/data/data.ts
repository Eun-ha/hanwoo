export type visualTypes = {
  title: string;
  date: string;
  location: string;
};

export type noticeTypes = {
  date: string;
  content: string;
  url: string;
};

export type subtitleTypes = {
  title: string;
  title2?: string;
  title3?: string;
};

export type programsTypes = {
  title: string;
  title2: string;
  content: string;
  image: string;
  url?: string;
};

export type linksTypes = {
  title: string;
  icon: string;
  url: string;
};

export type AllDataTypes = {
  visual: visualTypes[];
  notice: noticeTypes[];
  subtitle: subtitleTypes[];
  programs: programsTypes[];
  links: linksTypes[];
};

export const AllData: AllDataTypes[] = [
  {
    visual: [
      {
        title: "제20회 횡성한우축제",
        date: "2024.10.2 (수) ~ 10.6 (일)",
        location: "횡성 섬강 둔치 일원",
      },
    ],
    subtitle: [
      {
        title: "NOTICE",
      },
      {
        title: "횡성한우축제",
        title2: "프로그램",
      },
      {
        title: "온라인으로 만나는 ",
        title2: "횡성한우축제",
        title3: "미디어",
      },
    ],
    notice: [
      {
        date: "2024-06-07",
        content:
          "[공고] 제20회 횡성한우축제 공간조성 및 운영 용역 우선협상자 선정결과 공고",
        url: "www.naver.com",
      },
      {
        date: "2024-06-07",
        content:
          "[공고]제20회 횡성한우축제 운영대행 용역 우선협상대상자 선정결과 공고",
        url: "www.naver.com",
      },
    ],
    programs: [
      {
        title: "횡성한우 ",
        title2: "에코뮤지엄",
        content:
          "주제관을 따라 걸으면 횡성한우의 과거, 현재, 미래를 만날 수 있는 지붕없는 박물관",
        image: "/images/programs/programs.png",
        url: "www.naver.com",
      },
      {
        title: "횡성한우",
        title2: "구이난장",
        content:
          "최고의 맛 횡성한우를 즐기면서 함께 추억속으로 빠지는 음악여행",
        image: "/images/programs/programs2.png",
        url: "www.naver.com",
      },
      {
        title: "횡성한우",
        title2: "웰니스파티",
        content: "지역주민과 관광객이 함께하는 참여형 피트니스 파티",
        image: "/images/programs/programs.png",
        url: "www.naver.com",
      },
      {
        title: "횡성한우 ",
        title2: "카우쇼",
        content: "지역예술가들과 함께하는 횡성한우 공공미술 프로젝트",
        image: "/images/programs/programs2.png",
        url: "www.naver.com",
      },
      {
        title: "횡성한우 ",
        title2: "에코뮤지엄",
        content:
          "주제관을 따라 걸으면 횡성한우의 과거, 현재, 미래를 만날 수 있는 지붕없는 박물관",
        image: "/images/programs/programs.png",
        url: "www.naver.com",
      },
      {
        title: "횡성한우",
        title2: "구이난장",
        content:
          "최고의 맛 횡성한우를 즐기면서 함께 추억속으로 빠지는 음악여행",
        image: "/images/programs/programs2.png",
        url: "www.naver.com",
      },
      {
        title: "횡성한우",
        title2: "웰니스파티",
        content: "지역주민과 관광객이 함께하는 참여형 피트니스 파티",
        image: "/images/programs/programs.png",
      },
      {
        title: "횡성한우 ",
        title2: "카우쇼",
        content: "지역예술가들과 함께하는 횡성한우 공공미술 프로젝트",
        image: "/images/programs/programs2.png",
        url: "www.naver.com",
      },
    ],
    links: [
      {
        title: "축제소개",
        icon: "intro",
        url: "www.naver.com",
      },
      {
        title: "축제일정",
        icon: "schedule",
        url: "www.naver.com",
      },
      {
        title: "행사장안내",
        icon: "map",
        url: "www.naver.com",
      },
      {
        title: "오시는길",
        icon: "location",
        url: "www.naver.com",
      },
      {
        title: "한우이야기",
        icon: "story",
        url: "www.naver.com",
      },
    ],
  },
];
