export default function Home() {
  console.log('home');
  return <></>;
}

/*
서버 컴포넌트: js 번들링(2차)를 진행하지 않고, 서버에서만 렌더링한 후 사용함
굳이 인터렉션이 필요 없는 것은 2차 번들링 할 필요도 x

서버 컴포넌트가 default
console.log('home'); 등은 terminal에서만 작동함
반대로 useEffect 등은 'use client'를 작성하지 않으면 작동 불가

웬만해선 서버 컴포넌트로만 만들 것. 상호작용 있는 것만 한정적으로 클라이언트
*/
