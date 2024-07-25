import React, { useState } from "react";
import MyForm from "../../components/sign_up/Form";

const SignUp: React.FC = () => {
  const [test, setTest] = useState(1);

  const handleClick = () => {
    setTest(test + 1);
  };

  // CHECKPOINT: first
  return (
    <div className="w-svw h-svh bg-red-200">
      <MyForm />
    </div>
  );
};

export default SignUp;
