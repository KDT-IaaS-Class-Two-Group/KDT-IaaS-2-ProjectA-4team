import Image from "next/image";
import React from "react";
import LogoProps from "src/interfaces/components/logo/Logo.interface";

/**
 * `Logo`
 *
 * 이 컴포넌트는 로고 이미지를 렌더링합니다. 로고 이미지는 환경 변수에서 제공되는 URL을 사용하여 로드됩니다.
 * `next/image` 컴포넌트를 사용하여 이미지의 최적화 및 반응형 처리를 지원합니다.
 *
 * @component
 *
 * @param {LogoProps} props - 로고 이미지의 속성을 정의하는 객체입니다. 이 속성들은 `next/image` 컴포넌트에 직접 전달됩니다.
 *
 * @returns {JSX.Element} - 로고 이미지를 렌더링하는 JSX 요소를 반환합니다.
 *
 * @description
 * 로고 이미지의 URL은 환경 변수 `NEXT_PUBLIC_S3_CLCL_LOGO_URL`에서 가져옵니다.
 * 이 URL은 S3 버킷에서 호스팅되는 로고 이미지의 위치를 정의합니다.
 *
 * `Logo` 컴포넌트는 다양한 속성을 `next/image`의 `Image` 컴포넌트에 전달할 수 있도록 `props`를 스프레드 연산자로 전달합니다.
 *
 * @crystal23733
 * @date 24.08.02
 */
const Logo: React.FC<LogoProps> = ({ ...props }) => {
  const clcl_logo = process.env.NEXT_PUBLIC_S3_CLCL_LOGO_URL as string;
  return <Image src={clcl_logo} {...props} alt="logo" />;
};

export default Logo;
