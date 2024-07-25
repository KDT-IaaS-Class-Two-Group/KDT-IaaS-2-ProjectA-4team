import React from "react";

interface LogoComponentProps {
  className? : string;
}

const Logo:React.FC<LogoComponentProps> = ({className}) => {
  return (
    <img src='/clclLogo.png' alt="" className={className} />
  );
}

export default Logo;