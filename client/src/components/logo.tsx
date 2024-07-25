import Image from "next/image";
import React from "react";

interface LogoComponentProps {
  className?: string;
}

const Logo: React.FC<LogoComponentProps> = ({ className }) => {
  return <Image src="/clclLogo.png" alt="" className={className} />;
};

export default Logo;
