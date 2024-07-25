import CustomButton from "src/components/button";
import React from "react";

const MyComponent: React.FC = () => {
  return (
    <div>
      <CustomButton
        text="Destructive Button"
        variant="destructive"
        size="default"
      />
    </div>
  );
};

export default MyComponent;
