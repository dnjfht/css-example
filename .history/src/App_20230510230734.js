import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "" });

  // 입력 폼은 보여지는 게 react component에서 가지고 있는 상태와 똑같이 매칭이 되도록
  // 타이밍이 딱 맞도록 만들어주는 게 중요함.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(e);
  };
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름 :</label>
        <input
          type="text"
          id="name"
          name="nameeeeeeeeeeeeee"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">이메일 :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
