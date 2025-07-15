/** @jsxImportSource @emotion/react */
import { keyframes } from "@emotion/react";

// 회전 애니메이션 (회전 → 각도 변화 후 복귀 반복)
export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(25deg);
  }
  40% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(25deg);
  }
  80% {
    transform: rotate(25deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

// 부드러운 위로 나타나기
export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 천천히 나타나기
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 아래에서 위로 올라오며 스케일 업
export const scaleUp = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// 좌우 흔들기
export const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

// 둥둥이
export const floatUpDown = keyframes`
0% {
  transform: translateY(0px);
}
50% {
  transform: translateY(-10px);
}
100% {
  transform: translateY(0px);
}
`;

// 텍스트 흐르는 효과
export const marquee = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(-50%);
}
`;

export const twinkle = keyframes`
  0% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0.2; transform: scale(1); }
`;
