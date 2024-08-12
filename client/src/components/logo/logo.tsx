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
  const clcl_logo = process.env.NEXT_PUBLIC_S3_CLCL_LOGO_URL as string;
  return <Image src={clcl_logo} {...props} alt="logo" />;
};

export default Logo;
