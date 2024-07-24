import React, { useState } from "react";
import MyForm from "./test";
import InputComponent from "src/components/Input";

const App: React.FC = () => {
  const [test, setTest] = useState(1);

  // 상태 업데이트 핸들러 정의
  const handleClick = () => {
    setTest(test + 1);
  };

  return (
    <div className="w-svw h-svh bg-red-200">
      <MyForm />
    </div>
  );
};

export default App;
