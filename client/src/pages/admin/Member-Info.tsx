import { useState } from "react";
import AdminNav from "src/components/admin/adminNav";
import Modal from "src/components/modal/Modal";
import MemberInfoTable from "src/components/table/MemberInfoTable";

export default () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal title="테스트" content="ㅎㅇ" onClose={handleClose} />
      )}
      <div className="flex">
        <AdminNav />
        <MemberInfoTable
          buttonValue="권한 변경"
          head={["회원 번호", "이름", "이메일", "권한"]}
          data={[
            { id: "1000", 회원: "이종수", 이메일: "qwewq@qwewqe123" },
            { id: "2000", 회원: "이종수", 이메일: "qwewq@qwewqe123" },
          ]}
        />
      </div>
      <button onClick={() => setModalOpen(true)}>open</button>
    </>
  );
};
