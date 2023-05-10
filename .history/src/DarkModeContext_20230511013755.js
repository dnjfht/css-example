import { createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // Provider는 데이터를 가지고 보여주고 있는 우산(umbrella) 만들 때 사용.
  // 밑에 있는 하위 컴포넌트들을 감싸줄 수 있는 우산 컴포넌트
}
