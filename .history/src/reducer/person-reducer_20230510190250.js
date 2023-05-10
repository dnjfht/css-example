function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action; // action 안에 들어있는 값들
      const prev = action.prev;
      const current = action.current;
    }
  }
}

// 전달받은 person이라는 기존의 객체를 업데이트했는지, 삭제했는지 등 action에 따라서
// 새로운 person 객체를 만들어서 return해주는 것.
