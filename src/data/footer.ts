export interface FooterContactInfo {
  organizationName: string;
  representativeName: string;
  contactPhone: string;
  address: string;
}

export interface FooterLinks {
  youtube?: string;
  instagram?: string;
  [key: string]: string | undefined; // 향후 트위터 등 추가를 위해
}

export interface FooterDataType {
  contact: FooterContactInfo;
  links: FooterLinks;
  copyright: string;
}

export const FooterData: FooterDataType = {
  contact: {
    organizationName: "횡성문화관광재단",
    representativeName: "이재성",
    contactPhone: "033-808-8007",
    address: "25236 강원특별자치도 횡성군 횡성읍 문예로 41 횡성한우체험관2층",
  },
  links: {
    youtube: "https://www.youtube.com/channel/UCbrqxSucZDptKJZ85CgZRrg",
    instagram: "https://www.instagram.com/happyhanwoofestival/",
  },
  copyright: "ⓒ Hoengseong Hanwoo Festival. All rights reserved.",
};
