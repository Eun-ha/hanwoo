export type visualTypes = {
  title: string;
  date: string;
  location: string;
};

export type noticeTypes = {
  date: string;
  content: string;
};

export type subtitleTypes = {
  title: string;
  title2?: string;
  title3?: string;
};

export type AllDataTypes = {
  visual: visualTypes[];
  notice: noticeTypes[];
  subtitle: subtitleTypes[];
};

export const visualData: visualTypes = {
  title: "제20회 횡성한우축제",
  date: "2024.10.2 (수) ~ 10.6 (일)",
  location: "횡성 섬강 둔치 일원",
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
      },
      {
        date: "2024-06-07",
        content:
          "[공고]제20회 횡성한우축제 운영대행 용역 우선협상대상자 선정결과 공고",
      },
    ],
  },
];
