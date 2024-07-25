import React from "react";

interface LogoComponentProps {
  imageUrl : string;
  className? : string;
  alt? : string;
}

const Logo:React.FC<LogoComponentProps> = ({imageUrl, alt, className}) => {
  return (
    <img src={imageUrl} alt={alt} className={className} />
  );
}

export default Logo;