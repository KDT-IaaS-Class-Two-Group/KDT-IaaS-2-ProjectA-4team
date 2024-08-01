import Image, { ImageProps } from "next/image";
import React from "react";

interface LogoProps extends Omit<ImageProps, 'src'> {
  // 'src'를 제외한 나머지 ImageProps를 확장합니다.
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return <Image src="/clclLogo.png" {...props} />;
};

export default Logo;
