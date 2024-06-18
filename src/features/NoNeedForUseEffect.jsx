import React, { useEffect, useState } from "react";

export default function NoNeedForUseEffect() {
  return (
    <>
      <UserId />
    </>
  );
}

function UserId() {
  const [userId, setUserId] = useState("");

  const items = Array(userId.length);

  return (
    <div>
      <label>
        userId
        <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <Comment
        userId={userId}
        // key prop으로 해당 state 변경 시 DOM을 새로 생성하고 state 재설정
        key={userId}
      />
      <PartialStateChange items={items} />
    </div>
  );
}

function Comment({ userId }) {
  const [comment, setComment] = useState("");

  /**
   * prop에 해당하는 값을 가지는 useEffect 사용 시 최초 렌더 후 useEffect에 의해 다시 렌더되어서 비효율적이다.
   * 때로는 상태를 리셋하는 로직을 자식 컴포넌트 스스로 가지고 있는 게 응집도가 높을 수 있을 것 같은데 고민이 필요한 지점
   */
  //   useEffect(() => {
  //     setComment("");
  //   }, [userId]);

  return (
    <div>
      <label>
        comment
        <input value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
    </div>
  );
}

function PartialStateChange({ items }) {
  const [stateThatWillNotChange, setStateThatWillNotChange] = useState(false);
  const [stateToChange, setStateToChange] = useState("");

  /**
   * 특정 state만 변경이 필요하다면 useEffect 대신 prevState를 가지고 렌더링 중에 이를 변경
   * 성능상으로는 분명 useEffect로 처리하는 방식보다 이점이 있어 보이지만 prev state를 처리하는 로직과
   * 직관적이지 않아 보인다는 점이 트레이드 오프가 되는 부분일 것 같음
   */
  //   useEffect(() => {
  //     setStateToChange("");
  //   }, [items]);

  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setStateToChange("");
  }

  return (
    <div>
      <label>
        stateToChange
        <input
          value={stateToChange}
          onChange={(e) => setStateToChange(e.target.value)}
        />
      </label>
    </div>
  );
}
