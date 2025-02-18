export default async function Page() {
  return <div>parallel</div>;
}

/* 참고자료: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
관리자 대쉬보드, 채팅과 뉴스 피드, 상품 상세 페이지와 추천 상품 등 복잡한 페이지에서 사용
✔ 여러 개의 독립적인 패널을 한 페이지에서 렌더링할 때 적합
✔ 각 패널이 비동기적으로 데이터를 패칭 & 업데이트 가능
✔ 한 패널이 로딩 중이더라도 다른 패널은 정상적으로 렌더링됨
*/
