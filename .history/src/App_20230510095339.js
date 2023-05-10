import React, { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: "승민",
    title: "개발자",
    mentor: [
      {
        name: "동동주",
        title: "시니어개발자",
      },
    ],
  });

  const ClickMentorNameChange = () => {
    const name = prompt("what's your mentor's name?");

    // const mentor = {
    //   name: name,
    //   title: person.mentor.title,
    // };
    // setPerson((prev) => ({ ...prev, mentor }));

    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, name: name },
    }));
  };

  const ClickMentorJobChange = () => {
    const title = prompt("what's your mentor's title?");

    // const mentor = {
    //   name: person.mentor.name,
    //   title: title,
    // };
    // setPerson((prev) => ({ ...prev, mentor }));

    setPerson((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, title: title },
    }));
  };
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={ClickMentorNameChange}>멘토 이름 바꾸기</button>
      <button onClick={ClickMentorJobChange}>멘토 타이틀 바꾸기</button>
    </div>
  );
}
