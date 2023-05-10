import React from "react";

export default function App() {
  const [person, setPerson] = useState({
    name: "승민",
    title: "개발자",
    mentor: {
      name: "동동주",
      title: "시니어개발자",
    },
  });
  return <div></div>;
}
