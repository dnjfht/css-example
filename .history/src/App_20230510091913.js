import React, { useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: "승민",
    title: "개발자",
    mentor: {
      name: "동동주",
      title: "시니어개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
    </div>
  );
}
