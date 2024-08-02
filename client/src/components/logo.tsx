import Image, { ImageProps } from "next/image";
import React from "react";

interface LogoProps extends Omit<ImageProps, "src"> {
  // 'src'를 제외한 나머지 ImageProps를 확장합니다.
}

const Logo: React.FC<LogoProps> = ({ width = 200, height = 200, ...props }) => {
  return <Image src="/clclLogo.png" width={width} height={height} {...props} />;
};

export default Logo;
