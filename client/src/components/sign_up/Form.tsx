import React, { useState } from "react";
import InputComponent from "src/components/Input";
import SignUpInputs from "../../../static/sign-up/SignUpInputs";

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log(e);
};

const SignUpForm: React.FC = () => {
  return (
    <form id="sign-up-form" method="post" onSubmit={handleSubmit}>
      <div>
        {SignUpInputs.map((itemArray, key) => {
          return (
            <>
              <p>{itemArray[3]}</p>
              <InputComponent
                id={itemArray[1]}
                name={itemArray[1]}
                key={key}
                placeholder={itemArray[2]}
                type={itemArray[0]}
              />
            </>
          );
        })}
      </div>
      <button type="submit">ㅎㅇ</button>
    </form>
  );
};

export default SignUpForm;
