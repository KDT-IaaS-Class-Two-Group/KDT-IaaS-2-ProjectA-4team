import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
import InputComponent from "src/components/Input";
import SignUpInputs from "../../../static/SignUpInputs";

const SignUpForm: React.FC = () => {
  return (
    <form id="sign-up-form">
      <div>
        {SignUpInputs.map((itemArray, key) => (
          <InputComponent
            id={itemArray[1]}
            name={itemArray[1]}
            key={key}
            placeholder={itemArray[0]}
            type={itemArray[0]}
          />
        ))}
      </div>
    </form>
  );
};

export default SignUpForm;
