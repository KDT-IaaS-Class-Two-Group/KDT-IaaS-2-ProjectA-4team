import CustomButton from "src/components/CustomButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

const MyComponent: React.FC = () => {
  return (
    <Router>
      <div>
        <CustomButton
          to="/"
          text="Go to Home Page"
          variant="secondary"
          size="sm"
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MyComponent;
