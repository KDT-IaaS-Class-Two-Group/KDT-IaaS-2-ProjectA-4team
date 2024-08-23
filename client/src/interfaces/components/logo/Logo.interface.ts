import { ImageProps } from "next/image";

/**
 * @crystal23733
 * @date 24.08.02
 *
 * `LogoProps`는 `Logo` 컴포넌트에 전달되는 속성을 정의합니다.
 *
 * @interface
 *
 * @extends {Omit<ImageProps, "src">}
 *
 * @description
 * `LogoProps`는 `ImageProps` 인터페이스를 확장하며, `src` 속성은 제외합니다.
 * `src` 속성은 `Logo` 컴포넌트 내부에서 자동으로 설정되기 때문에 제외되었습니다.
 */
export default interface LogoProps extends Omit<ImageProps, "src"> {}
