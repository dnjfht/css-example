import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reducer";

export default function App() {
  // const [person, setPerson] = useState(initialState);
  const initialState = {
    name: "승민",
    title: "개발자",
    mentors: [
      {
        name: "동동주",
        title: "시니어개발자",
      },
      {
        name: "제임스",
        title: "시니어개발자",
      },
      {
        name: "티나",
        title: "시니어개발자",
      },
    ],
  };

  const [person, dispatch] = useReducer(personReducer, initialState);

  const ClickAddMentor = () => {
    const currentName = prompt("추가하고 싶은 멘토의 이름은 무엇입니까?");
    const currentJob = prompt("추가하고 싶은 멘토의 직업은 무엇입니까?");

    const newMentor = {
      name: currentName,
      title: currentJob,
    };

    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, newMentor],
    }));
  };

  const ClickDeleteMentor = () => {
    const prev = prompt("삭제할 멘토의 이름은 무엇입니까?");

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => {
        return mentor.name !== prev;
      }),
    }));
  };

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => {
          return (
            <li key={index}>
              {mentor.name} ({mentor.title})
            </li>
          );
        })}
      </ul>
      <button onClick={ClickAddMentor}>멘토 추가하기</button>
      <button onClick={ClickDeleteMentor}>멘토 삭제하기</button>
    </div>
  );
}
