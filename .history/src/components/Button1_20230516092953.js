import React from "react";
import styles from "./Button1.module.css";

export default function Button1() {
  return <button className={styles.button}>Button 1-멋져!!!</button>;
}

// 기본적인 css 파일을 사용했을 때의 문제점 :
// 동일한 class 이름을 사용하면
// 가장 나중에 import된 css 파일에 정의된 selector가 이기게 됨.
// 아무리 다른 css 파일을 만든다고 해도, 서로 다른 파일에서 동일한 calss 이름을 사용하면
// 가장 나중에 import된 css 파일에 정의된 selector가 앞에껄 덮어씌우게 되어 있다.

// 이렇게 PostCSS를 사용하면 class 이름이 충돌나는 것을 신경쓰지 않아도 된다.
// PostCSS를 쓰면 자동으로 이름을 감싸준 네이밍 스페이스를 더해서 객체를 전달해준다.
// 객체 이름은 원하는 대로 정의해주면 된다.(ex : styles)
// 사용할 때도 태그에 className = {styles. ...} 이렇게 사용하면 된다.
// 자바스크립트 문법을 사용할 것이기 때문에 중괄호 사용.
// PostCSS를 사용하면 동일한 class 이름을 사용해도 파일명을 이용해서 고유한 class 이름을 만들어줌.
