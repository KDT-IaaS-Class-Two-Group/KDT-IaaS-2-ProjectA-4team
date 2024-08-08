import Image, { ImageProps } from "next/image";
import React from "react";

/**
 * @crystal23733 24.08.02
 *
 * @interface LogoProps
 */
interface LogoProps extends Omit<ImageProps, "src"> {
  // 'src'를 제외한 나머지 ImageProps를 확장합니다.
}

/**
 * @crystal23733 24.08.02
 * @param props
 * @returns {JSXElement} - 로고 컴포넌트
 */
const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return <Image src="/clclLogo.png" {...props} alt="logo" />;
};

export default Logo;
