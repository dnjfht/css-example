import React from "react";

export default function Button1() {
  return <button style={{ backgroundColor: "aqua" }}>Button 1</button>;
}

// 기본적인 css 파일을 사용했을 때의 문제점 :
// 동일한 class 이름을 사용하면
// 가장 나중에 import된 css 파일에 정의된 selector가 이기게 됨.
