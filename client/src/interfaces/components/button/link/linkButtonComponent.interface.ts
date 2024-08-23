import { ReactNode } from "react";
import { MouseEventHandler } from "react";

/**
 * @crystal23733
 * @date 24.08.09
 *
 * `LinkButtonComponentProps`는 링크 버튼 컴포넌트에 전달되는 모든 속성을 정의합니다.
 *
 * @interface
 *
 * @property {ReactNode} children - 버튼 내에 표시할 자식 요소.
 * @property {string} href - 링크의 URL 경로.
 * @property {MouseEventHandler<HTMLAnchorElement>} [onClick] - 클릭 이벤트 핸들러 (선택 사항).
 * @property {string} [className] - 추가적인 CSS 클래스 이름 (선택 사항).
 */
export default interface LinkButtonComponentProps {
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}
