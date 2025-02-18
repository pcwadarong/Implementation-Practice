import BookInfo from '@/app/book/[id]/page';
import Modal from '@/components/modal';

export default function Page(props: any) {
  return (
    <>
      <Modal>
        <BookInfo {...props} />
      </Modal>
    </>
  );
}

// '첫 접근'이 아닐 때만 intercepting이 됨. 새로고침 할 경우 원래 링크로 이동!
// (.) 점 한 개: 동일한 경로 상에 있는 book/id 를 intercepting
// (..) 점 두 개: 1단계 상위 경로에 있는 book/id를 intercepting
/// (...) 점 세 개: app 폴더 바로 아래에 있는 파일을 intercepting
// 참고 자료: https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
