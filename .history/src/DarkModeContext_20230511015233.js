import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // Provider는 데이터를 가지고 보여주고 있는 우산(umbrella) 만들 때 사용.
  // 밑에 있는 하위 컴포넌트들을 감싸줄 수 있는 우산 컴포넌트
  // DarkModeProvider는 UI적으로 무언가를 하지는 않지만,
  // children을 감싸는 DarkModeContext, 즉 데이터를 가지고 있는 우산을 만들어줌.

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };
  console.log(darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {/* 이 안에 global하게 기억하고 싶은 데이터를, 그리고 그걸 처리하고 싶은 함수들을 안에서 만들어주면 됨. */}
      {/* 우리가 react에서 Context를 쓰는 것은 우산을 만들고, 그 우산을 우리가 씌워주고 싶은 component에다 씌우면 */}
      {/* component 하위에 있는 모든 요소들이 데이터에 접근이 가능함. */}
      {children}
    </DarkModeContext.Provider>
    // Context에 있는 Provider를 return할 건데,
    // 이걸 외부에서 편하게 사용하기 위해서 DarkModeProvider를 만들어줌.
  );
}

// 우산(Context)을 만들려면
// 1. React에서 제공해주는 createContext를 이용해서 Context를 만든다.
// 2. 자식 컴포넌트들을 받아오는 컴포넌트를 만들어서 자식 컴포넌트들을 위에서 만든 Context에서 제공해주는 Provider로 감싸주면 됨.
