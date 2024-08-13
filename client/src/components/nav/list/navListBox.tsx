import React from "react";
import LinkButtonComponent from "../../button/link/linkButtonComponent";
import Image from "next/image";

/**
 * @crystal23733 24.07.29
 * @returns aside list
 */
const NavListBox: React.FC = () => {
  return (
    <nav className="px-10">
      <div className="font-thin text-md text-gray-500 mt-4 mb-2">재고 관리</div>
      <ul>
        <li className="flex hover:bg-cyan-500 hover:bg-opacity-15 hover:rounded-lg hover:font-medium font-normal text-gray-500 my-1 px-4 py-3">
          <div className="pt-1">
            <Image width={18} height={18} src="/stockImg.png" alt="stockImg" />
          </div>
          <LinkButtonComponent
            className=" hover:font-medium font-normal text-gray-500 my-1 px-4 py-3"
            href="/admin/stockInfo"
          >
            재고 조회
          </LinkButtonComponent>
        </li>
        <li className="flex hover:bg-cyan-500 hover:bg-opacity-15 hover:rounded-lg hover:font-medium font-normal text-gray-500 my-1 px-4 py-3">
          <div className="pt-1">
            <Image
              width={18}
              height={18}
              src="/expImg.png"
              alt="expirationImg"
            />
          </div>
          <LinkButtonComponent
            className="hover:font-medium font-normal text-gray-500 my-1 px-4 py-3"
            href="/admin/stockDate"
          >
            유통기한 관리
          </LinkButtonComponent>
        </li>
      </ul>
      <div className="font-thin text-md text-gray-500 mt-4 mb-2">매출 관리</div>
      <ul>
        <li className="flex hover:bg-cyan-500 hover:bg-opacity-15 hover:rounded-lg hover:font-medium font-normal text-gray-500 my-1 px-4 py-3">
          <div className="pt-1">
            <Image width={18} height={18} src="/saleImg.png" alt="saleImg" />
          </div>
          <LinkButtonComponent
            className=" hover:font-medium font-normal text-gray-500 my-1 px-4 py-3"
            href="/admin/salesInquiry"
          >
            매출 조회
          </LinkButtonComponent>
        </li>
      </ul>
      <div className="font-thin text-md text-gray-500 mt-4 mb-2">회원 관리</div>
      <ul>
        <li className="flex hover:bg-cyan-500 hover:bg-opacity-15 hover:rounded-lg hover:font-medium font-normal text-gray-500 my-1 px-4 py-3">
          <div className="pt-1">
            <Image
              width={18}
              height={18}
              src="/memberImg.png"
              alt="memberImg"
            />
          </div>
          <LinkButtonComponent
            className=" hover:font-medium font-normal text-gray-500 my-1 px-4 py-3"
            href="/admin/memberInfo"
          >
            회원 조회
          </LinkButtonComponent>
        </li>
      </ul>
      <div className="font-thin text-md text-gray-500 mt-4 mb-2">통계</div>
      <ul>
        <li className="flex hover:bg-cyan-500 hover:bg-opacity-15 hover:rounded-lg hover:font-medium font-normal text-gray-500 my-1 px-4 py-3">
          <div className="pt-1">
            <Image
              width={18}
              height={18}
              src="/insightImg.png"
              alt="insightImg"
            />
          </div>
          <LinkButtonComponent
            className=" hover:font-medium font-normal text-gray-500 my-1 px-4 py-3"
            href="/admin/insight"
          >
            인사이트
          </LinkButtonComponent>
        </li>
      </ul>
    </nav>
  );
};

export default NavListBox;
