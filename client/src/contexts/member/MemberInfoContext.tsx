import React, { createContext, useContext, ReactNode } from "react";
import MemberInfoTableContextType from "src/interfaces/contexts/member/MemberInfoContext.interface";

const MemberInfoTableContext = createContext<
  MemberInfoTableContextType | undefined
>(undefined);

/**
 * @eonduck2 24.08.02
 * * `MemberInfoTableProvider` 컴포넌트는 `MemberInfoTableContext`를 제공하며,
 * * 하위 컴포넌트에서 컨텍스트 값을 사용할 수 있게 합니다.
 *
 * @component
 *
 * @param {React.PropsWithChildren} props - 자식 컴포넌트를 포함할 수 있는 props입니다.
 * @returns {JSX.Element} - `MemberInfoTableContext.Provider`로 감싸진 자식 컴포넌트를 반환합니다.
 */

export const MemberInfoTableProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [caption, setCaption] = React.useState<string>("Default Caption");
  const [head, setHead] = React.useState<string[]>([]);
  const [data, setData] = React.useState<Array<{ [key: string]: string }>>([]);
  const [buttonValue, setButtonValue] =
    React.useState<string>("Default Button");

  return (
    <MemberInfoTableContext.Provider
      value={{
        caption,
        head,
        data,
        buttonValue,
        setCaption,
        setHead,
        setData,
        setButtonValue,
      }}
    >
      {children}
    </MemberInfoTableContext.Provider>
  );
};

/**
 * @eonduck2 24.08.02
 * * `useMemberInfoTable` 훅은 `MemberInfoTableContext`에 접근하여 컨텍스트 값을 반환합니다.
 *
 * @hook
 *
 * @returns {MemberInfoTableContextType} - `MemberInfoTableContext`의 값을 반환합니다.
 *
 * @throws {Error} - 컨텍스트가 정의되지 않은 경우 오류를 발생시킵니다.
 */

export const useMemberInfoTable = (): MemberInfoTableContextType => {
  const context = useContext(MemberInfoTableContext);
  if (context === undefined) {
    throw new Error();
  }
  return context;
};
