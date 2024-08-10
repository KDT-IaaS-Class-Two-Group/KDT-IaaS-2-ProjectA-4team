import Image from "next/image";
import React from "react";
import LogoProps from "src/interfaces/components/logo/Logo.interface";

/**
 * @crystal23733 24.08.02
 *
 * @interface LogoProps
 */

/**
 * @crystal23733 24.08.02
 * @param props
 * @returns {JSXElement} - 로고 컴포넌트
 */
const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return <Image src="/clclLogo.png" {...props} alt="logo" />;
};

export default Logo;
