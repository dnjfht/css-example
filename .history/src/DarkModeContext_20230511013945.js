import { createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // Provider는 데이터를 가지고 보여주고 있는 우산(umbrella) 만들 때 사용.
  // 밑에 있는 하위 컴포넌트들을 감싸줄 수 있는 우산 컴포넌트

  return (
    <DarkModeContext.Provider></DarkModeContext.Provider>
    // Context에 있는 Provider를 return할 건데,
    // 이걸 외부에서 편하게 사용하기 위해서 DarkModeProvider를 만들어줌.
  );
}
