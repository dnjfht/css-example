import React, { useCallback, useMemo, useState } from "react";

export default function App() {
  const [person, setPerson] = useState({
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
  });

  const ClickMentorNameChange = useCallback(() => {
    const prev = prompt("누구의 이름을 바꾸고 싶은가요?");
    const current = prompt("이름을 무엇으로 바꾸고 싶은가요?");

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
  }, []);

  const ClickAddMentor = useCallback(() => {
    const name = prompt("추가할 멘토의 이름은 무엇입니까?");
    const title = prompt("추가할 멘토의 직함은 무엇입니까?");

    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  }, []);

  const ClickDeleteMentor = useCallback(() => {
    const name = prompt("삭제할 멘토의 이름은 무엇입니까?");

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => {
        return mentor.name !== name;
      }),
    }));
  }, []);

  // useCallback으로 감싸주면
  // ClickMentorNameChange, ClickAddMentor, ClickDeleteMentor 세 함수가 동일한 callback 객체를 사용해서
  // 이제 다시 무언가 업데이트 될 때 컴포넌트에서 동일한 객체를 사용하겠지만
  // 계속 새롭게 할당된 text가 만들어질 거임.

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
      <Button text="멘토 이름 바꾸기" onClick={ClickMentorNameChange} />
      <Button text="멘토 추가하기" onClick={ClickAddMentor} />
      <Button text="멘토 삭제하기" onClick={ClickDeleteMentor} />
    </div>
  );
}

function Button({ text, onClick }) {
  console.log("Button", text, "re-rendering !!");
  const result = useMemo(() => calculateSomething(), []);
  // component 안에 뭔가 무거운 일을 하는데 첫 렌더링 때만 계산하면 된다면
  // useEffect를 사용하면 된다.

  // 또는 useMemo를 사용할 수 있음. => 이거 기억(캐쉬)해놔!
  // useMemo가 호출될 때 딱 한 번만 함수를 호출해줄 거임.

  // 이것도 싫다면 useCallback을 사용하여 함수가 딱 한 번만 실행되도록 하겠음.

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: 20,
        margin: "0.4rem",
      }}
    >
      {`${text} ${result}`}
    </button>
  );
}

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log("💖💖💖");
  }
  return 10;
}
