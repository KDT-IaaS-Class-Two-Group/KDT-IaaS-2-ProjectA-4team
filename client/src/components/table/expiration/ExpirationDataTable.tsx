import React, { useState } from "react";
import DynamicTable from "../DynamicTable";
import ButtonComponent from "src/components/button/customized/CustomButton";
import { useExpirationDate } from "src/model/expiration/useExpirationDate";
import { ConfirmDeleteModal } from "../../modal/expiration/ExpirationDateModal";
import useSearch from "src/hooks/useSearchHook";
import SearchForm from "src/components/form/search/SearchForm";
import { formatDateToYYYYMMDD } from "src/utils/formatDateToYYYYMMDD";
import { ProductDTO } from "@shared/DTO/products/product.dto";
import {
  AA,
  CONFIRM_TITLE,
  CONFIRM_CONTENT,
} from "static/components/table/expiration/ExpirationDataTable.static";
/**
 * @jojayeon 24.08.07
 * @returns 유통기한 관리 테이블
 */

export const ExpirationDataTable: React.FC = () => {
  const { data, loading, error, deleteProduct } = useExpirationDate();
  const [open, setOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<ProductDTO | null>(
    null,
  );
  const [searchQuery, handleSearch] = useSearch();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const processedData = data.map((item) => {
    const formattedItem = {
      ...item,
      restockDate: formatDateToYYYYMMDD(new Date(item.restockDate)),
      expirationDate: formatDateToYYYYMMDD(new Date(item.expirationDate)),
    };
    return new ProductDTO(formattedItem);
  });
  const filteredData = processedData.filter((item) =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // 도달창 띄우고 취소 확인
  //확인
  const handleDelete = () => {
    if (selectedProductId) {
      // selectedProductId의 id를 추출하여 deleteProduct 함수에 전달합니다.
      deleteProduct(selectedProductId._id);
      setOpen(false);
    }
  };

  //폐기 버튼
  const openModal = (product: ProductDTO) => {
    setSelectedProductId(product);
    setOpen(true);
  };

  //취소 버튼
  const closeModal = () => {
    setOpen(false);
    setSelectedProductId(null);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <DynamicTable<ProductDTO>
        data={filteredData}
        renderActions={(row) => (
          <>
            <ButtonComponent
              className="w-24 text-center bg-cyan-500 rounded-xl text-white text-sm leading-loose border border-transparent hover:text-cyan-500 hover:bg-white hover:border hover:border-cyan-500"
              variant="default"
              type="button"
              onClick={() => openModal(row)}
            >
              {AA}
            </ButtonComponent>
          </>
        )}
      />
      {/* 모달창 */}
      <ConfirmDeleteModal
        open={open}
        onClose={closeModal}
        onConfirm={handleDelete}
        title={CONFIRM_TITLE}
        content={CONFIRM_CONTENT}
      />
    </>
  );
};
