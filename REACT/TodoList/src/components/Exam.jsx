import { useReducer } from 'react';

// reducer : 변환기
// 상태를 실제로 변환시키는 변환기 역할
// 인수 : 현재 state, 액션 객체
function reducer(state, action) {
  console.log(state, action);
  // if (action.type === "INCREASE") {
  //     return state+ action.data;
  // } else if (action.type === "DECREASE") {
  //     return state - action.data;
  // }

  //if 문 대신 swtich 가 더 일반적이다.
  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // 상태 변화가 있어야 한다는 사실을 알리는 함수
  // useReducer (변환하는 함수, 초기 값)
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // 요청을 담은 객체 : 액션 객체
    dispatch({
      type: 'INCREASE',
      data: 1,
    });
  };

  const onClickMinus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // 요청을 담은 객체 : 액션 객체
    dispatch({
      type: 'DECREASE',
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
